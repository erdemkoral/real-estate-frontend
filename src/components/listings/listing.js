import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import ImageGallery from 'react-image-gallery';
import ListingForm from './listingForm';

class Listing extends Component{

  state={ editing:null };
 
  componentWillMount(){
    const id = this.props.match.params.id;
    this.props.loadListing(id);
  }

  handleDelete = () => {
    const id = this.props.match.params.id;
    this.props.deleteListing(id)
      .then(() => {
        this.props.history.push('/mylistings');
      });
  }

  render(){
    const { listings } = this.props;
    const imageGallery = <ImageGallery 
      className="card-image-top"
      showThumbnails={false}
      showPlayButton={false} 
      showFullscreenButton={false} 
      items={listings.images && listings.images.map(item => {
        return { original: item.imageURI };
      })}>
    </ImageGallery>;
    
    return(
      <div className="container">
        {this.state.editing === true ? <ListingForm editing={true} updateId={this.props.match.params.id} history={this.props.history}></ListingForm> :
          <div>
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="card col-sm-6">
                <div className="card-image-top">
                  {listings.images && imageGallery}
                </div>
                <div className="card-body">
                  <div className="card-text"><label>Street1:</label><span> {listings.street1}</span></div>
                  <div className="card-text"><label>Street2:</label><span> {listings.street2}</span></div>
                  <div className="card-text"><label>City:</label><span> {listings.city}</span></div>
                  <div className="card-text"><label>State:</label><span> {listings.state}</span></div>
                  <div className="card-text"><label>Zip Code:</label><span> {listings.zipCode}</span></div>
                  <div className="card-text"><label>Neighborhood:</label><span> {listings.neighborhood}</span></div>
                  <div className="card-text"><label>Sales Price:</label><span> {listings.salesPrice}</span></div>
                  <div className="card-text"><label>Bedroom(s):</label><span> {listings.bedrooms}</span></div>
                  <div className="card-text"><label>Bathroom(s):</label><span> {listings.bathrooms}</span></div>
                  <div className="card-text"><label>SqFeet:</label><span> {listings.squareFeet}</span></div>
                  <div className="card-text"><label>Garage Size:</label><span> {listings.garageSize}</span></div>
                  <div className="card-text"><label>Lot Size:</label><span> {listings.lotSize}</span></div>
                  <div className="card-text"><label>Description:</label><span> {listings.description}</span></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5"></div>
              <div className="col-sm-4">
                <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                <button className="btn btn-primary" onClick={()=> this.setState({ editing: true })}>Update</button>
              </div>
            </div>
          </div>
        }
        
      </div>
    );
  }
}

function mapStateToProps(state){
  return { listings: state.listings };
}

export default connect(mapStateToProps, actions)(Listing); 



