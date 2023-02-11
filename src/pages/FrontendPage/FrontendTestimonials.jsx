import { useFetchData } from '~/hooks';
import { filterUserAcademy, Academies } from '~/utils';
import { Testimonials } from '~/features';
import pageData from './pageData.json';

export default function FrontendTestimonials() {
  const { loading, data, error } = useFetchData(pageData.testiminialsUrl);
  const students = filterUserAcademy(data, Academies.FRONTEND);

  return <Testimonials loading={loading} data={students} error={error} />;
}
