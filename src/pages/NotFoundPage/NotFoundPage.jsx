import classNames from 'classnames/bind';
import styles from './not-found-page.module';

import { MetaTitle } from '~/components';
import pageData from './pageData.json';
import { Link } from 'react-router-dom';

const cn = classNames.bind(styles);

export default function NotFoundPage() {
  return (
    <>
      <MetaTitle data={pageData.meta} />
      <div className={cn('container')}>
        <h1 className={cn('heading')}>404</h1>
        <p className={cn('paragraph')}>
          Sorry, looks like the page you are trying to reach no longer exists.
          <br />
          Let&apos;s get you{' '}
          <Link to={{ pathname: '/home' }} className={cn('link')}>
            home
          </Link>
          .
        </p>
      </div>
    </>
  );
}
