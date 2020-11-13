import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import './ContestHome.css';
// react multi carousel
import 'react-multi-carousel/lib/styles.css';
import Leaderboard from '../Leaderboard/Leaderboard';
import TopSteppers from '../TopSteppers/TopSteppers';
import AllChallengePhotos from '../AllChallengePhotos/AllChallengePhotos';
import ChallengeOfTheDay from '../Challenges/Challenges'
import Nav from '../../Nav/Nav.js';
import Footer from '../../Footer/Footer.js';


class ContestHome extends Component {
  componentDidMount() {
    this.getLeaderBoard()
    this.getTopSteppers()
  }

  getLeaderBoard = () => {
    this.props.dispatch({
      type: "FETCH_LEADER_BOARD"
    })
  }
  getTopSteppers = () => {
    this.props.dispatch({
      type: "FETCH_TOP_STEPPERS"
    })
  }
  
  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <Leaderboard/>
          <TopSteppers/>
          <ChallengeOfTheDay/>
          <AllChallengePhotos/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ContestHome);
