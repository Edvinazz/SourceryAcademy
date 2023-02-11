import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './schedule.module';
import { Accordion, Heading } from '~/components';
import AccordionContent from './AccordionContent';
import ScheduleLine from '~/assets/svg/ScheduleLine';
import DateInfo from '~/components/DateInfo/DateInfo';

const cn = classNames.bind(styles);

export default function Schedule(props) {
  const { scheduleData } = props;
  return (
    <section className={cn('container')}>
      <Heading className={cn('title')} tag="h2" style="big">
        Schedule
      </Heading>
      <div className={cn('content')}>
        {scheduleData?.map((month, index) => {
          return (
            <div key={index} className={cn('grid-6')}>
              <h3 className={cn('months')}>{month.schedules}</h3>
              {month.monthSchedule &&
                month.monthSchedule.map((item, key) => {
                  return (
                    <div key={key} className={cn('grid-6-sm')}>
                      {item.schedule &&
                        item.schedule.map((day, index) => {
                          return (
                            <Accordion key={index} title={day.title}>
                              <AccordionContent
                                description={day.description}
                                time={day.time}
                                duration={day.duration}
                              >
                                {day.content.map((info, index) => (
                                  <DateInfo
                                    key={index}
                                    date={info.date}
                                    description={info.description}
                                    locationIcon={info.locationIcon}
                                  />
                                ))}
                              </AccordionContent>
                            </Accordion>
                          );
                        })}
                    </div>
                  );
                })}
            </div>
          );
        })}
        <div className={cn('background-line')}>
          <ScheduleLine />
        </div>
      </div>
    </section>
  );
}

Schedule.propTypes = {
  scheduleData: PropTypes.array,
};
