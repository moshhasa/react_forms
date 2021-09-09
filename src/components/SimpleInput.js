import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value :enteredName,
    hasError : enteredNameHasError,
    isValid : enteredNameIsValid,
    valueChangeHandler: enteredNameValueChangeHandler,
    valueBlurHander: enteredNameBlurHandler,
    reset : resetNameState
  } = useInput(value => value.trim().length > 0);

  const {
    value :enteredEmail,
    hasError : enteredEmailHasError,
    isValid : enteredEmailIsValid,
    valueChangeHandler: enteredEmailValueChangeHandler,
    valueBlurHander: enteredEmailBlurHandler,
    reset : resetEmailState
  } = useInput(value => value.trim().length > 0 && value.includes("@"));

  
  const validForm = enteredNameIsValid && enteredEmailIsValid;


  const formSubmissionHandler = (e) => {
    e.preventDefault();
   
    if (!validForm) {
      return;
    }

    resetNameState();
    resetEmailState();

    console.log(enteredName);
    console.log(enteredEmail);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${enteredNameHasError && "invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={enteredNameValueChangeHandler}
          onBlur={enteredNameBlurHandler}
        />
        {enteredNameHasError && (
          <p className="error-text"> Name cannot be empty</p>
        )}
      </div>
      <div className={`form-control ${enteredEmailHasError && "invalid"}`}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={enteredEmailValueChangeHandler}
          onBlur={enteredEmailBlurHandler}
        />
        {enteredEmailHasError && (
          <p className="error-text">
            {" "}
            Email cannot be empty and must contain @ symbol
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!validForm}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
