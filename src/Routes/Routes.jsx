import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/Root';
import HomePage from '../Pages/Home/HomePage';
import AppsPage from '../Pages/Apps/Apps';
import AppDetails from '../Pages/AppDetails/AppDetails';
import Installation from '../Pages/Installation/Installation';

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
            loader: () => fetch('/AppData.json'),
         },
         {
            path: 'details/:id',
            Component: AppDetails,
            loader: () => fetch('/AppData.json'),
         },
         {
            path: 'installation',
            Component: Installation,
            loader: () => fetch('/AppData.json'),
         },
      ],
   },
]);
