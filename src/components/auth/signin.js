import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
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

  renderInput = field => (
    <div>
      <input {...field.input} type={field.type} className="form-control" />
      {field.meta.touched && field.meta.error}
      <span>{field.meta.error}</span>
    </div>
  );
  render() {
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email</label>
          <Field
            name="email"
            component={this.renderInput}
            type="email" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password</label>
          <Field
            name="password"
            component={this.renderInput}
            type="password" />
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
})(Signin));

