import PropTypes from 'prop-types';

import { Flex2ColText } from '~/layouts';

export default function ApplyText({ data }) {
  return (
    <Flex2ColText
      data={data}
      align="start"
      hTag="h2"
      hSize="big"
      pStyle="bold"
      gap="big"
    />
  );
}

ApplyText.propTypes = {
  data: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    btn: PropTypes.string,
    path: PropTypes.string,
    type: PropTypes.string,
  }),
};
