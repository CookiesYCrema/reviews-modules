import React from 'react';
import ReviewList from './ReviewList';
import AskCommunity from './AskCommunity';
// import styled from 'styled-components';

import styles from '../dist/style.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faStar,  faCamera, faLightbulb, faThumbsUp, faUserAstronaut, faFlag, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faUserFriends, faStar, faCamera, faLightbulb, faThumbsUp, faUserAstronaut, faFlag, faSearch)


class ReviewSection extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: ['Streich - Thompson', 'Daniel - Crist', 'Rippin and Sons', 'Haag, Boyle and Ledner', 'Swaniawski, Ondricka and Reinger'],
      restaurant: '',
    };
  }

  componentDidMount() {
    this.randomRestaurant()
  }

  randomRestaurant() {
    let random = Math.floor(Math.random() * (this.state.restaurants.length));
    this.setState({ restaurant: this.state.restaurants[random] }) 
  }

  render() {

    return (
    <div className={styles.background}>
      <AskCommunity restaurant={this.state.restaurant}/>
      <br/>
      <ReviewList restaurant={this.state.restaurant}/>
    </div>
  )
 } 
}

export default ReviewSection;