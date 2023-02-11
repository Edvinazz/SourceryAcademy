import PropTypes from 'prop-types';
import StepAssets from './StepAssets';
import classNames from 'classnames/bind';
import styles from './steps.module';

const cn = classNames.bind(styles);

export default function StepFigure({ data }) {
  return (
    <div className={cn('figure')}>
      <div className={cn('circle')}>
        <div className={cn('circle-number')}>{data.number}</div>
        <div className={cn('illustration')}>
          <StepAssets data={data.number} />
        </div>
      </div>
    </div>
  );
}

StepFigure.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    paragraph: PropTypes.string,
    number: PropTypes.string,
  }),
};
