import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

type ErrorModalProps = {
    title: string;
    message: string;
    onClick: () => void;
};

type BackdropProps = {
    onClick: () => void;
};
type ModalOverlayProps = {
    title: string;
    message: string;
    onClick: () => void;
};

const Backdrop = (props: BackdropProps) => {
    return <div className={styles.backdrop} onClick={props.onClick}></div>;
};

const ModalOverlay = (props: ModalOverlayProps) => {
    return (
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
    );
};

const ErrorModal = (props: ErrorModalProps) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onClick} />,
                document.getElementById('backdrop-root')!
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onClick={props.onClick}
                />,
                document.getElementById('overlay-root')!
            )}
        </>
    );
};

export default ErrorModal;
