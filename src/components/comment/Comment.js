import React from 'react';
import styles from './Comment.module.css'

/**
 * Renders a list item.
 * Uses the data from props to render an individual list item from a loop in the parent component (CommentsList.js).
 *
 * @param {Props} props
 */
function Comment ( props ) {
	const commentItem = props.commentItem;

	return (
		<li className={ styles.post } data-test="comment-post"> 
			<div className={ styles.name } data-test="comment-name">{ commentItem.name }</div>
			<div className={ styles.likes } data-test="comment-likes">{ commentItem.likes }</div>
			<p className={ styles.body } data-test="comment-body">{ commentItem.body }</p>
		</li>
	);
}

export default Comment;
