import classNames from 'classnames/bind';
import styles from './media.module';

const cn = classNames.bind(styles);

export default function Media() {
  return <div className={cn('media')}></div>;
}
