import { useState, useContext } from 'react';
import UserContext from "../context/userContext.js";

function Login() {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const { user, userLogin, userLogout } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!user && username){
            userLogin({username, password});
        }
        else {
            userLogout();
            setUsername('');
            setPassword('');
        }
    }

  return (
    <div>
        {(!user) ? 
        <h1 className='text-xl font-bold border-2  border-gray-600 my-4 p-2'> Login</h1> 
        : <h1 className='text-xl font-bold border-2  border-gray-600 my-4 p-2'> Logout</h1>}
          

        <input type='text' className='h-12 text-xl text-gray-300 p-2 outline-none bg-slate-800 border-2  border-gray-600' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' /> {" "}

        <input type='text' className='h-12 text-xl text-gray-300 p-2 outline-none bg-slate-800 border-2 border-gray-600 ' 
        value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />

        { (!user) ?  
        <button 
        className='p-0 px-2 border-2 outline-none text-white focus:outline-none border-gray-600 rounded-none mx-2 h-12 text-xl bg-slate-800 ' 
        onClick={handleSubmit}> Submit</button>

        :  <button 
        className='p-0 px-2 border-2 outline-none text-white focus:outline-none border-gray-600 rounded-none mx-2 h-12 text-xl bg-slate-800' 
        onClick={handleSubmit}> Logout </button> }
        
    </div>
  )
}

export default Login;
