import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import MainPage from './pages/MainPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainPage />
      }
      // Also add shared page for reports
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
