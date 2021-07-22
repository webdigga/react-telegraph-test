import Header from './Header';
import SortBar from './SortBar';
import CommentsList from './CommentsList';
import './App.css';
import React from 'react';

class App extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};

		this.handleSortState = this.handleSortState.bind( this );
	}

	componentDidMount() {
		fetch( "https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments" )
			.then( res => res.json() )
			.then(
			( result ) => {
				this.setState({
					isLoaded: true,
					items: result
				});
			},
			( error ) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
	}

	handleSortState( items ) {
		this.setState({
			items: items
		});
	}

	render () {
		return (
			<div className="posts">
				<Header />
				<SortBar items = { this.state.items } onSortChange = { this.handleSortState } />
				<CommentsList items = { this.state.items } />
			</div>
		);
	}
}

export default App;
