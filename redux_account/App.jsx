import './App.css';
import NewTodo from './components/NewTodo';
// import Navbar from './components/Navbar';
// import IShop from './components/IShop';
// import AddTodo from './components/AddTodo';
// import Todos from './components/Todos';

function App() {

  return (
    <>
        <h1 className='text-2xl py-2 font-bold bg-red-100 text-center'> Learn About Redux Toolkit</h1>
        {/* <Navbar/>
        <IShop/> */}

        {/* <AddTodo/>
        <Todos/> */}

        <NewTodo/>
        <p className="text-violet-600 font-semibold text-xl text-center my-2"> There are two app of redux in this.</p>
    </>
  )
}

export default App;
