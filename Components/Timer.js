import styles from '../styles/Timer.module.css'

export const Timer = (props) => {
    return (
        <div className={styles.timer}>
            <span className={styles.digits}>
                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className={styles.digits}>
                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
            </span>
            <span className={styles.milisec}>
                {("0" + ((props.time / 10) % 100)).slice(-2)}
            </span>
        </div>
    );
}
