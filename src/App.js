import Header from './Header';
import SortBar from './SortBar';
import CommentsList from './CommentsList';
import './App.css';
import React from 'react';

class App extends React.Component {
	render () {
		return (
			<div>
				<Header />
				<SortBar />
				<CommentsList />
			</div>
		);
	}
}

export default App;
