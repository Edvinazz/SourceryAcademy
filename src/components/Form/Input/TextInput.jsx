import classNames from 'classnames/bind';
import styles from './text-input.module';
import PropTypes from 'prop-types';
import { Label } from '~/components';
import Input from './Input';

const cn = classNames.bind(styles);

export default function TextInput(props) {
  const handleChange = (e) => {
    props.onChange(e.target);
  };

  const handleBlur = (e) => {
    props.onBlur(e.target);
  };

  return (
    <div className={cn('container')}>
      <Label
        id={props.id}
        error={props.error}
        placeholder={props.placeholder}
        required={props.required}
        title={props.title}
      />
      <Input
        error={props.error}
        id={props.id}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={props.placeholder}
        required={props.error}
        type="text"
      />

      {props.error && (
        <p className={cn('error')}>{`${props.title} ${props.error}`}</p>
      )}
    </div>
  );
}

TextInput.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  title: PropTypes.string,
};
