import classNames from 'classnames/bind';
import styles from './video-player.module';
import PropTypes from 'prop-types';
import PauseIcon from '~/assets/svg/videoPlayer/pauseIcon';
import SoundIcon from '~/assets/svg/videoPlayer/SoundIcon';
import SoundMutedIcon from '~/assets/svg/videoPlayer/SoundMutedIcon';
import SettingsIcon from '~/assets/svg/videoPlayer/SettingsIcon';
import FullscreenIcon from '~/assets/svg/videoPlayer/FullscreenIcon';
import PlayIcon from '~/assets/svg/videoPlayer/PlayIcon';
import { useState, useRef, useEffect } from 'react';

const cn = classNames.bind(styles);

export default function VideoPlayer(props) {
  const { videoLink, videoId } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener('timeupdate', handleTimeUpdate);
    document.addEventListener('fullscreenchange', handleEscFullscreen);

    if (video.ended) {
      video.currentTime = 0;
      setIsPlaying(false);
    }
    return () => {
      document.removeEventListener('fullscreenchange', handleEscFullscreen);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  });

  const handlePlaybackSpeed = (e) => {
    videoRef.current.playbackRate = e.target.value;
  };

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
    setDuration(e.target.duration);
  };

  const handlePlay = () => {
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }

    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (e) => {
    videoRef.current.currentTime = e.target.value;
  };

  const handleEscFullscreen = () => {
    if (!document.fullscreenElement) {
      setIsFullscreen(false);
    }
  };

  const toggleFullScreen = () => {
    const videoWrapper = document.getElementById(videoId);

    if (document.fullscreenElement != videoWrapper) {
      if (videoWrapper.requestFullscreen) {
        videoWrapper.requestFullscreen();
      } else if (videoWrapper.msRequestFullscreen) {
        videoWrapper.msRequestFullscreen();
      } else if (videoWrapper.mozRequestFullScreen) {
        videoWrapper.mozRequestFullScreen();
      } else if (videoWrapper.webkitRequestFullscreen) {
        videoWrapper.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleSoundChange = (e) => {
    setVolume(e.target.value);
    videoRef.current.volume = e.target.value;
    setMuted(false);
    videoRef.current.muted = false;
    if (e.target.value <= 0.001) {
      setMuted(true);
      videoRef.current.muted = true;
    }
  };

  const handleMuteClick = () => {
    videoRef.current.muted = !muted;
    setMuted(!muted);
    if (volume <= 0.001 && muted) {
      videoRef.current.volume = 1;
      setVolume(1);
    }
  };

  return (
    <div
      className={cn('wrapper')}
      id={videoId}
      data-isfullscreen={isFullscreen}
    >
      <div className={cn('video-container')}>
        <video
          className={cn('video')}
          src={videoLink}
          ref={videoRef}
          onDoubleClick={toggleFullScreen}
          onClick={(e) => handlePlay(e)}
        ></video>
      </div>
      <div className={cn('video-controls')}>
        <button
          className={cn('video-action-button', 'play-pause')}
          onClick={(e) => handlePlay(e)}
          aria-pressed={isPlaying}
        >
          <span className={cn('icon-wrapper', 'pause')}>
            <PauseIcon />
          </span>
          <span className={cn('icon-wrapper', 'play')}>
            <PlayIcon />
          </span>
        </button>
        <input
          type="range"
          className={cn('duration-bar')}
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSliderChange}
          step={duration / 100}
        />
        <div className={cn('video-action-button', 'sound')}>
          <button
            className={cn('icon-wrapper', 'button-icon', 'sound-icon')}
            onClick={handleMuteClick}
            data-muted={muted}
          >
            <span className={cn('sound-muted')}>
              <SoundMutedIcon />
            </span>
            <span className={cn('sound-not-muted')}>
              <SoundIcon />
            </span>
          </button>
          <div className={cn('sound-settings-wrapper')}>
            <input
              type="range"
              className={cn('sound-settings')}
              min={0}
              max={1}
              value={videoRef.current && videoRef.current.muted ? 0 : volume}
              onChange={handleSoundChange}
              step={0.01}
            />
          </div>
        </div>
        <div className={cn('video-action-button', 'settings')}>
          <button className={cn('icon-wrapper', 'button-icon')}>
            <SettingsIcon />
          </button>
          <div className={cn('settings-speed-wrapper')}>
            <p className={cn('settings-speed-text')}>Speed</p>

            <input
              className={cn('settings-speed-input')}
              name="playback-speed"
              id="speed--1"
              type="radio"
              value={0.5}
              onClick={handlePlaybackSpeed}
            />
            <label className={cn('settings-speed-label')} htmlFor="speed--1">
              0.5
            </label>
            <input
              className={cn('settings-speed-input')}
              name="playback-speed"
              id="speed--2"
              type="radio"
              value={1}
              onClick={handlePlaybackSpeed}
            />
            <label className={cn('settings-speed-label')} htmlFor="speed--2">
              1
            </label>
            <input
              className={cn('settings-speed-input')}
              name="playback-speed"
              id="speed--3"
              type="radio"
              value={2}
              onClick={handlePlaybackSpeed}
            />
            <label className={cn('settings-speed-label')} htmlFor="speed--3">
              2
            </label>
          </div>
        </div>
        <button
          className={cn('video-action-button', 'fullscreen')}
          onClick={toggleFullScreen}
        >
          <span className={cn('icon-wrapper')}>
            <FullscreenIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

VideoPlayer.propTypes = {
  videoLink: PropTypes.string,
  videoId: PropTypes.string,
};
