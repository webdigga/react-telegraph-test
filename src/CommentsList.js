import React from 'react';
import Comment from './Comment';

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
