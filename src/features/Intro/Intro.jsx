import classNames from 'classnames/bind';
import styles from './intro.module';
import PropTypes from 'prop-types';
import IntroText from './IntroText';
import IntroAsset from './IntroAsset';
import IntroLineText from '~/assets/svg/Lines/IntroLineText';
import IntroLineAsset from '~/assets/svg/Lines/IntroLineAsset';
import { useScrollToId } from '~/utils';

const cn = classNames.bind(styles);

export default function Intro({ children, data, isHomePage }) {
  return (
    <section className={cn('container')}>
      {isHomePage ? (
        <>
          <IntroText
            data={data}
            onClick={() => useScrollToId(data.scrollToId)}
          />

          <IntroAsset size="medium">{children}</IntroAsset>
        </>
      ) : (
        <>
          <IntroText data={data}>
            <IntroLineText className={cn('line', 'line--text')} />
          </IntroText>

          <IntroAsset size="big">
            {children}
            <IntroLineAsset className={cn('line', 'line--asset')} />
          </IntroAsset>
        </>
      )}
    </section>
  );
}

Intro.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
  isHomePage: PropTypes.bool,
};
