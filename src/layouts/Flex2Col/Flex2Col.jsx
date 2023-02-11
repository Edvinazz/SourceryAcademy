import classNames from 'classnames/bind';
import styles from './flex-2-col.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Flex2Col({ children, direction }) {
  return (
    <div className={cn('container', `container--${direction}`)}>{children}</div>
  );
}

Flex2Col.propTypes = {
  children: PropTypes.array,
  direction: PropTypes.string,
};
