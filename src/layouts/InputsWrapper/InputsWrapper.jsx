import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './inputs-wrapper.module';

const cn = classNames.bind(styles);

export default function InputsWrapper({ children }) {
  return <div className={cn('container')}>{children}</div>;
}

InputsWrapper.propTypes = {
  children: PropTypes.node,
};
