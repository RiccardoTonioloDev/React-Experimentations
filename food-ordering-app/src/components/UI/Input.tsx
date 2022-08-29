import classes from './Input.module.css';

type InputProps = {
    input: {
        id: string;
        [props: string]: string;
    };
    label: string;
};

const Input = (props: InputProps) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} />
        </div>
    );
};

export default Input;
