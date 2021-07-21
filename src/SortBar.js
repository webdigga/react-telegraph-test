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
			<button onClick={ () => { this.sortComments( this.props.items ) } }>Sort</button>
		);
	}
}

export default SortBar;
