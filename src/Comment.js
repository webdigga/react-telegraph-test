import React from 'react';

function Comment ( props ) {
	const commentItem = props.commentItem;

	return (
		<article className="posts__post"> 
			<div className="posts__name">{ commentItem.name }</div>
			<div className="posts__likes">{ commentItem.likes }</div>
			<p className="posts__body">{ commentItem.body }</p>
		</article>
	);
}

export default Comment;
