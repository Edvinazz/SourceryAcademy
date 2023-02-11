import { Intro, IntroAsset, IntroText } from '~/features/Intro';
import pageData from './pageData.json';
import ImgHomeIntro from '~/assets/svg/home/HomeIntro';

export default function HomeIntro() {
  return (
    <Intro isHomePage={true} data={pageData.homeIntro}>
      <ImgHomeIntro />
    </Intro>
  );
}
