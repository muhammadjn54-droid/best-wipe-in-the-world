
import { createBrowserRouter, RouterProvider } from 'react-router'
import AboutPage from './pages/About/AboutPage';
import HomePage from './pages/Home/HomePage';
import Layout from './layout/Layout';
import NotFound from './pages/NotFound';
import BlobPage from './pages/Blog/BlobPage';
import ContactPage from './pages/Contact/ContactPage';

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