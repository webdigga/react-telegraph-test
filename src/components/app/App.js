import Header from '../header/Header';
import SortBar from '../sort-bar/SortBar';
import CommentsList from '../comments-list/CommentsList';
import React, { useState } from 'react';
import styles from './App.module.css';

function App() {
	const [items, setItems] = useState( [] );

	function fetchData() {
		fetch( "https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments" )
			.then( res => res.json() )
			.then(
			( result ) => {
				setItems( result );
			},
			( error ) => {
				console.log( error );
			}
		)
	};

	function handleSortState( items ) {
		setItems( [...items] );
	}

	// Runs after the first render() lifecycle
	React.useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className={ styles.posts }>
			<Header />
			<SortBar items = { items } onSortChange = { handleSortState } />
			<CommentsList items = { items } />
		</div>
	);
}

export default App;