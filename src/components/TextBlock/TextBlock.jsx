import classNames from 'classnames/bind';
import styles from './text-block.module';
import PropTypes from 'prop-types';
import { Heading, Paragraph } from '~/components';
import { Button, Link } from '~/components/Actions';

const cn = classNames.bind(styles);

export default function TextBlock({
  data,
  align,
  hTag,
  hSize,
  pStyle,
  gap,
  onClick,
  type,
}) {
  return (
    <div className={cn('container', `container--${align}`)}>
      <div className={cn('text', `text-gap--${gap}`)}>
        <Heading tag={hTag} style={hSize}>
          {data.heading}
        </Heading>

        <Paragraph style={pStyle}>{data.paragraph}</Paragraph>
      </div>

      {data.path ? (
        <Link path={data.path}>{data.btn}</Link>
      ) : (
        <Button type={type} onClick={onClick}>
          {data.btn}
        </Button>
      )}
    </div>
  );
}

TextBlock.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    btn: PropTypes.string,
    path: PropTypes.string,
  }),
  align: PropTypes.oneOf(['start', 'end']),
  hTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  hSize: PropTypes.oneOf(['big', 'medium', 'small', 'very-small']),
  pStyle: PropTypes.oneOf(['regular', 'colored', 'bold']),
  gap: PropTypes.oneOf(['medium', 'big']),
  onClick: PropTypes.func,
  type: PropTypes.string,
};
