import styles from './Error.module.css';

/**
 * Renders an error message.
 *
 * @param {Props} props
 */
function Error( props ) {
    return (        
        <div className={ styles.error }>{ props.message }</div>        
    )
}

export default Error;