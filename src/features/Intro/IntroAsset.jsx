import classNames from 'classnames/bind';
import styles from './intro.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function IntroAsset({ children, size }) {
  return <div className={cn('asset', `asset--${size}`)}>{children}</div>;
}

IntroAsset.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['big', 'medium']),
};
