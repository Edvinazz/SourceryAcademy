import classNames from 'classnames/bind';
import styles from './dateInfo.module';
import LocationPin from '~/assets/svg/LocationPin';
import PropTypes from 'prop-types';
import { Paragraph } from '~/components';

const cn = classNames.bind(styles);

export default function DateInfo(props) {
  const { description, locationIcon } = props;

  const date = new Date(props.date);
  const secondDate = new Date(props.secondDate);
  const month = date.toLocaleString('default', { month: 'short' });
  const day = date.getDate();

  const dateClass = !locationIcon ? 'dates--location' : '';

  const isDate = (date) => {
    return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
  };

  const SecondDate = () => {
    if (isDate(secondDate)) {
      const monthTwo = secondDate.toLocaleString('default', { month: 'short' });
      const dayTwo = secondDate.getDate();
      return (
        <div className={cn('date--second')}>
          <p className={cn('month')}>{monthTwo}</p>
          <p className={cn('day')}>{dayTwo}</p>
        </div>
      );
    }
  };

  const Location = () =>
    locationIcon && (
      <div className={cn('pin-icon')}>
        <LocationPin />
      </div>
    );

  const DateInfo = () => {
    if (description && isDate(date)) {
      return (
        <div className={cn('date-info')}>
          <div className={cn('dates', dateClass)}>
            <div className={cn('date')}>
              <p className={cn('month')}>{month}</p>
              <p className={cn('day')}>{day}</p>
            </div>
            <SecondDate />
          </div>
          <div className={cn('description')}>
            <Location />
            <Paragraph style="colored--big">{description}</Paragraph>
          </div>
        </div>
      );
    }
  };
  return <DateInfo />;
}

DateInfo.propTypes = {
  date: PropTypes.string,
  secondDate: PropTypes.string,
  description: PropTypes.string,
  locationIcon: PropTypes.bool,
};
