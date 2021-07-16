import logo from './logo.svg';
import React from 'react';

class Header extends React.Component {
	render () {
		return <img src={ logo } className="logo" alt="logo" />;
	}
}

export default Header;
