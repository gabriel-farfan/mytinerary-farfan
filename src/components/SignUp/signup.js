import React, { useState } from "react";
import { connect } from "react-redux";
import userActions from "../../redux/actions/userActions";
import { Link as LinkRouter } from "react-router-dom";
import '../../styles/App.css'
import './styleSign.css'

import FacebookSignUp from './FacebookSignUp';
// import Select from 'react-select'
// import SelectPaises from './select'



function SignUp(props) {

  const paises = ["unselected", "Argentina", "Brazil", "Colombia", "Chile", "Uruguay"]

  const [selectPaises, setSelectPaises] = useState("unselected")

  function selected(event) {
    console.log(event.target.value)
    setSelectPaises(event.target.value)
  }

  // console.log(props);

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target[3].value)
    const userData = {
      fullName: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      from: "form-Signup",
      pais: selectPaises
    }
    props.signUpUser(userData)
  }
  // alert(props.message.message)

  return (
    <>
      <article className="card-body">
        <div className="form-container-main">

        <div className="styled-select">
          <select class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={selected}>

            {paises.map(pais =>

              <option >{pais}</option>

            )}

          </select>

        </div>
        {selectPaises !== "unselected" ?
          <>
            <h4 className="card-title mt-3 text-center">User Account</h4>
            <p className="text-center">Get started with your free account</p>

            <p className="divider-text">
              <span className="bg-light">OR</span>
            </p>
            <FacebookSignUp pais={selectPaises} />


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
                Have an account? <LinkRouter to="/signin" className="signin-btn">SignIn</LinkRouter>{" "}
              </div>
            </form>



          </> : <h1>Please...Select your country to proceed.</h1>}
          </div>
      </article>
    </>


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



{/* <form className="login-form" onSubmit={handleSubmit}>
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
        Have an account? <LinkRouter to="/signin">SignIn</LinkRouter>{" "}
      </div>
    </form> */}