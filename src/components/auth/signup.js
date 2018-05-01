import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Signup extends Component {
  
  handleSubmit(event){
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    this.props.signupUser(
      { 
        name: name.value,
        email: email.value,
        password: password.value
      });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <string>Oops!</string> {this.props.errorMessage}
        </div>
      );
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset className="form-group">
          <label>Name</label>
          <input name="name" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Email</label>
          <input name="email" className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <input name="password" className="form-control" />
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}
  
export default connect(mapStateToProps, actions)(Signup);