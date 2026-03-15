import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import HomePage from '../Pages/Home/HomePage';
import AppsPage from '../Pages/Apps/AppsPage';

export const router = createBrowserRouter([
   {
      path: '/',
      Component: Root,
      children: [
         {
            index: true,
            path: '/',
            Component: HomePage,
         },
         {
            path: 'apps',
            Component: AppsPage,
         },
      ],
   },
]);
