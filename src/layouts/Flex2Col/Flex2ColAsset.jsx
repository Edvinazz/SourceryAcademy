import classNames from 'classnames/bind';
import styles from './flex-2-col.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Flex2ColAsset({ children, size }) {
  return <div className={cn('asset', `asset--${size}`)}>{children}</div>;
}

Flex2ColAsset.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
};
