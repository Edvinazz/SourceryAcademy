import { AcademiesList } from '~/features';
import pageData from './pageData.json';

export default function HomeAcademiesList() {
  return <AcademiesList data={pageData.academies} />;
}
