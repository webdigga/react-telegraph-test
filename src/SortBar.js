import React, { useState } from 'react';

function SortBar ( props ) {
	const [sortOrder, setSortOrder] = useState( 'desc' );

	function sortComments ( items ) {
		items.sort(( a, b ) => {
			return sortOrder === 'asc' ? a.likes - b.likes : b.likes - a.likes;
		});

		setSortOrder( sortOrder === 'asc' ? 'desc' : 'asc' );

		props.onSortChange( items );
	}

	return (
		<div className="posts__menu">
			<div className="posts__header">{ props.items.length } Comments</div>
			<div className="posts__sort-container">
				<span className="posts__sort">Sort</span>
				<button className="posts__sort-button" onClick={ () => { sortComments( props.items ) } }>Likes</button>
			</div>
		</div>
	);
}

export default SortBar;
