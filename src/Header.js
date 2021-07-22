import logo from './logo.svg';
import React from 'react';

class Header extends React.Component {
	render () {
		return (
			<div className="posts__menu">
				<img src={ logo } className="site-logo" alt="logo" />
			</div>
		);
	}
}

export default Header;
