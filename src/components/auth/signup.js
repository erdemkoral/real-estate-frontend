import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends Component {
  
  handleFormSubmit({ name, email, password }) {
    this.props.signupUser({ name, email, password });
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
    const { handleSubmit } = this.props;
    const renderInput = field => (
      <div>
        <input {...field.input} type={field.type} className="form-control" />
        {field.meta.touched && field.meta.error}
        <span>{field.meta.error}</span>
      </div>
    );
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Name</label>
          <Field
            name="name"
            component={renderInput}
            type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Email</label>
          <Field
            name="email"
            component={renderInput}
            type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <Field
            name="password"
            component={renderInput}
            type="text" />
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
  
export default connect(mapStateToProps, actions)(reduxForm({
  form: 'signin'
})(Signup));