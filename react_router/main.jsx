import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import {  Home, About, Contact, User, Github, githubInfoLoader } from './components';

// First Method
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]

//   }
// ]);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

      <Route path='' element={<Home /> }> </Route>

      <Route path='about' element={<About /> }> </Route>

      <Route path='contact' element={<Contact /> }> </Route>

      <Route path='user/:userid' element={<User /> }> </Route>

      {/* <Route path='github' element={<Github /> }
      // loader={({request}) => {
      //   fetch("/api/dashboard.json", {
      //     signal: request.signal,
      //   })
      // }} 
      > </Route> */}

      <Route path='github' element={<Github /> } loader={githubInfoLoader}> </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
