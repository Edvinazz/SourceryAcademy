import React from 'react';
import { Intro } from '~/features/Intro';
import pageData from './pageData.json';
import IntroVideo from '../../features/Intro/IntroVideo';

export default function FrontendIntro() {
  return (
    <Intro data={pageData.frontendIntro}>
      <IntroVideo
        introVideoThumbnail="https://sfe-2022-data.netlify.app/static/video/frontend/thumbnails/49397671398_59fa405f03_o-3.jpg"
        introVideoUrl="https://sfe-2022-data.netlify.app/static/video/frontend/cb72a22297be0376bb14f23b598b8c77cc42c476.mp4"
      />
    </Intro>
  );
}
