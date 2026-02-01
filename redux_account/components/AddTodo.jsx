import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(input.trim()) { // Only add if input is not empty or whitespace
            dispatch(addTodo(input.trim()));
            setInput("");
        }
    }

    return (
        <form onSubmit={addTodoHandler} className='flex flex-row justify-center space-x-4 mt-10 mb-8'>
            {/* Input field */}
            <input 
                type="text" 
                className='w-full md:w-2/3 lg:w-1/2 bg-gray-800 rounded border border-gray-700 outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out' 
                placeholder='Enter a Todo...'
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            /> 

            {/* Add Todo button */}
            <button 
                type="submit" 
                className=' text-white bg-indigo-500 py-2 px-6 rounded-lg hover:bg-indigo-600 transition-colors duration-200 ease-in-out'
            > 
                Add Todo 
            </button>
        </form>
    )
}

export default AddTodo;
