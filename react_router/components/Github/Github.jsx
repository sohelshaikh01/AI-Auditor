import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

const Github = () => {

    // const data = useLoaderData();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/sohelshaikh01')
        .then(response => response.json)
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, []);

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-2xl">
        Github followers: {data.followers}

        <img className="mx-auto my-2" src={data.avatar_url} alt="Git Pic" width={300} />
        </div>
    )
} 

export default Github;


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sohelshaikh01');

    return  response.json();
}