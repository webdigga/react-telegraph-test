import React, { useState } from 'react';
import styles from './SortBar.module.css';

/**
 * Main component for rendering our child components.
 *
 * @param {Props} props
 */
function SortBar ( props ) {
	/**
	 * Set state.
	 */
	const [sortOrder, setSortOrder] = useState( 'desc' );

	/**
	 * On click of the sort button,
	 * sort the items in either ascending or descending order.
	 * Update the sort order so we can switch on the next click.
	 * Pass the new sorted values back to parent component (App.js),
	 * so the state can be updated and filter down to all components that need this.
	 * 
	 * @param {Array} items
	 */
	function sortComments ( items ) {
		items.sort(( a, b ) => {
			return sortOrder === 'asc' ? a.likes - b.likes : b.likes - a.likes;
		});

		setSortOrder( sortOrder === 'asc' ? 'desc' : 'asc' );

		props.onSortChange( items );
	}

	return (
		<div className={ styles.menu }>
			<div className={ styles.header }><span data-test="sortbar-comment-total">{ props.items.length }</span> Comments</div>
			<div>
				<span>Sort</span>
				<button className={ styles.sortButton } onClick={ () => { sortComments( props.items ) } } data-test="sortbar-sort-button">Likes</button>
			</div>
		</div>
	);
}

export default SortBar;
