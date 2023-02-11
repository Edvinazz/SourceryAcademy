import { Admission } from '~/features';
import pageData from './pageData.json';

export default function DevelopersAdmission() {
  return (
    <Admission
      textData={pageData.admissionSections}
      dates={pageData.admissionDates}
    />
  );
}
