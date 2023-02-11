import classNames from 'classnames/bind';
import styles from './questions-page.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function QuestionsWrapper({ children }) {
  return <div className={cn('wrapper')}>{children}</div>;
}
QuestionsWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};
