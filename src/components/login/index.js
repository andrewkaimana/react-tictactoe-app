import React from 'react';
class Login extends React.Component {
  handleClick() {
    console.log("User is logging in");
    console.log(this.refs.username.value);
    console.log(this.refs.password.value);
    this.props.loginUser();
  }

  render() {
    return (
     <div>
      <input type="text" ref="username"/>
      <input type="text" ref="password"/>
      <input type="button" value="Login" 
        onClick ={() => this.handleClick()}></input>
     </div>
    );
  }
}

export default Login;