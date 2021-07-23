import React from 'react';

class SortBar extends React.Component {
	constructor(props) {
		super( props );

		this.state = {
			sortOrder: 'desc'
		};
	}

	sortComments ( items ) {
		items.sort(( a, b ) => {
			return this.state.sortOrder === 'asc' ? a.likes - b.likes : b.likes - a.likes;
		});

		this.setState({
			sortOrder: this.state.sortOrder === 'asc' ? 'desc' : 'asc'
		});

		this.props.onSortChange( items );
	}

	render () {
		return (
			<div className="posts__menu">
				<div className="posts__header">{ this.props.items.length } Comments</div>
				<div className="posts__sort-container">
					<span className="posts__sort">Sort</span>
					<button className="posts__sort-button" onClick={ () => { this.sortComments( this.props.items ) } }>Likes</button>
				</div>
			</div>
		);
	}
}

export default SortBar;
