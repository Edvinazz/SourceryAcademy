import React from 'react';
import { Intro } from '~/features/Intro';
import pageData from './pageData.json';
import IntroVideo from '../../features/Intro/IntroVideo';

export default function TestersIntro() {
  return (
    <Intro data={pageData.testersIntro}>
      <IntroVideo
        introVideoThumbnail="https://sfe-2022-data.netlify.app/static/video/testers/thumbnails/48741988306_5beb53f25e_o.jpg"
        introVideoUrl="https://sfe-2022-data.netlify.app/static/video/testers/7cd88093664cd782e4868a6706f2787da2eb7dc9.mp4"
      />
    </Intro>
  );
}
