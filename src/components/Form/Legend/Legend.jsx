import classNames from 'classnames/bind';
import styles from './legend.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Legend({ required, title }) {
  return (
    <legend className={cn('wrapper')}>
      {required && <span className={cn('required')}>*</span>}
      {title}
    </legend>
  );
}

Legend.propTypes = {
  required: PropTypes.bool,
  title: PropTypes.string,
};
