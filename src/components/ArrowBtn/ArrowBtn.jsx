import classNames from 'classnames/bind';
import styles from './arrow-btn.module';
import PropTypes from 'prop-types';
import ArrowBtnLine from '~/assets/svg/home/ArrowBtnLine.svg';
import ArrowBtnIcon from '~/assets/svg/home/ArrowBtnIcon.svg';
import { useScrollToId } from '~/utils';

const cn = classNames.bind(styles);

export default function ArrowBtn({ scrollto }) {
  return (
    <div className={cn('btn')}>
      <div className={cn('btn__line')}>
        <ArrowBtnLine />
      </div>

      <button
        type="button"
        onClick={() => useScrollToId(scrollto)}
        className={cn('btn__icon')}
      >
        <ArrowBtnIcon />
      </button>
    </div>
  );
}

ArrowBtn.propTypes = {
  scrollto: PropTypes.string,
};
