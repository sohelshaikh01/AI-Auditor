import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

// Created backend, install axios, cors config in vite
// API Request -> Storing its value -> using await
// Handling use cases

// Race condition, debouncing, dethrotling
// Read about race condition: hitting api on typing each letter
// apple and Query for each letter in it

// writing condition in one return statement
// Using controller to avoid race condition to manage request

function App() {

	// cosnt [products, error, loading] = customReactQuery('/api/products');
	
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	// Data takes 3 second to receive
	const [search, setSearch] = useState('');

	// Debounce
	// we need to use debounce to properly avoid request on each change


	// If properly not handle it send old request from axios.get to catch block

	useEffect(() => {
		// Doing with async await and not using then, to hold further code execution until data received
		// Not possible in hooks and using iife

		// Create in controller to remove race condition
		// This controller auto remove old request

		const controller = new AbortController;

		// We use just for get data of first request first and later request later...
		// Not to cancel old api calls
		// It is to avoid race condition
		// Because it show first response data firstly
		// To get latest request data latest

		;(async () => {
			// try and catch for edge cases
			try {
				setLoading(true);
				setError(false); // for if need to re-request
				const response = await axios.get('/api/products?search=' + search, {
					signal: controller.signal
				});
				// further execution even there is no repsonse
				console.log(response.data);
				setProducts(response.data);
				setLoading(false);

			} catch (error) {
				if(axios.isCancel(error)) {
					console.log("Request cancel", error.message);
					return;
					// So it will not show output of below code on screen
					// Run the newer request properly
				}
				setError(true);
				setLoading(false);
			}

		})();

		// When component unmount do this for unmount
		return () => { // clean up code
			controller.abort();
			setLoading(false);	
		}

	}, [search]); 
	// To it call it whenever the search value is changed
	// Any change in search value call the request to server

	// if(error) {
	// 	return <h2>Something went wrong</h2>
	// } // If not proper api and no response

	// if(loading) {
	// 	return <h2> Loading...</h2>
	// } // While fetching data takes 3 seconds

	// Handling all condition in one return
	return (
		<>
			<h2 className='text-xl font-semibold'> Chai aur API in react</h2>
			<input className="border-2 border-gray-500 px-2 my-2" type="text" placeholder="Search" value={search}
			onChange={(e) => setSearch(e.target.value)} />

			{loading && <h2> Loading... </h2>}
			{error && <h2> Something went wrong </h2>}

			<h2 className="text-xl text-blue-500"> Number of Products are: {products.length}</h2>
		</>
	)
}

export default App;

// It is common that why created it as React Query
// const customReactQuery = (urlPath) => {
// 	return [products, error, loading];
// }
