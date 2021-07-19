import React from 'react';
import Comment from './Comment';

class CommentsList extends React.Component {
	render () {
		return (
			<ul>
				{
					this.props.items.map(( item ) => {
						return (
							<Comment commentItem = { item } key = { item.id } />
						);
					})
				}
			</ul>
		)
	};
}

export default CommentsList;
