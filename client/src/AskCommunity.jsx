import React from 'react';
// import styled from 'styled-components';


// import {EntireSection, Header, Divider, Button, Questions} from './askCommunityStyles'

import styles from '../dist/style.css';
// const EntireSection = styled.div`
// font-family: Arial, "Helvetica Neue", Helvetica, sans-serif
// `
// 
// const Header = styled.h2 `
//   vertical-align: baseline;
//   font-weight: bold;
//   color: #d32323;
//   `
// 
// const Divider = styled.hr `
//   display: block;
//   height: 1px;
//   border: 0;
//   border-top: 1px solid #ccc;
//   margin: 1em 0;
//   padding: 0;
// `
// 
// const Questions = styled.div`
//   font-size: 85%;
// `
// const Button = styled.button`
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


class AskCommunity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaruantName: '',
      questions: [],
    }
  }

  compenentDidMount() {
    console.log(this.props.restaurant)
  }

  

  render() {
    return (

    <div className={styles.askEntireSection}>
      <h2 className={styles.askHeader}>Ask the Community</h2>
      <hr className={styles.askDivider}/>
      <div className={styles.questions}>
        Yelp users haven’t asked any questions yet about <b>{this.props.restaurant}</b>
      </div>
      <br/>
      <button className={styles.askButton}>Ask a Question</button>
    </div>

    )
  }
}

export default AskCommunity;
