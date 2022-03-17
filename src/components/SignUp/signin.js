import React from "react";
import { connect } from "react-redux";
import userActions from "../../redux/actions/userActions";
import { Link as LinkRouter } from "react-router-dom";
import FacebookSignIn from "./FacebookSignIn";
import '../../styles/App.css'
import './styleSign.css'

function SignIn(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const logedUser = {
      email: event.target[0].value,
      password: event.target[1].value,
      from: "form-Signup",
    };
    props.signInUser(logedUser);
  };

  console.log(props.user);

  return (
    <article className="card-body">
      <div className="form-container-main">
        <h4 className="card-title mt-3 text-center">User Account</h4>

        <p className="divider-text">
          <span className="bg-light"> SignIn</span>
        </p>
        <FacebookSignIn />
        <p className="divider-text">
          <span className="bg-light"> Or</span>
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
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
            {" "}
            SignIn{" "}
          </button>

          <div className="text-center">
            Dont Have an account? <LinkRouter to="/signup" className="signup-btn">SignUp</LinkRouter>{" "}
          </div>
        </form>
      </div>
    </article>
  );
}

const mapDispatchToProps = {
  signInUser: userActions.signInUser,
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
