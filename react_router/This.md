## React Router in OneShot

- Understanding use of navigation on react application.
- Understand how to access params from url

- React-router-dom is 3rd party library

- We use `Link` tag for navigation in app, which avoid full page reload in app.
- It is good to avoid a Tag in navigation

- `NavLink` we can use classes using ()function to access `isActive` class, to manipulate the classes and style according the navigation
- Also use `to=""` to tell on what route it is.
- This linking automatically inject the data inside `isActive` state

## Summary of this Code:

- We Create `Layout` file 
- Give fixed components and Outlet in which components
- To change content in `Outlet` created routes in `main.jsx`
- Given `Layout` at top and make another routes in it
- Created a proper routes in this

- To do Routing make closing tag in place of self closing route tag
- Getting dynamic values from the url in `params`


### Accessing params from url
- `user/:userid` syntax in routes
- Accessing this values through `useParams` modules in navigated page

### In This we are not using App.jsx

- Using <RouterProvider/> in `main.jsx` and using props as `router={router}`
* Routing is happening in nesting in `/` 


## Loader concept in Route

- `loader` Property in Route
- It give functionallity to make API call in url
- When the cursor start hover it make API call-
- Store that data in cache