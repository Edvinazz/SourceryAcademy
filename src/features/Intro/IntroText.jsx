import classNames from 'classnames/bind';
import styles from './intro.module';
import PropTypes from 'prop-types';
import { TextBlock } from '~/components';

const cn = classNames.bind(styles);

export default function IntroText({ children, data, text, onClick }) {
  return (
    <div className={cn('text')}>
      <TextBlock
        data={data}
        text={text}
        align="start"
        hTag="h1"
        hSize="big"
        pStyle="regular"
        gap="medium"
        onClick={onClick}
      />
      {children}
    </div>
  );
}

IntroText.propTypes = {
  children: PropTypes.node,
  text: PropTypes.object,
  data: PropTypes.object,
  onClick: PropTypes.func,
};
