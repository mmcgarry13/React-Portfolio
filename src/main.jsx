import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App.jsx';
import ErrorPage from './pages/errorpage.jsx';
import ContactPage from './pages/contactpage.jsx';
import HomePage from './pages/homepage.jsx';
import ResumePage from './pages/resumepage.jsx';
import AboutPage from './pages/aboutpage.jsx';

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
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

);
