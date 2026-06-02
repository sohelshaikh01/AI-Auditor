import { Link } from 'react-router-dom';
import AppIcon from './AppIcon';


const Navbar = () => {

  const navs = [
    { name: "Home", link: "/"},
    { name: "Reports", link: "/reports/:reportId" }
  ]

  return (
    <div className='flex flex-row h-full items-center w-full bg-gray-900 text-white'>
        <div className='flex flex-row gap-2 items-center px-8 py-2 h-full'>
          <AppIcon size={26} background={"#f59e0b"} />
          <h1 className='font-bold text-lg'>Ledger.ai</h1>
        </div>

        <nav>
          <ul className='list-none flex flex-row gap-10 px-6 py-2 font-semibold'>
            {navs.map((nav) => (
              <Link to={nav.link} key={nav.name}>{nav.name}</Link>
            ))}
          </ul>
        </nav>
    </div>
  )
}

export default Navbar;
