import logo from '../../logo.svg';
import styles from './Header.module.css';

/**
 * Renders a simple header with a logo.
 */
function Header() {
	return (
		<div className={ styles.menu } data-test="header">
			<img src={ logo } className={ styles.logo } alt="logo" data-test="header-logo" />
		</div>
	);
}

export default Header;
