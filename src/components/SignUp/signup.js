import React, { useEffect } from "react";
import { connect } from "react-redux";
import userActions from "../../redux/actions/userActions";
import { Link as LinkRouter } from "react-router-dom";
import "../../styles/form.css";



function SignUp(props) {
  // console.log(props);
  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      fullName: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      from: "form-Signup",
    };
    props.signUpUser(userData);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div className="form-input-material">
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder=" Your Name "
          autoComplete="off"
          className="form-control-material"
          required
        />
        <label htmlFor="username">Name</label>
      </div>
      <div className="form-input-material">
        <input
          type="email"
          name="email"
          id="email"
          placeholder=" "
          autoComplete="off"
          className="form-control-material"
          required
        />
        <label htmlFor="email">E-mail</label>
      </div>
      <div className="form-input-material">
        <input
          type="password"
          name="password"
          id="password"
          placeholder=" "
          autoComplete="off"
          className="form-control-material"
          required
        />
        <label htmlFor="password">Password</label>
      </div>
      <button type="submit" className="btn btn-primary btn-ghost">
        Create Account
      </button>
      <div className="text-center">
        Have an account? <LinkRouter to="/">SignIn</LinkRouter>{" "}
      </div>
    </form>
  );
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,
};
const mapStateToProps = (state) => {
  return {
    snackbar: state.userReducer.snackbar,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

