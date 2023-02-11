import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './faq-box.module';
import { Accordion, Heading, Paragraph } from '~/components';
import FaqAsset from './FaqAsset';

const cn = classNames.bind(styles);

const Questions = PropTypes.shape({
  id: PropTypes.string,
  Question: PropTypes.string,
  Answer: PropTypes.string,
});

export default function FaqBox({ data, hasAsset = false }) {
  return (
    <div className={cn('container')} key={data.id}>
      <Heading tag="h2" style="medium">
        {data.title}
      </Heading>

      {hasAsset ? (
        <div className={cn('grid')}>
          <div>
            {data.questions.map((q) => (
              <Accordion title={q.Question} key={q.id} style="light">
                <Paragraph style="regular">{q.Answer}</Paragraph>
              </Accordion>
            ))}
          </div>
          <FaqAsset data={data.short} />
        </div>
      ) : (
        <div>
          {data.questions.map((q) => (
            <Accordion title={q.Question} key={q.id} style="light">
              <Paragraph style="regular">{q.Answer}</Paragraph>
            </Accordion>
          ))}
        </div>
      )}
    </div>
  );
}

FaqBox.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    short: PropTypes.string,
    id: PropTypes.string,
    questions: PropTypes.arrayOf(Questions),
  }),
  hasAsset: PropTypes.bool,
};
