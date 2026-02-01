import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../features/todo/todoSlice';

const NewTodo = () => {

    const[title, setTitle] = useState("");
    const[desc, setDesc] = useState("");
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if(title) {
            dispatch(addTodo({title, desc}));
        }
        setTitle("");
        setDesc("");
    }

  return (
      <>
        <h1 className='text-2xl font-semibold py-2 bg-slate-200 text-purple-900 text-center'> My Todo List</h1>

        <form onSubmit={submitHandler} className="flex flex-col align-center bg-slate-100">

            <div className="px-4 my-4 mb-8 w-1/2">
                <label htmlFor="title" 
                className="text-xl font-semibold mr-2"> Title :</label>

                <input type="text" 
                className="outline-2 outline-gray-700 rounded-md px-3 py-2 border-2 border-black"
                placeholder="Enter Title" 
                value={title}
                onChange={(e) => { setTitle(e.target.value)}}
                />
            </div>

            <div className="px-4 mb-8 w-1/2">
                <label htmlFor="description" 
                className="text-xl font-semibold mr-2"> Description :</label>

                <input type="text" 
                className="outline-2 outline-gray-700 rounded-md px-3 py-2 border-2 border-black"
                placeholder="Enter Description"
                value={desc} 
                onChange={(e) => { setDesc(e.target.value)}}
                />
            </div>

            <div className='mb-4 px-4 w-1/2'>
                <button className="mx-auto px-4 py-1 border-2 border-black  hover:bg-pink-300 rounded-lg text-xl font-semibold"> Create </button>
            </div> 
        </form>

        {todos.length > 0 ? ( todos.map((todo) => (
            <li key={todo.id} className="my-2 px-4 py-2 flex justify-between list-none border w-full bg-slate-200">
                <span className="font-semibold text-xl w-1/5"> {todo.title}</span> 
                <span className="w-3/5 py-2"> {todo.desc} </span>
                <span className="mr-8 py-2 px-4 bg-red-500 font-semibold text-white rounded-lg" 
                onClick={() =>dispatch(removeTodo(todo.id))}> Delete</span>
            </li>
        )))
         : (<p className='p-4 border font-semibold text-xl'> No todos available, start creating new one! </p>)}

    </>
  )
}

export default NewTodo;
