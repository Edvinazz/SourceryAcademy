import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './testimonials.module';

import { TestimonialsBox, Loader, Heading } from '~/components';

const cn = classNames.bind(styles);

export default function Testimonials(props) {
  const { loading, data, error } = props;

  return (
    <section className={cn(`${!error ? 'container' : 'hidden'}`)}>
      <Heading tag="h2" style="big">
        Testimonials
      </Heading>

      {loading && <Loader />}

      {!loading && !error && (
        <div className={cn('wrapper')}>
          {data.map((testimonial, index) => (
            <TestimonialsBox key={index} testimonial={testimonial} />
          ))}
        </div>
      )}
    </section>
  );
}

Testimonials.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      academy: PropTypes.string,
      graduate: PropTypes.string,
      message: PropTypes.string,
      name: PropTypes.string,
      photo: PropTypes.string,
    })
  ),
};
