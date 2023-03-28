import { useState } from "react";

function LoginPage() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
  }

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div className="login-container">
      <h2>Enter Email and Password</h2>

      <form onSubmit={submitHandler}>
        <div className="inputs-wrapper">
          <input
            type="email"
            onChange={emailChangeHandler}
            value={enteredEmail}
          />
          <input
            type="password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
          />
        </div>
        <div className="button-wrapper">
          <button type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
