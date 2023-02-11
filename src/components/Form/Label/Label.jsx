import classNames from 'classnames/bind';
import styles from './label.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Label({ id, error, required, title }) {
  const classes = cn('wrapper', {
    'wrapper--error': error,
  });

  return (
    <label htmlFor={id} className={classes}>
      {required && <span className={cn('required')}>*</span>}
      {title}
    </label>
  );
}

Label.propTypes = {
  id: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  title: PropTypes.string,
};
