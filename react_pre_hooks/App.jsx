import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

// useCallback, useState, useRef Hooks
function App() {

  // For Length, Number & Characters Tracking
  const [length, setLength] = useState(8);
  const [numberAll, setNumberAll] = useState(false);
  const [chars, setChars] = useState(false);
  
  const [password, setPassword] = useState("");
  // For password Tracking

  // useCallback Hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz"

    if(numberAll) str += "0123456789";
    if(chars) str += "!@#$%^&*()[]{}~`" ;

    for(let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass); // run again it this change
    // If given password it goes into infinite loop
  }, [length, numberAll, chars, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    // using ref just for good ui
    passwordRef.current?.select();
    // More optimized 
    // current value of that reference element
    passwordRef.current?.setSelectionRange(0, 25);
	
    // without reference
    window.navigator.clipboard.writeText(password);
    // window object is different or not in next.js
  },[password]) // using Hook just for optimization

  // const [fetchData, setFetchData] = useState({
  //   length: 3,
  //   documents: [
  //     {
  //       name: "Superman",
  //       email: "superman@gmail.com"  
  //     },
  //     {
  //         name: "Batman",
  //         email: "batman@gmailcom"
  //     },
  //     {
  //         name: "Ironman",
  //         email: "ironman@gmail.com"
  //     }
  //   ]
  // });

  // useCallback Hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAll, chars, passwordGenerator]);

  // useRef Hook
  const passwordRef = useRef(null);

  return (
    <>
      <h1 className="text-center text-2xl font-semibold"> Password Generator </h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-6 text-orange-500 bg-gray-700"> 
		
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">

          <input type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef} /> 
          {/* Now have the reference */}

          <button
          className="outline-none bg-blue-600 hover:bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}
          > Copy</button>
        </div>

        <div className="flex text-md gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6}
            max={45}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}} />
            <label > Length: {length} </label>
          </div>
		  
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numberAll}
            id="numberInput"
            onChange={() => {
              setNumberAll((prev) => !prev);
            }} />
            <label htmlFor="numberInput"> Numbers: {numberAll} </label>
          </div>
		  
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={chars}
            id="characterInput"
            onChange={() => {
              setChars((prev) => !prev);
            }} />
            <label htmlFor="characterInput"> Characters: {chars} </label>
          </div>
        </div>

      </div>

      {/* Another code to display data as of API */}

      {/* <div>
        {fetchData.length ? <li className="text-2xl font-bold ml-4 mb-4 list-none"> The length of data is: {fetchData?.length} </li>: null}
        <div>
          {
            fetchData.documents.map((document) => (
              <li key={document.name} className='list-none ml-20'> 
                <h5 className="text-2xl font-semibold"> {document.name} </h5>
                <p className="text-purple-500"> {document.email} </p>
              </li>
            ))
          }
        </div>
      </div> */}

    </>
  )
}


export default App;
