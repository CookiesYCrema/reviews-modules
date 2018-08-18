//hierarchy
  //ReviewSection
    //AskCommunity
    //ReviewList

import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';

// import styled from 'styled-components';

import styles from '../dist/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import {EntireReviewSection, AllReviews, option, SingleReview, VerticalDivider, UserData, Avatar, UserStats, UserName, Location, Elite, ReviewData, FoodPicture, Useful, Funny, Cool, Flag, Divider, SearchSortLanguage, Search, SearchButton} from './reviewListStyles.js'




// const EntireReviewSection = styled.div`
//   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
// `

// const AllReviews = styled.ul`
//   list-style-type: none;
//   font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
//   padding: 0px;
//   -webkit-box-sizing: border-box;
//      -moz-box-sizing: border-box;
//           box-sizing: border-box;
// ` 

// const Options = styled.option`
//   font-weight: bold;
// `

// const SingleReview = styled.li`
//   display: flex;
//   justify-content: space-between;
//   box-sizing: border-box;
// `

// const VerticalDivider = styled.hr`
//   border-left:1px solid #38546d; 
//   border-right:1px solid #16222c; 
//   height:80px;
//   position:absolute;
//   right:249px;
//   top:10px; 
// `

// const UserData = styled.div`
//   display: flex;
//   float: left;
//   padding: 0 15px;
//   min-height: 1px;
//   box-sizing: border-box;
//   width: 37.5%;
// `

// const Avatar = styled.img`
//   height: 60px;
//   width: 60px;
//   padding-right: 10px;
// `

// const UserStats = styled.div`
//   white-space: nowrap;
//   font-size:80%
// `

// const UserName = styled.a`
//   font-size: 110%
// `

// const Location = styled.div`
//   font-weight: bold;
// `

// const Elite = styled.div`
//   color: #F15C00;
//   font-weight: bold;
// `

// const ReviewData = styled.div`
//   float: left;
//   padding: 0 15px;
//   min-height: 1px;
//   box-sizing: border-box;
//   width: 62.5%;
// `

// const FoodPicture = styled.img`
//   height: 350px;
//   width: 350px;
// `

// const Useful = styled.button`
//   backface-visibility: hidden;
//   position: relative;
//   cursor: pointer;
//   display: inline-block;
//   white-space: nowrap;
//   background: #f5f5f5;
//   border-radius: 2px;
//   border: 1px solid #e6e6e6;
//   border-width: 1px 1px 1px 1px;
//   padding: 10px 20px 10px 20px;
//   box-shadow: inset 0px 1px 0px #ffffff,0px 1px 3px rgba(0%,0%,0%,0.3);
//   color: #666666;
//   font-size: 14px;
//   font-family: arial;
//   font-weight: 600;
//   font-style: normal;
//   text-shadow: 0px 0px 0px rgba(0%,0%,0%,0.4) 
// `

// const Funny = styled.button`
//   backface-visibility: hidden;
//   position: relative;
//   cursor: pointer;
//   display: inline-block;
//   white-space: nowrap;
//   background: #f5f5f5;
//   border-radius: 2px;
//   border: 1px solid #e6e6e6;
//   border-width: 1px 1px 1px 1px;
//   padding: 10px 20px 10px 20px;
//   box-shadow: inset 0px 1px 0px #ffffff,0px 1px 3px rgba(0%,0%,0%,0.3);
//   color: #666666;
//   font-size: 14px;
//   font-family: arial;
//   font-weight: 600;
//   font-style: normal;
//   text-shadow: 0px 0px 0px rgba(0%,0%,0%,0.4)
// `

// const Cool = styled.button `
//   backface-visibility: hidden;
//   position: relative;
//   cursor: pointer;
//   display: inline-block;
//   white-space: nowrap;
//   background: #f5f5f5;
//   border-radius: 2px;
//   border: 1px solid #e6e6e6;
//   border-width: 1px 1px 1px 1px;
//   padding: 10px 20px 10px 20px;
//   box-shadow: inset 0px 1px 0px #ffffff,0px 1px 3px rgba(0%,0%,0%,0.3);
//   color: #666666;
//   font-size: 14px;
//   font-family: arial;
//   font-weight: 600;
//   font-style: normal;
//   text-shadow: 0px 0px 0px rgba(0%,0%,0%,0.4)
// `

