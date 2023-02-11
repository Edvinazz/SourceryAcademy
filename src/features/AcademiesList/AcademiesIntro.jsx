import classNames from 'classnames/bind';
import styles from './academies-list.module';
import { Heading, Paragraph, ArrowBtn } from '~/components';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function AcademiesIntro({ data }) {
  return (
    <div className={cn('background')}>
      <div id="academiesIntro" className={cn('intro')}>
        <Heading tag="h2" style="big">
          {data.heading}
        </Heading>

        <Paragraph style="regular">{data.paragraph}</Paragraph>

        <ArrowBtn scrollto="academiesList" />
      </div>
    </div>
  );
}

AcademiesIntro.propTypes = {
  data: PropTypes.object,
};
