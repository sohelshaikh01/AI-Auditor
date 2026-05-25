import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from "./components/Navbar";
import MainPage from './pages/MainPage';
import Footer from "./components/Footer";

const App = () => {

    return(
        <div className='w-full h-full flex flex-col items-center justify-center'>         
            <nav className='w-full h-18'>
                <Navbar />
            </nav>
            <main className='w-full'>
                <Outlet />
            </main>
            <footer className='w-full'>
                <Footer />
            </footer>
        </div>
    )
}

export default App;