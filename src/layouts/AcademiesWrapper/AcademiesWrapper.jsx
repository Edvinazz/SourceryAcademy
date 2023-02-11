import classNames from 'classnames/bind';
import styles from './academies-wrapper.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function AcademiesWrapper({ children }) {
  return <div className={cn('wrapper')}>{children}</div>;
}

AcademiesWrapper.propTypes = {
  children: PropTypes.array,
};
