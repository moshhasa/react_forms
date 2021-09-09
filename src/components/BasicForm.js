import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameValueChangeHandler,
    valueBlurHander: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: lastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameValueChangeHandler,
    valueBlurHander: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: email,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailValueChangeHandler,
    valueBlurHander: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim().length > 0 && value.includes('@'));

  const validForm = firstNameIsValid && lastNameIsValid && emailIsValid;

  const submitHandler = (e) =>{
    e.preventDefault();

    if(!validForm)
    {
      return;
    }

      resetFirstName();
      resetLastName();
      resetEmail();

      console.log('First name : ', firstName, ' last name : ', lastName, ' Email : ', email)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameHasError && 'invalid'}`}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={firstNameValueChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className='error-text'>First Name cannot be empty</p>}
        </div>
        <div className={`form-control ${lastNameHasError && 'invalid'}`}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text"
            id="lastName"
            value={lastName}
            onChange={lastNameValueChangeHandler}
            onBlur={lastNameBlurHandler} />
            {lastNameHasError && <p className='error-text'>Last Name cannot be empty</p>}
        </div>
      </div>
      <div className={`form-control ${emailHasError && 'invalid'}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" 
            id="email"  
            value={email}
            onChange={emailValueChangeHandler}
            onBlur={emailBlurHandler} />
        {emailHasError && <p className='error-text'>Enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!validForm}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
