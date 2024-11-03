import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App.jsx';
import ErrorPage from './pages/errorpage.jsx';
import ContactPage from './pages/contactpage.jsx';
import HomePage from './pages/homepage.jsx';
import ResumePage from './pages/resumepage.jsx';

const router = createBrowserRouter([
  // Todo: Define the accessible routes, and which components respond to which URL
  {
    path: '/', // start with this path
    element: <App />, // start with app as the root
    errorElement: <ErrorPage />, // if there is an error render the error page
    children: [ // App has children below
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/About',
        element: <AboutPage />,
      },
      {
        path: '/resumepage',
        element: <ResumePage />,
      },
      {
        path: '/contactpage',
        element: <ContactPage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
