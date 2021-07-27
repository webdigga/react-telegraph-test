import logo from '../../logo.svg';
import styles from './Header.module.css';

function Header() {
	return (
		<div className={ styles.menu }>
			<img src={ logo } className={ styles.logo } alt="logo" />
		</div>
	);
}

export default Header;
