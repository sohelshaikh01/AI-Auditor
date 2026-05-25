import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const navs = [
    { name: "Home", link: "/"},
    { name: "Audit", link: "/audit" }
  ]

  return (
    <div className='flex flex-row h-full items-center justify-between gap-4 w-full bg-gray-500 text-white'>
        <div className='flex flex-row gap-2 items-center px-8 py-2 h-full'>
          <img src="./images" alt="OA" />
          <h1>Optimized AI</h1>
        </div>
        <nav>
          <ul className='list-none flex flex-row gap-16 px-8 py-2'>
            {navs.map((nav) => (<Link to={nav.link} key={nav.name}>{nav.name}</Link>))}
          </ul>
        </nav>
    </div>
  )
}

export default Navbar;
