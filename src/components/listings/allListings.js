import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class AllListings extends Component{
  componentDidMount(){
    this.props.loadListings();
  }
  render(){
    const { listings } = this.props;
    const listData = listings.map(listing => {
      return (
        <div key={listing._id}>
          <label>Address</label>
          <h3>{listing.street1}</h3>
          <h3>{listing.street2}</h3>
          <h3>{listing.state}</h3>
          <label>Sales Price</label>
          <h3>${listing.salesPrice}</h3>
        </div>
      );
    });
    return(
      <div>{listData}</div>
    );
  }
}

function mapStateToProps(state){
  return { listings: state.listings };
}

export default connect(mapStateToProps, actions)(AllListings);