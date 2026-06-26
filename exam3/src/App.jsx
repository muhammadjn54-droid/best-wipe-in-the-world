
import { createBrowserRouter, RouterProvider } from 'react-router'
import AboutPage from './pages/About/AboutPage';
import HomePage from './pages/Home/HomePage';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';
import BlobPage from './pages/Blog/BlobPage';
import ContactPage from './pages/Contact/ContactPage';
import PropertyInfo from './pages/Info page/PropertyInfo';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/about',
          element: <AboutPage />
        },
        {
          path: '/contact',
          element: <ContactPage />
        },
        {
          path: '/property/:id',
          element: <PropertyInfo />
        },
        {
          path: '/blog',
          element: <BlobPage />
        }
      ]
    },

    {
      path: "*",
      element: <NotFound />
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}
export default App;