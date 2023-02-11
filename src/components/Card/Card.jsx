import classNames from 'classnames/bind';
import styles from './card.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Card(props) {
  const { children } = props;

  return <div className={cn('container')}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};
