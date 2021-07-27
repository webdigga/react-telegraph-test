import React, { useState } from 'react';
import styles from './SortBar.module.css';

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
		<div className={ styles.menu }>
			<div className={ styles.header }>{ props.items.length } Comments</div>
			<div>
				<span>Sort</span>
				<button className={ styles.sortButton } onClick={ () => { sortComments( props.items ) } }>Likes</button>
			</div>
		</div>
	);
}

export default SortBar;
