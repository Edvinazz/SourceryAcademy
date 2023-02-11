import classNames from 'classnames/bind';
import styles from './schedule.module';
import PropTypes from 'prop-types';
import Clock from '~/assets/svg/Clock';
import PersonOutline from '~/assets/svg/PersonOutline';

const cn = classNames.bind(styles);

const TimeDuration = ({ time, duration }) => {
  var isValid = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/.test(time);

  if (isValid || time.toLowerCase() === 'offline') {
    return (
      <p>
        {time}
        {duration && <span className={cn('duration')}>{duration}</span>}
      </p>
    );
  }
};

export default function AccordionContent(props) {
  const { description, time, duration, children } = props;

  return (
    <>
      <div className={cn('information')}>
        {description && (
          <div className={cn('line')}>
            <div className={cn('icon-sm')}>
              <PersonOutline />
            </div>
            <p>{description}</p>
          </div>
        )}

        <div className={cn('line')}>
          <div className={cn('icon-sm')}>
            <Clock />
          </div>
          <TimeDuration time={time} duration={duration} />
        </div>
      </div>
      <div className={cn('inner')}>{children}</div>)
    </>
  );
}

AccordionContent.propTypes = {
  description: PropTypes.string,
  time: PropTypes.string,
  duration: PropTypes.string,
  children: PropTypes.node,
};
