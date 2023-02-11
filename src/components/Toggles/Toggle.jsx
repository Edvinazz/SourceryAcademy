import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './toggle.module';

const cn = classNames.bind(styles);

export default function Toggle(props) {
  const { title, id, name, selectedValue } = props;

  const handleChange = (e) => props.onChange(e.target);

  return (
    <div>
      <input
        className={cn('radio-button')}
        onChange={handleChange}
        type="radio"
        name={name}
        value={id}
        checked={selectedValue === id}
        id={id}
      />
      <label htmlFor={id} className={cn('radio-label')}>
        {title}
      </label>
    </div>
  );
}

Toggle.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  selectedValue: PropTypes.string,
  onChange: PropTypes.func,
};
