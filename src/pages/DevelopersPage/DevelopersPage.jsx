import classNames from 'classnames/bind';
import styles from './developers-page.module';

import { MetaTitle } from '~/components';
import pageData from './pageData.json';
import { AcademiesWrapper } from '~/layouts';
import DevelopersIntro from './DevelopersIntro';
import DevelopersSteps from './DevelopersSteps';
import DevelopersAdmission from './DevelopersAdmission';
import DevelopersSchedule from './DevelopersSchedule';
import DevelopersTestimonials from './DevelopersTestimonials';
import DevelopersGallery from './DevelopersGallery';
import DevelopersApply from './DevelopersApply';
import { useTheme, Theme } from '~/utils';

const cn = classNames.bind(styles);

export default function DevelopersPage() {
  useTheme(Theme.BLUE);

  return (
    <>
      <MetaTitle data={pageData.meta} />
      <div className={cn('container')}>
        <DevelopersIntro />
        <AcademiesWrapper>
          <DevelopersSteps />
          <DevelopersAdmission />
          <DevelopersSchedule />
          <DevelopersTestimonials />
          <DevelopersGallery />
          <DevelopersApply />
        </AcademiesWrapper>
      </div>
    </>
  );
}
