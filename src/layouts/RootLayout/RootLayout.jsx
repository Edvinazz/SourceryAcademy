import classNames from 'classnames/bind';
import styles from './root-layout.module';
import { Header, Footer } from '~/layouts';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';

const cn = classNames.bind(styles);

export default function RootLayout() {
  return (
    <div className={cn('container')}>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
