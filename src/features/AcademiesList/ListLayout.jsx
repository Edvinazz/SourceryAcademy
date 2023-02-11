import PropTypes from 'prop-types';
import { Flex2Col, Flex2ColAsset, Flex2ColText } from '~/layouts/Flex2Col';

export default function ListLayout({ children, direction, data, gap }) {
  return (
    <Flex2Col direction={direction}>
      <Flex2ColAsset size="medium">{children}</Flex2ColAsset>

      <Flex2ColText
        data={data}
        align={direction === 'left' ? 'start' : 'end'}
        hTag="h3"
        hSize="medium"
        pStyle="regular"
        gap="medium"
      />
    </Flex2Col>
  );
}

ListLayout.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.oneOf(['left', 'right']),
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    btn: PropTypes.string,
    path: PropTypes.string,
    type: PropTypes.string,
  }),
  gap: PropTypes.oneOf(['medium', 'big']),
};
