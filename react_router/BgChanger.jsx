import { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('blue');
  // onClick expected that you pass function in it
  // Without function it is reference/
  // Passing any variable in that syntax store the return value of function in onClick
  // Thats why it need the function to pass the parameter.

  return (
    <>
      <div className='w-full h-screen duration-200' 
      style={{backgroundColor: color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">

            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 bg-red-500 rounded-full text-white shadow-lg'> Red</button>

            <button onClick={() => setColor("green")} className='outline-none px-4 py-1 bg-green-500 rounded-full text-white shadow-lg'> Green</button>

            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 bg-blue-500 rounded-full text-white shadow-lg'> Blue</button>

            <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 bg-yellow-500 rounded-full text-white shadow-lg'> Yellow</button>

            <button onClick={() => setColor("gray")} className='outline-none px-4 py-1 bg-gray-500 rounded-full text-white shadow-lg'> Gray</button>

            <button onClick={() => setColor("#f472b6")} className='outline-none px-4 py-1 bg-pink-400 rounded-full text-white shadow-lg'> Pink</button>

            <button onClick={() => setColor("#7e22ce ")} className='outline-none px-4 py-1 bg-purple-700 rounded-full text-white shadow-lg'> Lavender</button>

            <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 bg-orange-500 rounded-full text-white shadow-lg'> Orange</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App;
