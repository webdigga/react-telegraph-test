import React from 'react';
import Comment from './Comment';

class CommentsList extends React.Component {
	render () {
		return (
			<ul>
				{
					this.props.items.map(( item ) => {
						return (
							<div className="posts__content">
								<Comment commentItem = { item } key = { item.id } />
							</div>
						);
					})
				}
			</ul>
		)
	};
}

export default CommentsList;
