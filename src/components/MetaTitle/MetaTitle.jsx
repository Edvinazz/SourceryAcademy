import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export default function MetaTitle({ data }) {
  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
    </Helmet>
  );
}

MetaTitle.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
