import classNames from 'classnames/bind';
import styles from './heading.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Heading({ tag, style, children }) {
  const Tag = tag;
  return <Tag className={cn(style)}>{children}</Tag>;
}

Heading.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  style: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
