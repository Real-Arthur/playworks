import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import './SubmitSteps.css';
import Nav from '../../Nav/Nav.js';
import Footer from '../../Footer/Footer.js';
// import material ui
import { Button, Card, TextField, Typography } from '@material-ui/core';
import swal from 'sweetalert';

class SubmitSteps extends Component {

  state = {
    steps: '',
    date: '',
  };

handleChangeFor = (propertyName) => (event) => {
  this.setState({
    [propertyName]: event.target.value,
  });
};

confirmationSubmitSteps = (event) => {
  if(this.state.steps === ''){
    swal(`Please enter steps`);
  }
  else if(this.state.date === ''){
    swal(`Please select a date`);
  }
  else{
    swal({
      title: "Is the submitted information correct?",
      text: `Steps: ${this.state.steps} 
          Date: ${this.state.date.split( 'T' )[0]}`,
      icon: "info",
      buttons: {
        cancel: "No",
        yes: true,
      }
    }).then(isCorrect => {
      if(isCorrect){
        this.submitSteps(event);
        swal({
          title: "You're steps have been logged!",
          icon: "success"
        }).then(() => {
          this.props.history.goBack();
        })
      }
      else{
        swal(`No steps were logged`)
      }
    })
  }
}

submitSteps = (event) => {
    event.preventDefault();
    this.props.dispatch({
        type: 'CREATE_STEPS',
        payload: {
          steps: this.state.steps,
          date: this.state.date,
        },
      });
  };

handleCancel = () => {
    this.setState({
        steps: '',
        date: '',
      });
    this.props.history.goBack();
}

  render() {
    return (
      <div>
        <Nav />
        <div>
          <center>

            <div className='submitStepsSection'>
              <Card style={{width: '300px', marginLeft: 'auto', marginRight: 'auto'}}>
                <div className='submitStepsHeadline'>
                  <Typography variant='h5'>Submit Steps</Typography>
                </div>
                <div className='submitStepsInput'>
                  <TextField id="outlined-basic" type="number" label="Number of steps" variant="outlined"
                    onChange={this.handleChangeFor('steps')}></TextField>
                </div>
                <div className='dateInputField'>
                  <input 
                      style={{display: 'block', width: 175, color: 'rgb(118, 118, 118)', padding: '10px'}} 
                      type="date" 
                      value={this.state.date} 
                      id="date" 
                      name="date"
                      onChange={this.handleChangeFor('date')}>
                  </input>
                </div>      
              </Card>
            </div>

            <div className='stepsSubmitCancelBtns'>
              <Button variant='contained' 
                color='default'
                size= 'large'
                style={{margin: '.5rem'}}
                onClick={this.handleCancel}>
                Cancel
              </Button>    
              <Button variant='contained' 
                color='primary'
                size= 'large'
                style={{margin: '.5rem', color: 'white', background: '#054f95'}}
                onClick={this.confirmationSubmitSteps}>
                Submit
              </Button>
            </div>
          </center>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(SubmitSteps));