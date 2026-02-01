## Redux in React

### Why Redux?

- When a JavaScript application grows big, it becomes difficult for the user to manage its state.
- Redux solves this problem by managing application's state with a single global object called store.
- Makes Testing Very Easy
- Any components at any deep point in hierarchy can access the state
- Consistency throughout the application


### Actions and Reducers

- An `Action` is a plain object that describes the intention to cause change
- A `Reducer` is a function that determines changes to an application's state. return the new state and tell the store how to do.
- It uses the action it receives to determines this change.

        Action -> Reducer -> Store ->
                ^ View <-

Action comes  to Reducer then Reducer Apply it to the Store and Changes in Store are visible in view
- Action comes with Types:"" (What to do) PayLoad:"" Amount of Action -> it goes to the Reducer as the actual performer.


## Steps to create this application

1) Create a simple navbar with shop component with add and remove buttons.

2) Creating store to use redux toolkit

- Install this for further development:
`npm i redux react-redux redux-thunk` libraries and thunk as middleware

#### In Redux a reducer is a pure function that takes an action and the previous state of the application and return the new state.
