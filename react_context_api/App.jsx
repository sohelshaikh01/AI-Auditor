import './App.css';

// import { useEffect, useState } from 'react';

// import ThemeBtn from './components/ThemeBtn';
// import Card from './components/Card';
// import { ThemeProvider } from './context/ThemeContext';

import Profile from './components/Profile';
import Login from './components/Login';
import UserContextProvider from './context/userContPro';

function App() {
    
    // const [themeMode, setThemeMode] = useState("light");

    // These method has no functionally in context, declare it goes in it.
    // const lightTheme = () => {
    //     setThemeMode("light")
    // }

    // const darkTheme = () => {
    //     setThemeMode("dark");
    // } // darkMode property to apply in tailwind.config


    // Change in actual theme
    // useEffect(() => {
    //     document.querySelector('html').classList.remove("light", "dark");
    //     document.querySelector('html').classList.add(themeMode);
    // }, [themeMode])
    // Any change in 'themeMode' then it should run again
    // Any change in 'themeMode' anywhere will apply this to all app

    return (
        <>
            {/* <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>

                <div className="flex flex-wrap w-full min-h-screen p-8 items-center dark:bg-gray-800">
                    <div className="w-full">
                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4 border border-black dark:border-white rounded-2xl p-4">
                            <ThemeBtn/> 
                        </div>
                        <div className="w-full max-w-sm mx-auto">
                            <Card/>  */}
                            {/* Toggle is not working properly */}
                        {/* </div>
                    </div>
                </div>
            </ThemeProvider> */}
            
            <UserContextProvider>
                <div className="bg-sky-50 border border-black p-4">
                    <h1 className="text-4xl text-center"> React and Context API</h1>
                    <Login/>
                    <Profile/>
                </div>
                
            </UserContextProvider>

            <h1 className="text-xl text-sky-400 font-semibold w-full text-center mt-8 border-2 border-gray-500 p-2"> 
                This app contains two apps functionality.
                {/* Login and Logout App
                    Card Theme Changer App */}
            </h1>
        </>
    );
}

export default App;
