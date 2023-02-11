import { Admission } from '~/features';
import pageData from './pageData.json';

export default function FrontendAdmission() {
  return (
    <Admission
      textData={pageData.admissionSections}
      dates={pageData.admissionDates}
    />
  );
}
