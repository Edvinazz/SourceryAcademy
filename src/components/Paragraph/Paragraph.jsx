import classNames from 'classnames/bind';
import styles from './paragraph.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Paragraph({ style, children }) {
  return <p className={cn(style)}>{children}</p>;
}

Paragraph.propTypes = {
  style: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
