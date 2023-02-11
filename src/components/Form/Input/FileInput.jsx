import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './file-input.module';
import PropTypes from 'prop-types';
import { Label } from '~/components';
import Input from './Input';

const cn = classNames.bind(styles);

export default function FileInput(props) {
  const [unchanged, setUnchanged] = useState(true);

  const handleChange = (e) => {
    props.onChange(e.target);
    setUnchanged(false);
  };

  const handleBlur = (e) => {
    props.onBlur(e.target);
  };

  return (
    <div className={cn('container')}>
      <Label
        id={props.id}
        error={props.error}
        required={props.required}
        title={props.title}
        placeholder={props.placeholder}
      />

      {unchanged && (
        <span className={cn('file-placeholder')}>{props.placeholder}</span>
      )}

      <Input
        accept={props.accept}
        id={props.id}
        type="file"
        placeholder={props.placeholder}
        error={props.error}
        required={props.error}
        onChange={handleChange}
        onBlur={handleBlur}
        unchanged={unchanged}
      />

      {props.error && (
        <p className={cn('error')}>{`${props.title} ${props.error}`}</p>
      )}
    </div>
  );
}

FileInput.propTypes = {
  accept: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
};
