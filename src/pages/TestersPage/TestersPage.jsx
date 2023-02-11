import classNames from 'classnames/bind';
import styles from './testers-page.module';

import { MetaTitle } from '~/components';
import pageData from './pageData.json';
import { AcademiesWrapper } from '~/layouts';
import TestersIntro from './TestersIntro';
import TestersSteps from './TestersSteps';
import TestersAdmission from './TestersAdmission';
import TestersSchedule from './TestersSchedule';
import TestersTestimonials from './TestersTestimonials';
import TestersGallery from './TestersGallery';
import TestersApply from './TestersApply';
import { useTheme, Theme } from '~/utils';

const cn = classNames.bind(styles);

export default function TestersAcademy() {
  useTheme(Theme.GREEN);

  return (
    <>
      <MetaTitle data={pageData.meta} />
      <div className={cn('container')}>
        <TestersIntro />
        <AcademiesWrapper>
          <TestersSteps />
          <TestersAdmission />
          <TestersSchedule />
          <TestersTestimonials />
          <TestersGallery />
          <TestersApply />
        </AcademiesWrapper>
      </div>
    </>
  );
}
