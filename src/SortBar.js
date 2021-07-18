import React from 'react';

class SortBar extends React.Component {

	render () {
		const listItems = this.props.items.map(( item ) =>
			<li>{ item.body }</li>
		);

		return <ul>{ listItems }</ul>;
	}
}

export default SortBar;
