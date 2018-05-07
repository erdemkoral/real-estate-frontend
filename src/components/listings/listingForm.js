import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class ListingForm extends Component {
  state={};
    
  handleChange = ({ target }) =>{ 
    this.setState({ [target.name]: target.value });
  }  
  
  componentDidMount() {
    if(this.props.editing){
      const newState = { ...this.props.listings };
      console.log('big ass state', newState);
      this.setState(newState);
    }
  }

  handleSubmit = (event) => {
    console.log(this.props);
    event.preventDefault();
    const id = this.props.updateId;
    if(this.props.editing){
      this.props.updateListing(id, this.state)
        .then(()=> this.props.history.push('/mylistings'));
    }else{
      this.props.addListing(this.state)
        .then(()=> this.props.history.push('/mylistings'));
    }
  }

  handleImgPost = event => {
    event.preventDefault();
    const form = event.target;
    const image = new FormData(form);
    form.reset();
    this.props.addListingImage(this.props.listings._id, image);
  };
  
  render() {
    return(
      <div className="container">
        <form className="listing-form" onSubmit={this.handleSubmit} >
          {this.props.editing ?
            <h3> Update Listing</h3> :
            <h3> Upload New Listing</h3> 
          
          }
          <fieldset className="form-group">
            <label>Street1</label>
            <input name="street1" value={this.state.street1} className="form-control" onChange={this.handleChange} />
          </fieldset>

          <fieldset className="form-group">
            <label>Street2</label>
            <input name="street2" value={this.state.street2} className="form-control" onChange={this.handleChange} />
          </fieldset>

          <fieldset className="form-group">
            <label>City</label>
            <input name="city" value={this.state.city} className="form-control" onChange={this.handleChange} />
          </fieldset>

          <fieldset className="form-group">
            <label>State</label>
            <input name="state" value={this.state.state} className="form-control" onChange={this.handleChange} />
          </fieldset>

          <fieldset className="form-group">
            <label>ZipCode</label>
            <input name="zipCode" value={this.state.zipCode} className="form-control" onChange={this.handleChange} />
          </fieldset>

          <fieldset className="form-group">
            <label>Neighborhood</label>
            <input name="neighborhood" value={this.state.neighborhood} className="form-control" onChange={this.handleChange} />
          </fieldset>

          <fieldset className="form-group">
            <label>Sales Price</label>
            <input name="salesPrice" value={this.state.salesPrice} className="form-control" onChange={this.handleChange} />
          </fieldset>

          <fieldset className="form-group">
            <label>Bedrooms</label>
            <input name="bedrooms" value={this.state.bedrooms} className="form-control" onChange={this.handleChange} />
          </fieldset>

          <fieldset className="form-group">
            <label>Bathrooms</label>
            <input name="bathrooms" value={this.state.bathrooms}  className="form-control" onChange={this.handleChange} />
          </fieldset>

          <fieldset className="form-group">
            <label>SqFeet</label>
            <input name="squareFeet" value={this.state.squareFeet}  className="form-control" onChange={this.handleChange} />
          </fieldset>

          <fieldset className="form-group">
            <label>Garage Size</label>
            <input name="garageSize"  value={this.state.garageSize} className="form-control" onChange={this.handleChange} />
          </fieldset>

          <fieldset className="form-group">
            <label>Lot Size</label>
            <input name="lotSize" value={this.state.lotSize}  className="form-control" onChange={this.handleChange} />
          </fieldset>

          <fieldset className="form-group">
            <label>Description</label>
            <input name="description" value={this.state.description} className="form-control" onChange={this.handleChange} />
          </fieldset>

          {/* {this.renderAlert()} */}
          <button action="submit" className="btn btn-primary">Submit Listing</button>
        </form>

        <form  className="listing-form" onSubmit={this.handleImgPost}> 
          <h3> Upload Image</h3>
          <fieldset className="form-group">
            <label>Choose Image</label>
            <input type="file" name="image" accept=".jpg, .jpeg, .png, .svg" placeholder="Insert file" className="form-control"/>
          </fieldset>
          <fieldset className="form-group">
            <label>Add Caption</label>
            <input name="caption" placeholder="Add Caption" className="form-control"/>
          </fieldset>
          <button action="submit" className="btn btn-primary">Upload Image</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { listings: state.listings };
}

export default connect(mapStateToProps, actions)(ListingForm);