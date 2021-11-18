import react from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
const Login = (props) => {
  return (
    <Card className={classes.login}>
      <form>
        <div className={classes.control}>
          <label>E-Mail</label>
          <input type="email" />
        </div>
        <div className={classes.control}>
          <label>Password</label>
          <input type="password" />
        </div>
        <div className={classes.actions}>
          <button type="submit">Login</button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
