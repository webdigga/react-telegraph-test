import Header from '../header/Header';
import SortBar from '../sort-bar/SortBar';
import CommentsList from '../comments-list/CommentsList';
import Spinner from '../spinner/Spinner';
import React, { useState } from 'react';
import styles from './App.module.css';

/**
 * Main component for rendering our child components.
 *
 * @author [David White](https://github.com/webdigga)
 * @component
 * @example
 *
 * return (
 *		<Header />
 *		<SortBar items = { items } onSortChange = { handleSortState } />
 *		<CommentsList items = { items } />
 * )
 */
function App() {
	/**
	 * Set state.
	 */
	const [items, setItems] = useState( [] );
	const [isLoaded, setIsLoaded] = useState( false );
	const [isError, setIsError] = useState( false );

	/**
	 * Fetch the data from the API, then set the items in the state.
	 */
	function fetchData() {
		fetch( "https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments" )
			.then( res => res.json() )
			.then(
			( result ) => {
				setItems( result );
				setIsLoaded( true );
			},
			( error ) => {
				console.log( error );

				setIsLoaded( true );
				setIsError( true );
			}
		)
	};

	/**
	 * Function to set the state of the newly ordered items from the sort component.
	 * This function is passed down to the sortBar and and set here so we can pass the state back up.
	 */
	function handleSortState( items ) {
		setItems( [...items] );
	}

	/**
	 * Runs after the first render() lifecycle.
	 * Gets the data we need to render the component
	 */
	React.useEffect(() => {
		fetchData();
	}, []);

	/**
	 * Whilst we wait for the data to load. 
	 */
	if ( !isLoaded ) {
		return (
			<div className={ styles.posts }>
				<Spinner />
			</div>
		);

	/**
	 * Display an error to the user if something goes wrong with the API call. 
	 */
	} else if ( isError ) {
		return <div>ERROR</div>

	/**
	 * Else lets render the component. 
	 */
	} else {
		return (
			<div className={ styles.posts }>
				<Header />
				<SortBar items = { items } onSortChange = { handleSortState } />
				<CommentsList items = { items } />
			</div>
		);
	}
}

export default App;
