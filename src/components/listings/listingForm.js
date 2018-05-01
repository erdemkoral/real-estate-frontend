import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class ListingForm extends Component {
  state={};
    
  handleChange = ({ target }) =>{ 
    this.setState({ [target.name]: target.value });
  }  
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addListing(this.state);
  }
  
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        
        <fieldset className="form-group">
          <label>Street1</label>
          <input name="street1" className="form-control" onChange={this.handleChange} />
        </fieldset>

        <fieldset className="form-group">
          <label>Street2</label>
          <input name="street2" className="form-control" onChange={this.handleChange} />
        </fieldset>

        <fieldset className="form-group">
          <label>City</label>
          <input name="city" className="form-control" onChange={this.handleChange} />
        </fieldset>

        <fieldset className="form-group">
          <label>State</label>
          <input name="state" className="form-control" onChange={this.handleChange} />
        </fieldset>

        <fieldset className="form-group">
          <label>ZipCode</label>
          <input name="zipCode" className="form-control" onChange={this.handleChange} />
        </fieldset>

        <fieldset className="form-group">
          <label>Neighborhood</label>
          <input name="neighborhood" className="form-control" onChange={this.handleChange} />
        </fieldset>

        <fieldset className="form-group">
          <label>Sales Price</label>
          <input name="salesPrice" className="form-control" onChange={this.handleChange} />
        </fieldset>

        <fieldset className="form-group">
          <label>Bedrooms</label>
          <input name="bedrooms" className="form-control" onChange={this.handleChange} />
        </fieldset>

        <fieldset className="form-group">
          <label>Bathrooms</label>
          <input name="bathrooms" className="form-control" onChange={this.handleChange} />
        </fieldset>

        <fieldset className="form-group">
          <label>Garage Size</label>
          <input name="garageSize" className="form-control" onChange={this.handleChange} />
        </fieldset>

        <fieldset className="form-group">
          <label>Lot Size</label>
          <input name="lotSize" className="form-control" onChange={this.handleChange} />
        </fieldset>

        <fieldset className="form-group">
          <label>Description</label>
          <input name="description" className="form-control" onChange={this.handleChange} />
        </fieldset>

        {/* {this.renderAlert()} */}
        <button action="submit" className="btn btn-primary">Submit Listing</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, actions)(ListingForm);