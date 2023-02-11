import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './apply.module';
import { Flex2Col, Flex2ColAsset } from '~/layouts';
import { ApplyText } from '~/features/Apply';
import ApplyLine from '~/assets/svg/Lines/ApplyLine';

const cn = classNames.bind(styles);

export default function Apply({ children, data }) {
  return (
    <section>
      <Flex2Col direction="left">
        <Flex2ColAsset size="big">
          <div className={cn('line-container')}>
            {children}
            <ApplyLine className={cn('line')} />
          </div>
        </Flex2ColAsset>
        <ApplyText data={data} />
      </Flex2Col>
    </section>
  );
}

Apply.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
};
