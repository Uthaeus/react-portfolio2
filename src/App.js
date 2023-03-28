import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import Layout from "./pages/Layout";
import ProjectsPage from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
        path: 'projects',
        element: <ProjectsPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
