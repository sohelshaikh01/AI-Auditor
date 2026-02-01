import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [search, setSearch] = useState('');
	const [debouncedSearch, setDebouncedSearch] = useState('');

	// Debouncing logic
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedSearch(search);
		}, 500); // Adjust the delay as needed (500ms here)

		// Clean up the timeout if the user keeps typing
		return () => clearTimeout(timer);
	}, [search]);

	// Fetch products when debouncedSearch changes
	useEffect(() => {
		if (!debouncedSearch) return; // Do not make the API call if the search is empty

		const controller = new AbortController();

		(async () => {
			try {
				setLoading(true);
				setError(false);
				const response = await axios.get('/api/products?search=' + debouncedSearch, {
					signal: controller.signal
				});
				setProducts(response.data);
				setLoading(false);
			} catch (error) {
				if (axios.isCancel(error)) {
					return;
				}
				setError(true);
				setLoading(false);
			}
		})();

		return () => {
			controller.abort();
			setLoading(false);
		};

	}, [debouncedSearch]);

	return (
		<>
			<h2 className='text-xl font-semibold'> Chai aur API in react</h2>
			<input
				className="border-2 border-gray-500 px-2 my-2"
				type="text"
				placeholder="Search"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			{loading && <h2> Loading... </h2>}
			{error && <h2> Something went wrong </h2>}

			<h2 className="text-xl text-blue-500"> Number of Products are: {products.length}</h2>
		</>
	);
}

export default App;
