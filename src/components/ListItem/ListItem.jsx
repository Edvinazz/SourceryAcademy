import classNames from 'classnames/bind';
import styles from './list-item.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function ListItem({ children }) {
  return <li className={cn('item')}>{children}</li>;
}

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
