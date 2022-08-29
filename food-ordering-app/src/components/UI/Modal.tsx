import classes from './Modal.module.css';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
    children: ReactNode;
    onClick: () => void;
};
type BackDropProps = {
    onClick: () => void;
};
type ModalOverlayProps = {
    children: ReactNode;
};

const Backdrop = (props: BackDropProps) => {
    return <div className={classes.backdrop} onClick={props.onClick} />;
};
const ModalOverlay = (props: ModalOverlayProps) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays')!;

const Modal = (props: ModalProps) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onClick} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
};

export default Modal;
