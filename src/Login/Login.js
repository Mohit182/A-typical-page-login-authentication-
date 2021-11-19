import react, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setIsValidForm(validateEmailHandler && validatePasswordHandler);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setIsValidForm(validateEmailHandler && validatePasswordHandler);
  };

  const validateEmailHandler = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsValidEmail(re.test(email));
  };
  const validatePasswordHandler = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;
    setIsValidPassword(re.test(password));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            isValidEmail === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            isValidPassword === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!isValidForm}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
