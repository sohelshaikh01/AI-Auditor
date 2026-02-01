// import React from 'react';
import { useSelector } from 'react-redux';
import svg from '../assets/react.svg';

const Navbar = () => {

    const amount = useSelector(state => state.amount);

  return (
    <div>
        <nav className="bg-slate-200 border-gray-200 dark:bg-gray-900 container">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-3">

            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={svg} className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> State Bank of River</span>
            </a>


            <div className="items-center justify-between hidden w-full md:flex md:w-auto " id="navbar-search">
          
                <ul className="flex text-lg flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-slate-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-slate-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="/" className={`block py-2 px-3 text-white  md:hover:text-blue-700 rounded md:bg-transparent md:p-0 md:dark:text-blue-500`} aria-current="page" > Home</a>
                    </li>
                    <li>
                        <a href="/about" className={`block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>About</a>
                    </li>
                    <li>
                        <a href="/services" className={`block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Services</a>
                    </li>
                </ul>
            </div> 

            <div className=" inset-y-0 start-0 flex items-center ps-3 gap-2 ">
                <button href="/signup" disabled={true} className='px-4 py-1 rounded hover:text-white bg-blue-500 text-white font-semibold'> Your balance is : {amount} </button>
            </div>

        </div>
        </nav>
    </div>
  )
}

export default Navbar;
