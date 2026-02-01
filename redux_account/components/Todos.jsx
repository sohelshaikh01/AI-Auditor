import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {

    // Retrieve the todos from the Redux store
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
      <>
        {/* Container for the list of todos */}
        <div className='bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md my-4'>
          <div className='font-semibold text-2xl text-gray-800'> Todo List</div>

          {/* Check if todos exist */}
          {todos.length > 0 ? (
            <ul className='mt-4 space-y-3'>
              {todos.map((todo) => (
                <li 
                  key={todo.id} 
                  className='flex items-center justify-between bg-white border border-gray-300 p-3 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out'
                > 
                  {/* Todo text */}
                  <div className='text-gray-800 text-lg'>
                    {todo.text}
                  </div>

                  {/* Remove button */}
                  <button 
                    className='text-white bg-red-500 py-1 px-3 ml-4 focus:outline-none hover:bg-red-600 rounded-lg transition-colors duration-200 ease-in-out'
                    onClick={() => dispatch(removeTodo(todo.id))} // Ensures proper dispatch on click
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            // Display message if no todos
            <div className='text-center text-gray-600 mt-4'>
              No todos added yet. Start by adding one!
            </div>
          )}
        </div>
      </>
    )
}

export default Todos;
