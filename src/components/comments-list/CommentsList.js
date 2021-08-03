import React from 'react';
import Comment from '../comment/Comment';

/**
 * Renders an unordered list.
 * Uses the data from props to call the Comment component,
 * passing the item from the list and the unique id as the key
 *
 * @param {Props} props
 */
function CommentsList ( props ) {
	return (
		<ul>
			{
				props.items.map(( item ) => {
					return (
						<Comment commentItem = { item } key = { item.id } />
					);
				})
			}
		</ul>
	)
}

export default CommentsList;
