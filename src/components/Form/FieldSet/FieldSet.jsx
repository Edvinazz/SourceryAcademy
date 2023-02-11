import classNames from 'classnames/bind';
import styles from './fieldset.module';
import PropTypes from 'prop-types';
import { Legend } from '~/components';

const cn = classNames.bind(styles);

export default function Fieldset({ children, required, title }) {
  return (
    <fieldset className={cn('container')}>
      <Legend required={required} title={title} />
      {children}
    </fieldset>
  );
}
Fieldset.propTypes = {
  required: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
};
