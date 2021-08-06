import styles from './Spinner.module.css';

/**
 * Renders a loading spinner until Fatch API call completes.
 */
function Spinner() {
    return (        
        <div className={ styles.spinner }></div>        
    )
}

export default Spinner;