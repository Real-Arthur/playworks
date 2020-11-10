import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './TeamHome.css';
import TeamRank from '../TeamRank/TeamRank';
import TeamStepCount from '../TeamStepCount/TeamStepCount';
import { Typography } from '@material-ui/core';
import ChallengeOfTheDay from '../Challenges/Challenges';
import TeamChallengePhotos from '../TeamChallengePhotos/TeamChallengePhotos';

class TeamHome extends Component {
  state = {
    teamName: "Kickin' Chickens",
    steps: '3325',

  };

  render() {
    return (
      <div>
        <Typography variant='h4'>{this.state.teamName}</Typography>
        <TeamRank/>
        <TeamStepCount/>
        <ChallengeOfTheDay/>
        <TeamChallengePhotos/>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(TeamHome);