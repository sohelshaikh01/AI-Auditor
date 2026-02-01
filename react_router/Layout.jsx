import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';

function Layout() {
    return (
        <>
            <Header />
            {/* This app also contains bgChanger code */}
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;