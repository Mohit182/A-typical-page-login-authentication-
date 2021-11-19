import react, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";

const Login = (props) => {
  const emailcheck =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordcheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const echeck = (email) => {
    return emailcheck.test(email);
  };
  const pcheck = (pass) => {
    return passwordcheck.test(pass);
  };

  const [enteredEmail, setEnteredEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState();
  const [isValidForm, setIsValidForm] = useState(false);

  useEffect(() => {
    console.log("Effect Running");

    return () => {
      console.log("Cleanup");
    };
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking Form Validity! ");
      setIsValidForm(echeck(enteredEmail) && pcheck(enteredPassword));
    }, 500);

    return () => {
      console.log("CleanUp");
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setIsValidForm(echeck(event.target.value) && pcheck(enteredPassword));
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setIsValidForm(echeck(enteredEmail) && pcheck(event.target.value));
  };

  const validateEmailHandler = () => {
    setIsValidEmail(emailcheck.test(enteredEmail));
  };
  const validatePasswordHandler = () => {
    setIsValidPassword(passwordcheck.test(enteredPassword));
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
