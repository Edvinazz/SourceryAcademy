import React from 'react';
import { Steps } from '~/features';
import pageData from './pageData.json';

export default function FrontendSteps() {
  return <Steps data={pageData.academyStepsSection} />;
}
