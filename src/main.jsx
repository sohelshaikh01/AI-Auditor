import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import MainPage from './pages/MainPage.jsx';
import ReportPage from './pages/ReportPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainPage />
      },
      {
        path: "/reports/:reportId",
        element: <ReportPage />
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
