import logo from './logo.svg';

function Header() {
	return (
		<div className="posts__menu">
			<img src={ logo } className="site-logo" alt="logo" />
		</div>
	);
}

export default Header;
