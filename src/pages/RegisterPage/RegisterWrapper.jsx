import classNames from 'classnames/bind';
import styles from './register-page.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function RegisterWrapper({ children }) {
  return <div className={cn('wrapper')}>{children}</div>;
}

RegisterWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};
