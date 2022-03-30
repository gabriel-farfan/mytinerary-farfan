import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import './styleSign.css'

function FacebookSignIn(props) {

  const responseFacebook = async (res) => {
      
     
    console.log(res)
    const logedUser = {
      email: res.email,
      password: res.id,
      from: "facebook",
    }
    await props.signInUser(logedUser)
  }

  return (
    <FacebookLogin
    cssClass="buttonsocial my-facebook-button-class"
    icon="fa-facebook"
    textButton="Sign in with Facebook"
      appId="991124828495080"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}

    />
  );
}
const mapDispatchToProps = {
  signInUser: userActions.signInUser,

}

export default connect(null, mapDispatchToProps)(FacebookSignIn);