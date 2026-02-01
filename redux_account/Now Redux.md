## Redux Toolkit Latest Version

- Redux is independant library and we use react-redux to give it connection.
- It can also work with other frameworks like vue or any other js framework. 

- In Context API we store all things at center and use hook to access that things anywhere.
- We wrap the app in Provider and get it through hook.

- Firstly there was the `Flux` Archietecture created by user.
- Data flow is not as strong as in Redux.

### Then after that to make better redux comes on.

- Changes are made only through the reducers in redux.
- From that there are better version know as redux-Toolkit.
- Which battery includes means only one setup and easy to create the store.

### Redux ToolKit Concept

- Store
Function that work for specific state
- Reducers 
Methods to Make the changes
- useSelector
- useDispatch

### Redux Toolkit Concept

Redux is individual library
React-redux is used for wiring react with redux

Steps and overview of Redux Toolkit

1) Create Store.js app for application
- Each application has only one store as single source of truth
- In Just exception where application is large the created two store
`configureStore` function is used and having key value pair in object.

2) Creating Reducer for it.
- Import the assigning library
- Given InitialState
- reducers functions with (state, action) parameters
- Export all reducers and also export their main source

- In `Context API` We first get the state and spread it and then add the new value in it.
- In Redux state is preserve

* Update functionality Use Update button, Text add input and Add Todo become Update.