import classNames from 'classnames/bind';
import styles from './home-page.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function HomeWrapper({ children }) {
  return <div className={cn('wrapper')}>{children}</div>;
}
HomeWrapper.propTypes = {
  children: PropTypes.array,
};
