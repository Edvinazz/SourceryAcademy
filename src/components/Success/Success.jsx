import classNames from 'classnames/bind';
import styles from './success.module';
import PropTypes from 'prop-types';
import { Heading, Paragraph } from '~/components';

const cn = classNames.bind(styles);

export default function Success({ heading, message }) {
  return (
    <div className={cn('container')}>
      <div className={cn('icon')} />
      <Heading tag="h2" style="medium">
        {heading}
      </Heading>
      <Paragraph style="colored--medium">{message}</Paragraph>
    </div>
  );
}

Success.propTypes = {
  heading: PropTypes.string,
  message: PropTypes.string,
};
