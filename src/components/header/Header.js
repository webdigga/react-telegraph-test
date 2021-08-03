import logo from '../../logo.svg';
import styles from './Header.module.css';

/**
 * Renders a simple header with a logo.
 */
function Header() {
	return (
		<div className={ styles.menu }>
			<img src={ logo } className={ styles.logo } alt="logo" />
		</div>
	);
}

export default Header;
