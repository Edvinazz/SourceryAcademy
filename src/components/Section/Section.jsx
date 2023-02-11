import classNames from 'classnames/bind';
import styles from './section.module';
import PropTypes from 'prop-types';
import { Heading, Paragraph, ListItem } from '~/components';

const cn = classNames.bind(styles);

export default function Section({ title, content }) {
  return (
    <section className={cn('container')}>
      <Heading tag="h3" style="medium">
        {title}
      </Heading>
      {!Array.isArray(content) && (
        <Paragraph style="regular">{content}</Paragraph>
      )}

      {Array.isArray(content) && (
        <ul className={cn('list')}>
          {content.map((line, index) => (
            <ListItem key={index}>{line}</ListItem>
          ))}
        </ul>
      )}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
