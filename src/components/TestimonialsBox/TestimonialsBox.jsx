import classNames from 'classnames/bind';
import styles from './testimonials-box.module';
import PropTypes from 'prop-types';
import { Heading, Paragraph, Card } from '~/components';

const cn = classNames.bind(styles);

export default function TestimonialsBox(props) {
  const { testimonial } = props;

  return (
    <Card>
      <img
        src={testimonial.photo}
        alt="academys graduate student"
        className={cn('image')}
      />
      <div className={cn('text-container')}>
        <span className={cn('quotes')}>&ldquo;</span>
        <Paragraph style="colored">{testimonial.message}</Paragraph>
        <span className={cn('quotes')}>&rdquo;</span>
      </div>
      <div className={cn('heading-container')}>
        <Heading tag="h4" style="small">
          {testimonial.name}
        </Heading>
        <Heading tag="h5" style="very-small--primary">
          {testimonial.academy}
        </Heading>
      </div>
    </Card>
  );
}

TestimonialsBox.propTypes = {
  testimonial: PropTypes.objectOf(PropTypes.string),
};
