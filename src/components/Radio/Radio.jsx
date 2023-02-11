import classNames from 'classnames/bind';
import styles from './radio.module.scss';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

const Radio = ({
  onChange,
  label,
  id,
  name,
  required,
  selectedValue,
  value,
}) => {
  const handleChange = (event) => {
    onChange({
      ...event.target,
      value: event.target.value,
      name: event.target.name,
    });
  };

  return (
    <div className={cn('options-container')}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className={cn('option')}
        onChange={handleChange}
        required={required}
        checked={selectedValue === value}
      />
      <label htmlFor={id} className={cn('option-label')}>
        {label}
      </label>
    </div>
  );
};

export default Radio;

Radio.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  selectedValue: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.string,
};
