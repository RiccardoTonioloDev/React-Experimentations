import useInput from '../hooks/useInput';

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
    const {
        value: firstNameValue,
        hasError: firstNameHasError,
        valueIsValid: firstNameIsValid,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: firstNameReset,
    } = useInput(isNotEmpty);
    const {
        value: lastNameValue,
        hasError: lastNameHasError,
        valueIsValid: lastNameIsValid,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: lastNameReset,
    } = useInput(isNotEmpty);
    const {
        value: emailValue,
        hasError: emailHasError,
        valueIsValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset,
    } = useInput(isEmail);

    let formIsValid = false;
    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const firstNameClassName = !firstNameHasError
        ? 'form-control'
        : 'form-control invalid';
    const lastNameClassName = !lastNameHasError
        ? 'form-control'
        : 'form-control invalid';
    const emailClassName = !emailHasError
        ? 'form-control'
        : 'form-control invalid';

    const formSubmitHandler = (event) => {
        event.preventDefault();

        console.log(firstNameValue);
        console.log(lastNameValue);
        console.log(emailValue);

        lastNameReset();
        firstNameReset();
        emailReset();
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="control-group">
                <div className={firstNameClassName}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        value={firstNameValue}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                </div>
                <div className={lastNameClassName}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        type="text"
                        id="name"
                        value={lastNameValue}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                </div>
                <div className={emailClassName}>
                    <label htmlFor="name">E-Mail Address</label>
                    <input
                        type="text"
                        id="name"
                        value={emailValue}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                    />
                </div>
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
