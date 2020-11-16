import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { Button, Grid, Typography, Card } from '@material-ui/core';
import moment from 'moment';
import ContentEditable from 'react-contenteditable';
import axios from 'axios';



class ChallengesGridItem extends Component {
  // allows admin to edit a challenges description and name
  // but NOT DATE
  editChallenge = (event) => {
    console.log('to change', event.target.value);
    // snuck some data in to identify selected item for update
    console.log('id of', event._dispatchInstances.pendingProps.data);
    console.log('event', event);
    // event._dispatchInstances.pendingProps.value is implanted value
    // to identify either name or description being edited
    if(event._dispatchInstances.pendingProps.value === 'name') {
      console.log('name is happening');
      axios({
        method: 'PUT',
        url: '/api/challenges/name',
        data: {
          id: event._dispatchInstances.pendingProps.data,
          name: event.target.value
        }
      })
    } else if(event._dispatchInstances.pendingProps.value === 'description') {
      console.log('description is happening');
      axios({
        method: 'PUT',
        url: '/api/challenges/description',
        data: {
          id: event._dispatchInstances.pendingProps.data,
          description: event.target.value
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Grid item xs={4}>
          <Typography variant='h5'>
            <ContentEditable
            // snuck some extra data in to help identify selected item
              value='name'
              data={this.props.challenge.id}
              html={this.props.challenge.name}
              onChange={this.editChallenge}
            />
          </Typography>
          <Typography variant='subtitle1'>{moment(this.props.challenge.date).format('MMMM Do YYYY')}</Typography>
          <Typography variant='body2'>
            <ContentEditable
            // snuck some extra data in to help identify selected item
              value='description'
              data={this.props.challenge.id}
              html={this.props.challenge.description}
              onChange={this.editChallenge}
            />
          </Typography>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ChallengesGridItem);