import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

type ErrorModalProps = {
    title: string;
    message: string;
    onClick: () => void;
};
const ErrorModal = (props: ErrorModalProps) => {
    return (
        <>
            <div className={styles.backdrop} onClick={props.onClick}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button type={'button'} onClick={props.onClick}>
                        Okay
                    </Button>
                </footer>
            </Card>
        </>
    );
};

export default ErrorModal;
