import classNames from 'classnames/bind';
import styles from './loader.module';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function Loader({ message = 'Loading... Please wait' }) {
  return (
    <div className={cn('container')}>
      <div className={cn('spinner')}></div>
      <div className={cn('text')}>{message}</div>
    </div>
  );
}

Loader.propTypes = {
  message: PropTypes.string,
};
