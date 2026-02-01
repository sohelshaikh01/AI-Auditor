## ContextAPI Crash Course:

Folder => react_context_api

**Packages**

- No Extra

Earlier we send data using props in components throught component, which mess the code and at someplace data is not useful.
This tradional method of passing data in props in components known as `props drilling`.

`Context API` sending data through making components to get the data in project anywhere

`Redux` is also one of Advanced state management tool.
`Redux Toolkit` is Redux easier version.
`Zustand` is also library for state management.


`ContextAPI` provide a way to pass data through the components tree without having to pass props down manually at every level in a typicall React application

Learning it through Project 1: Theme Changer


## React Router In One Video

Using <RouterProvider router={router} /> in place of <App/> and it takes the props

Learn How to Create a Router in main.jsx

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>
    }
])

Another way to do this:

- Create a Root / Layout.jsx file in `src` folder
- Import the Components here

- import { Outlet } from react-router-dom;

This make the changes dynamic