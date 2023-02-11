import classNames from 'classnames/bind';
import styles from './flex-2-col.module';
import PropTypes from 'prop-types';
import { TextBlock } from '~/components';

const cn = classNames.bind(styles);

export default function Flex2ColText({
  data,
  align,
  color,
  hTag,
  hSize,
  pStyle,
  gap,
}) {
  return (
    <div className={cn('text')}>
      <TextBlock
        data={data}
        align={align}
        color={color}
        hTag={hTag}
        hSize={hSize}
        pStyle={pStyle}
        gap={gap}
      />
    </div>
  );
}

Flex2ColText.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    btn: PropTypes.string,
    path: PropTypes.string,
    type: PropTypes.string,
  }),
  align: PropTypes.string,
  color: PropTypes.string,
  hTag: PropTypes.string,
  hSize: PropTypes.string,
  pStyle: PropTypes.string,
  gap: PropTypes.oneOf(['medium', 'big']),
};
