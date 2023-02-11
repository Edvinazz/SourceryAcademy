import classNames from 'classnames/bind';
import styles from './frontend-page.module';

import { MetaTitle } from '~/components';
import pageData from './pageData.json';
import { AcademiesWrapper } from '~/layouts';
import FrontendIntro from './FrontendIntro';
import FrontendSteps from './FrontendSteps';
import FrontendAdmission from './FrontendAdmission';
import FrontendSchedule from './FrontendSchedule';
import FrontendTestimonials from './FrontendTestimonials';
import FrontendGallery from './FrontendGallery';
import FrontendApply from './FrontendApply';
import { useTheme, Theme } from '~/utils';

const cn = classNames.bind(styles);

export default function FrontendAcademy() {
  useTheme(Theme.RED);

  return (
    <>
      <MetaTitle data={pageData.meta} />
      <div className={cn('container')}>
        <FrontendIntro />
        <AcademiesWrapper>
          <FrontendSteps />
          <FrontendAdmission />
          <FrontendSchedule />
          <FrontendTestimonials />
          <FrontendGallery />
          <FrontendApply />
        </AcademiesWrapper>
      </div>
    </>
  );
}
