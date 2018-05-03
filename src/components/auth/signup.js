import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class Signup extends Component {
  state={};
  
  handleChange = ({ target }) =>{ 
    this.setState({ [target.name]: target.value });
  } 

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signupUser(this.state)
      .then(() => {
        this.props.history.push('/me');
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
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input name="name" className="form-control" placeholder="Enter name"onChange={this.handleChange} />
          </div>
          <div className="form-group" onSubmit={this.handleSubmit}>
            <label>Email address</label>
            <input name="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input name="password" className="form-control" placeholder="Enter password"onChange={this.handleChange} />
            <small className="form-text text-muted">We'll never share your information with anyone else.</small>
          </div>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}
  
export default connect(mapStateToProps, actions)(Signup);