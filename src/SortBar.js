import React from 'react';

class SortBar extends React.Component {
	sortComments () {
		// this.content.sort(( a, b ) => {
		// 	return this.sortButton.dataset.sort === 'asc' ? a.likes - b.likes : b.likes - a.likes;
		// });
	}

	render () {
		return (
			<button onClick={ this.sortComments }>
				Sort
			</button>
		);
	}
}

export default SortBar;
