import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../redux/mapStoreToProps';
// import components
import ChallengeOfTheDay from '../Challenges/Challenges'
import ImageUpload from './ImageUpload';
import Nav from '../../Nav/Nav.js';
import ScrollingFooter from '../../ScrollingFooter/ScrollingFooter';
// import material ui 
import {Card} from '@material-ui/core';
// import css
import './SubmitPhotos.css';

class SubmitPhotos extends Component {
  render() {
    return (
      <div>
        <Nav />      
        <div className='submitPhotoSection'>
          <Card style={{width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
            <div className='submitImage'>
              <ChallengeOfTheDay/>
            </div>
            <div className='selectImageBtn'>
            <ImageUpload/>
            </div>
          </Card>
        </div>
        <ScrollingFooter/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(SubmitPhotos));