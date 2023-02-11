import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from '../Checkbox/checkbox.module';

const cn = classNames.bind(styles);

const Checkbox = ({ label, value, onChange, required, name, error }) => {
  const handleChange = (event) => {
    onChange({
      ...event.target,
      value: !JSON.parse(event.target.value),
      name: event.target.name,
    });
  };

  return (
    <>
      <div className={cn('wrapper')}>
        <label htmlFor="privacy-checkbox"></label>
        <input
          className={cn('checkbox-field')}
          type="checkbox"
          name={name}
          value={value}
          checked={value}
          id="privacy-checkbox"
          onChange={handleChange}
          required={required}
        />
        <span className={cn('label-checkbox')}>{label}</span>
      </div>

      <p className={cn('error-message')}>{error}</p>
    </>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.bool,
  name: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
};
