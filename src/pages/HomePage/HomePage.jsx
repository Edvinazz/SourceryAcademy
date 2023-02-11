import classNames from 'classnames/bind';
import styles from './home-page.module';

import { MetaTitle } from '../../components';
import pageData from './pageData.json';
import HomeIntro from './HomeIntro';
import HomeAcademiesList from './HomeAcademiesList';
import HomeTestimonials from './HomeTestimonials';
import HomeGallery from './HomeGallery';
import HomeWrapper from './HomeWrapper';

const cn = classNames.bind(styles);

export default function HomePage() {
  return (
    <>
      <MetaTitle data={pageData.meta} />
      <div className={cn('container')}>
        <HomeIntro />
        <HomeWrapper>
          <HomeAcademiesList />
          <HomeTestimonials />
          <HomeGallery />
        </HomeWrapper>
      </div>
    </>
  );
}
