import react, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState();
  const [isValidForm, setIsValidForm] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setIsValidForm(
      // validateEmailHandler(event.target.value) &&
      //   validatePasswordHandler(enteredPassword)
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setIsValidForm(
      // validateEmailHandler(enteredEmail) &&
      //   validatePasswordHandler(event.target.value)
      enteredEmail.includes("@") && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    // const re =
    //   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // setIsValidEmail(re.test(enteredEmail));
    setIsValidEmail(enteredEmail.includes("@"));
  };
  const validatePasswordHandler = () => {
    // const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // setIsValidPassword(re.test(enteredPassword));
    setIsValidPassword(enteredPassword.trim().length > 6);
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
