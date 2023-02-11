import PropTypes from 'prop-types';
import useMediaQuery, { ScreenSize } from '~/hooks/useMediaQuery';
import StepFigure from './StepFigure';
import { Paragraph, Heading } from '~/components';
import classNames from 'classnames/bind';
import styles from './steps.module';

const cn = classNames.bind(styles);

export default function StepItem({ data }) {
  const sizeMobile = useMediaQuery(ScreenSize.Phone);

  return (
    <li className={cn('list-item')}>
      {sizeMobile ? (
        <>
          <div className={cn('asset-mobile')}>
            <StepFigure data={data} />
          </div>
          <Heading tag="h2" style="medium">
            {data.heading}
          </Heading>
          <Paragraph style={'regular'}>{data.paragraph}</Paragraph>
        </>
      ) : (
        <>
          <Heading tag="h2" style="medium">
            {data.heading}
          </Heading>
          <div className={cn('underline')}>
            <StepFigure data={data} />
          </div>
          <Paragraph style={'regular'}>{data.paragraph}</Paragraph>
        </>
      )}
    </li>
  );
}

StepItem.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string,
    paragraph: PropTypes.string,
    number: PropTypes.string,
  }),
};
