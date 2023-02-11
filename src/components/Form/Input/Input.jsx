import classNames from 'classnames/bind';
import styles from './input.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Input(props) {
  const classes = cn('field', {
    'field--required': props.required,
    'field--unchanged': props.unchanged,
  });

  return (
    <input
      accept={props.accept}
      className={classes}
      id={props.id}
      type={props.type}
      name={props.id}
      placeholder={props.placeholder}
      aria-invalid={props.error}
      aria-required={props.required}
      onChange={props.onChange}
      onBlur={props.onBlur}
    ></input>
  );
}

Input.propTypes = {
  accept: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  type: PropTypes.string,
  unchanged: PropTypes.bool,
};
