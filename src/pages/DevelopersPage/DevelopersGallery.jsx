import { Gallery } from '~/features';
import { useFetchData } from '~/hooks';
export default function DevelopersGallery() {
  const apiUrl = 'https://sfe-2022-data.netlify.app/static/media.json';
  const { loading, data, error } = useFetchData(apiUrl);

  return (
    <Gallery
      loading={loading}
      pictures={data}
      error={error}
      line="developers"
    />
  );
}
