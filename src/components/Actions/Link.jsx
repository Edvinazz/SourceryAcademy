import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './button.module';
import PropTypes from 'prop-types';
import { validateUrl } from '~/utils/validateUrl';

const cn = classNames.bind(styles);

export default function Link({ children, path }) {
  if (validateUrl(path)) {
    return (
      <a href={path} rel="noreferrer" target="_blank" className={cn('btn')}>
        {children}
      </a>
    );
  } else {
    return (
      <RouterLink to={{ pathname: `${path}` }} className={cn('btn')}>
        {children}
      </RouterLink>
    );
  }
}

Link.propTypes = {
  children: PropTypes.string,
  path: PropTypes.string,
};
