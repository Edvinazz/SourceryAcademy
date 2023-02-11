import PropTypes from 'prop-types';

import { useFetchData } from '~/hooks';
import { filterUserAcademy, Academies } from '~/utils';
import { Testimonials } from '~/features';
import pageData from './pageData.json';

export default function TestersTestimonials() {
  const { loading, data, error } = useFetchData(pageData.testiminialsUrl);
  const students = filterUserAcademy(data, Academies.TESTERS);

  return <Testimonials loading={loading} data={students} error={error} />;
}
