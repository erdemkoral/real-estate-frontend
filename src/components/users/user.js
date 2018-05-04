import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import ListingForm from '../listings/listingForm';
import ReactTable from 'react-table';
import { columns } from './tableOption';

class User extends Component{
  state={ upload : null }

  componentWillMount(){
    this.props.loadUser();
  }
  
  render(){
   
    const { user } = this.props;
    return(
      <div className="container-fluid">
        <h2>My Listings</h2>
        {/* {this.state.upload && <ListingForm></ListingForm>} */}
        <button className="btn btn-primary" onClick={()=> this.props.history.push('/listingform')}>Upload New Listing</button>
        <ReactTable  defaultPageSize={10} data={user.listings} columns={columns} getTdProps={(state, rowInfo, column, instance) => {
          return {
            onClick: (e, handleOriginal) => {
              this.props.history.push(`/mylistings/${rowInfo.original._id}`);
            }
          };
        }}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { user: state.user };
}

export default connect(mapStateToProps, actions)(User);