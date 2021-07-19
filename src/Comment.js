import React from 'react';

class Comment extends React.Component {
	render () {
		const commentItem = this.props.commentItem;

		return (
			<li> 
				<div>{ commentItem.name }</div>
				<div>{ commentItem.likes }</div>
				<div>{ commentItem.body }</div>
			</li>
		);
	}
}

export default Comment;
