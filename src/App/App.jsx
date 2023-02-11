import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './app.module';
import { RootLayout } from '~/layouts';

import {
  HomePage,
  RegisterPage,
  DevelopersPage,
  TestersPage,
  FrontendPage,
  QuestionsPage,
  NotFoundPage,
} from '~/pages';

const cn = classNames.bind(styles);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/developers" element={<DevelopersPage />} />
      <Route path="/testers" element={<TestersPage />} />
      <Route path="/frontend" element={<FrontendPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/questions" element={<QuestionsPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default function App() {
  return (
    <div className={cn('app')}>
      <RouterProvider router={router} />
    </div>
  );
}
