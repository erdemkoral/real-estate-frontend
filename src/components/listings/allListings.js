import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import ImageGallery from 'react-image-gallery';

class AllListings extends Component{

  componentDidMount(){
    this.props.loadListings();
  }

  render(){
    const { listings } = this.props;

    const listData = listings.map(listing => {
      return (
        <div className="card" key={listing._id}>
          <ImageGallery className="card-image-top"
            showThumbnails={false}
            showPlayButton={false} 
            showFullscreenButton={false} 
            items={listing.images.map(item => {
              return { original: item.imageURI };
            }
            )}>
          </ImageGallery>
          <div className="card-body">
            <p className="card-text">${listing.salesPrice.toLocaleString()} / {listing.bedrooms} Bedroom, {listing.bathrooms} Bathroom</p>
            <p className="card-text">{listing.bedrooms} Bedroom / {listing.bathrooms} Bathroom</p>
            <p className="card-text">{listing.street1}, {listing.city}, {listing.state}, {listing.zipCode}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Posted on {new Date(listing.date).toLocaleDateString()}</small>
          </div>
        </div>
      );
    });

    return(
      <div className="container">
        <div className="card-group">{listData}</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { listings: state.listings };
}

export default connect(mapStateToProps, actions)(AllListings);