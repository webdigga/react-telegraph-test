import Header from '../header/Header';
import SortBar from '../../SortBar';
import CommentsList from '../comments-list/CommentsList';
import React, { useState } from 'react';

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
		<div className="posts">
			<Header />
			<SortBar items = { items } onSortChange = { handleSortState } />
			<CommentsList items = { items } />
		</div>
	);
}

export default App;
