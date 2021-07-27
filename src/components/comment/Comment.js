import React from 'react';
import styles from './Comment.module.css'

function Comment ( props ) {
	const commentItem = props.commentItem;

	return (
		<article className={ styles.post }> 
			<div className={ styles.name }>{ commentItem.name }</div>
			<div className={ styles.likes }>{ commentItem.likes }</div>
			<p className={ styles.body }>{ commentItem.body }</p>
		</article>
	);
}

export default Comment;
