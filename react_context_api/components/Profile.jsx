import {  useContext} from 'react';
import UserContext from "../context/userContext.js";

function Profile() {

    const {user} = useContext(UserContext);

    // Conditional Rendering

    if(!user) {
        return <div  className='text-lg text-gray-700 border-2 bg-violet-50 border-black my-4 w-[340px] p-2 px-3 mx-auto'> 
        Please login in you Account </div>
    } else {
         return <div className='text-lg font-semibold text-teal-400 border-2 bg-violet-50 border-black my-4 w-[340px] p-2 px-3 mx-auto'> 
        Welcome {user.username ? user.username : "to your Account"} </div>
    }    

}

export default Profile;