// const Flag = styled.button `
//   backface-visibility: hidden;
//   position: relative;
//   cursor: pointer;
//   display: inline-block;
//   white-space: nowrap;
//   background: #f5f5f5;
//   border-radius: 2px;
//   border: 1px solid #e6e6e6;
//   border-width: 1px 1px 1px 1px;
//   padding: 10px 20px 10px 20px;
//   box-shadow: inset 0px 1px 0px #ffffff,0px 1px 3px rgba(0%,0%,0%,0.3);
//   color: #666666;
//   font-size: 14px;
//   font-family: arial;
//   font-weight: 600;
//   font-style: normal;
//   text-shadow: 0px 0px 0px rgba(0%,0%,0%,0.4)
// `

// const Divider = styled.hr `
//   display: block;
//   height: 1px;
//   border: 0;
//   border-top: 1px solid #ccc;
//   margin: 1em 0;
//   padding: 0;
// `

// const SearchSortLanguage = styled.span`
//   display: inline-block;
// `

// const Search = styled.input`
//   height: 25px;
//   width: 200px;
// `

// const SearchButton = styled.button`
//   height: 30px;
//   width: 30px;
//   background-color: #dd050b;
// `

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      hasData: false,
    } 
    // let hasData = false;
  }

  componentDidMount() {
    axios.get('/api/reviews')
    .then(result => {
      console.log('revs got: ', result);
      this.setState({reviews: result.data}) 
      if (this.state.reviews.length === 0) {
        // this.createData();
        this.fetchReviews();
      } else {
        this.fetchReviews();
      }
    })
    .catch(err => console.error(err));
  }

  fetchReviews() {
    axios.get('/api/reviews')
    .then(result => {
      this.setState({reviews: result.data}) 
    })
    .catch(err => console.error(err));
  }

  displayRatings(review) {
    let rating = review.reviewData.rating
    if (rating === 1) { 
      return <span><FontAwesomeIcon icon="star" color="#cc8b1f"/><FontAwesomeIcon icon="star" color="#eee"/><FontAwesomeIcon icon="star" color="#eee"/><FontAwesomeIcon icon="star" color="#eee"/><FontAwesomeIcon icon="star" color="#eee"/></span>
    } else if (rating === 2) {
      return <span><FontAwesomeIcon icon="star" color="#dcb228"/><FontAwesomeIcon icon="star" color="#dcb228"/><FontAwesomeIcon icon="star" color="#eee"/><FontAwesomeIcon icon="star" color="#eee"/><FontAwesomeIcon icon="star" color="#eee"/></span>
    } else if (rating === 3) {
      return <span><FontAwesomeIcon icon="star" color="#f0991e"/><FontAwesomeIcon icon="star" color="#f0991e"/><FontAwesomeIcon icon="star" color="#f0991e"/><FontAwesomeIcon icon="star" color="#eee"/><FontAwesomeIcon icon="star" color="#eee"/></span>
    } else if (rating === 4) {
      return <span><FontAwesomeIcon icon="star" color="#f26a2c"/><FontAwesomeIcon icon="star" color="#f26a2c"/><FontAwesomeIcon icon="star" color="#f26a2c"/><FontAwesomeIcon icon="star" color="#f26a2c"/><FontAwesomeIcon icon="star" color="#eee"/></span>
    } else {
      return <span><FontAwesomeIcon icon="star" color="#dd050b"/><FontAwesomeIcon icon="star" color="#dd050b"/><FontAwesomeIcon icon="star" color="#dd050b"/><FontAwesomeIcon icon="star" color="#dd050b"/><FontAwesomeIcon icon="star" color="#dd050b"/></span>
    }
    
  }

  isElite(review) {
    if (review.user.elite === true) {
      return `Elite '18`
    }
  }

  createData() {
    for(let i = 0; i < 100; i++) {
      axios.post('/api/reviews')
      .then(result => console.log('more data'))
      .catch(err => console.log(err))
    }
  }

  increaseUsefulVotes(review) {
    axios.post(`/api/reviews/${review._id}/usefulVotes`)
    .then(() => this.fetchReviews())
    .catch(err => console.log(err));
  }

  increaseFunnyVotes(review) {
    axios.post(`/api/reviews/${review._id}/funnyVotes`)
    .then(() => this.fetchReviews())
    .catch(err => console.log(err));
  }

  increaseCoolVotes(review) {
    axios.post(`/api/reviews/${review._id}/CoolVotes`)
    .then(() => this.fetchReviews())
    .catch(err => console.log(err));
  }
 

  render () {

    const size = 10;
    const reviewDisplay = this.state.reviews.slice(0, size).map((review, index) => {
      const dateToFormat = new Date(review.reviewData.time_created.trim())
      return (
        <li className={styles.singleReview} key={index}>
            
            <div className={styles.userData}>

              <img className={styles.avatar} src={review.user.image_url}/>
              <div className={styles.userStats}>

                <a className={styles.userName} href="https://www.yelp.com/">{review.user.name}</a>
                <div className={styles.location}>{review.user.location}, CA</div>
                <div className="user-friends"><FontAwesomeIcon icon="user-friends" color="#F15C00"/> <b>{review.user.friends}</b> friends</div>
                <div className="user-review-number"><FontAwesomeIcon icon="star" color="#F15C00"/> <b>{review.user.reviews}</b> reviews</div>
                <div className="user-photo-number"><FontAwesomeIcon icon="camera" color="#F15C00"/> <b>{review.user.photos}</b> photos</div>
                <div className={styles.elite}>{this.isElite(review)}</div>
              </div>
            
              {/* <Divider/> */}
            
            </div>

            <br/>

            <div className={styles.reviewData}>
           
              <div className="review-score-date">


                <span className="review-rating">{this.displayRatings(review)}</span> {'  '}
                <Moment format="MM/DD/YY" date={dateToFormat}/> 

              </div>
              <br/>
              <div className="review-text">{review.reviewData.text}</div>
              <br/>
              <img className={styles.foodPic} src={review.reviewData.review_pic}/>
              <br/><br/>
              <div className="review-buttons">
                <font size="2"><b>Was this review ...?</b></font>
                <br/><br/>
                <button className={styles.usefulButton} onClick={() => this.increaseUsefulVotes(review)}><FontAwesomeIcon icon="lightbulb" /> Useful {review.usefulVotes}</button> {'  '}
                <button className={styles.funnyButton} onClick={() => this.increaseFunnyVotes(review)}><FontAwesomeIcon icon="thumbs-up" /> Funny {review.funnyVotes}</button> {'  '}
                <button className={styles.coolButton} onClick={() => this.increaseCoolVotes(review)}><FontAwesomeIcon icon="user-astronaut" /> Cool {review.coolVotes}</button>{'  '}
                <button className={styles.flagButton}><FontAwesomeIcon icon="flag" /></button>
              </div>
              
              <br/>
             ` 
              
            <hr className={styles.reviewDivider}/>
            

            </div>


        </li>
      )
    })

    return (
      <div className={styles.reviewEntireSection}>
        <h2><font color="#d32323">Recommended Reviews </font>for {this.props.restaurant}</h2>

        <span className={styles.searchSortLanguage}>
          <form>
            <input className={styles.search} type="text" placeholder="Search within the reviews" />
            <button className={styles.searchButton}><FontAwesomeIcon icon="search" color="#eee"/></button> {'  '}
          
            Sort by
            <select> 
              <option value="yelp-sort">Yelp Sort</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highest-rated">Highest Rated</option>
              <option value="lowest-rated">Lowest Rated</option>
              <option value="elites">Elites</option>
            </select> {'  '}
            Language
            <select>
              <option value="english">English ({this.state.reviews.length})</option>
            </select>
          </form>
        </span>

        <ul className={styles.allReviews}>
          {reviewDisplay}
        </ul>

        Page 1 of {Math.ceil(this.state.reviews.length / 10)}
        {/* <button onClick={() => this.createData()}>Create data</button> */}
      </div>
    )
  }
}

export default ReviewList;
