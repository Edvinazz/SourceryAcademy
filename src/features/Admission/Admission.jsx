import classNames from 'classnames/bind';
import styles from './admission.module';
import PropTypes from 'prop-types';
import { Heading, Section, DateInfo } from '~/components';
import AdmissionLine from '~/assets/svg/Lines/AdmissionLine';
import AdmissionFigure from '~/assets/svg/Figures/AdmissionFigure';

const cn = classNames.bind(styles);

export default function Admission(props) {
  const { textData, dates } = props;

  return (
    <div className={cn('container')}>
      <div className={cn('text')}>
        <Heading tag="h2" style="big">
          The Admission
        </Heading>

        {textData.map((section) => (
          <Section
            key={section.id}
            title={section.heading}
            content={section.text}
          />
        ))}
      </div>

      <div className={cn('date')}>
        <Heading tag="h3" style="medium">
          Dates
        </Heading>
        <div className={cn('dates')}>
          {dates.map((date) => (
            <DateInfo
              key={date.id}
              date={date.date}
              secondDate={date.secondDate}
              description={date.description}
              location={date.location}
            />
          ))}
        </div>
        <AdmissionFigure className={cn('figure')} />
      </div>
      <AdmissionLine className={cn('line')} />
    </div>
  );
}

Admission.propTypes = {
  textData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      heading: PropTypes.string,
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    })
  ),
  dates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      secondDate: PropTypes.string,
      description: PropTypes.string,
      location: PropTypes.bool,
    })
  ),
};
