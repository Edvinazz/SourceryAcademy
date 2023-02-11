import classNames from 'classnames/bind';
import styles from './radiogroup.module.scss';
import Radio from './Radio';
import PropTypes from 'prop-types';
import { Fieldset } from '~/components';

const cn = classNames.bind(styles);

const RadioGroup = ({ onChange, options, selectedValue, required, name }) => {
  return (
    <Fieldset
      style="very-small--secondary"
      required={required}
      title="Academy city"
    >
      <div className={cn('main-container')}>
        {options.map((option) => {
          return (
            <Radio
              id={option.value}
              key={option.value}
              label={option.value}
              name={name}
              onChange={onChange}
              selectedValue={selectedValue}
              value={option.value}
              required={required}
            />
          );
        })}
      </div>
    </Fieldset>
  );
};

export default RadioGroup;

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  selectedValue: PropTypes.string,
  key: PropTypes.number,
  name: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.bool,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      city: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};
