import { useFetchData } from '~/hooks';
import { filterUserAcademy, Academies } from '~/utils';
import { Testimonials } from '~/features';

const testimonialsUrl = 'https://www.jurele.lt/testimonials.json';

export default function HomeTestimonials() {
  const { loading, data, error } = useFetchData(testimonialsUrl);
  const students = filterUserAcademy(data, Academies.ALL);

  return <Testimonials loading={loading} data={students} error={error} />;
}
