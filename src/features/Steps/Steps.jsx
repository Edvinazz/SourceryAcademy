import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './steps.module';
import StepItem from './StepItem';
import StepsLine from '~/assets/svg/Lines/StepsLine';

const cn = classNames.bind(styles);

const Step = PropTypes.shape({
  id: PropTypes.string,
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  number: PropTypes.string,
});

export default function Steps({ data }) {
  return (
    <section className={cn('container')}>
      <ul>
        {data.map((step) => (
          <StepItem key={step.id} data={step} />
        ))}
        <StepsLine className={cn('line')} />
      </ul>
    </section>
  );
}

Steps.propTypes = {
  data: PropTypes.arrayOf(Step),
};
