import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
    const {
        value: enteredName,
        hasError: nameInputIsInvalid,
        valueIsValid: enteredNameIsValid,
        valueChangeHandler: nameInputChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        reset: resetNameInput,
    } = useInput((name) => name.trim() !== '');

    const {
        value: enteredEmail,
        hasError: emailInputIsInvalid,
        valueIsValid: enteredEmailIsValid,
        valueChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmailInput,
    } = useInput((email) => email.includes('@'));

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!enteredNameIsValid || !enteredEmailIsValid) {
            return;
        }
        console.log(enteredName);
        console.log(enteredEmail);

        // nameInputRef.current.value = ''; => NOT IDEAL TO DO THAT THIS WAY
        resetNameInput();
        resetEmailInput();
    };

    const nameInputClasses = !nameInputIsInvalid
        ? 'form-control'
        : 'form-control invalid';
    const emailInputClasses = !emailInputIsInvalid
        ? 'form-control'
        : 'form-control invalid';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="email">Email address:</label>
                <input
                    type="email"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={enteredEmail}
                />
                {emailInputIsInvalid && (
                    <p className="error-text">Email must be valid</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
