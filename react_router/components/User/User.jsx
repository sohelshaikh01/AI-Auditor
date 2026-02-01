import { useParams } from "react-router-dom";

const User = () => {

    const {userid} = useParams();
    
    return (
        <div className='text-white m-4 bg-slate-600 text-2xl p-4 font-semibold'>
        User: {userid}
        </div>
    )
}

export default User;
