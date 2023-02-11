import React from 'react';
import { Intro } from '~/features/Intro';
import pageData from './pageData.json';
import IntroVideo from '../../features/Intro/IntroVideo';

export default function DevelopersIntro() {
  return (
    <Intro data={pageData.developersIntro}>
      <IntroVideo
        introVideoThumbnail="https://sfe-2022-data.netlify.app/static/video/developers/thumbnails/47110170574_c00cc2b54d_k-1.jpg"
        introVideoUrl="https://sfe-2022-data.netlify.app/static/video/developers/80b0058a9428314582a3f25f3b1dfb8bc27de8a4.mp4"
      />
    </Intro>
  );
}
