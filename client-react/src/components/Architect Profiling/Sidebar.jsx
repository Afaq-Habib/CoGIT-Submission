import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { toggleMobileView } from './store/actions'
import cogit from '../../assests/CoGIT1.png'

class Sidebar extends Component {
  portfolioPictureStyle = () => {
    return {
      height: '30%',
      width: '65%',
      borderRadius: '50%'
    }
  }

  closeSidebar = () => {
    this.props.closeSidebar()
  }

  render() {
    return (
      <Wrapper>
        <div className="portfolioContainer">
          <div className="top-container">
            <i className="fas fa-times" onClick={this.closeSidebar}></i>
          </div>
          <img style={{width: 120, marginLeft: 110}} src={cogit}/>
          <div className="n-container">
            <img
              src= "data:image/jpeg;base64,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"
              alt="Portfolio"
              className="portfolioPicture"
              style={this.portfolioPictureStyle()}
            />
            <span className="f-span">Afaq Habib</span>
            <span className="s-span">Professional Architect</span>
            <span style={{color:"white", fontWeight:"bold", fontSize: 20, fontStyle:"italic"}}>Cogittier since</span>
            <span style={{color:"#FF2A27", fontWeight:"bold", fontSize: 20, fontStyle:"italic"}}>{"12-10-2020"}</span>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeSidebar: () => {
      dispatch(toggleMobileView())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Sidebar)

const Wrapper = styled.div`
  .portfolioContainer {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #505050;

    .top-container{
      display:none;
      justify-content:flex-end;
      padding: 10px;
    }

    .fa-times{
      font-size: 30px;
    }

    .n-container{
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > .f-span {
      margin-top: 20px;
      font-family: 'Pacifico', cursive;
      font-size: 1.4375rem;
      color: #ffff;
    }

    > .s-span {
      margin-top: 20px;
      margin-bottom: 150px;
      font-size: 17px;
      color: #ffff;
    }

    > .p-div {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      width: 80%;
      font-size: 14px;
      color: #ffff;

      > span {
        margin-bottom: 10px;
      }

      .fas {
        margin-right: 5px;
      }
    }

    > .l-span {
      position: fixed;
      bottom: 10px;
      font-size: 14px;
      font-family: 'Fira Sans Extra Condensed', sans-serif;

      > a {
        color: #f44e91;
      }
    }

  }

  @media (min-width: 1326px) {
    .portfolioPicture{
      height: 32% !important;
      width: 65% !important;
    }
  }

  @media (max-width: 1326px) {
    .portfolioPicture{
      height: 35% !important;
      width: 55% !important;
    }
  }

  @media (max-width: 1160px) {
    .portfolioPicture{
      height: 30% !important;
      width: 60% !important;
    }
  }

  @media (max-width: 992px) {
    .portfolioPicture{
      height: 30% !important;
      width: 65% !important;
    }
    .p-div{
      font-size: 12px !important;
    }
    .l-span{
      font-size:0.625rem !important;
    }
  }

  @media (max-width: 880px) {
    .portfolioPicture{
      height: 30% !important;
      width: 75% !important;
    }
  }

  @media (max-width: 785px) {
    .top-container{
      display:flex !important;
    }
    .portfolioPicture{
      height: 40% !important;
      width: 25% !important;
    }
  }

  @media (max-width: 670px) {
    .portfolioPicture{
      height: 40% !important;
      width: 28% !important;
    }
  }

  @media (max-width: 560px) {
    .portfolioPicture{
      height: 40% !important;
      width: 35% !important;
    }
  }

  @media (max-width: 490px) {
    .portfolioPicture{
      height: 40% !important;
      width: 38% !important;
    }
  }

  @media (max-width: 460px) {
    .portfolioPicture{
      height: 40% !important;
      width: 42% !important;
    }
  }

  @media (max-width: 400px) {
    .portfolioPicture{
      height: 35% !important;
      width: 55% !important;
    }
  }

  @media (max-width: 398px) {
    .portfolioPicture{
      height: 30% !important;
      width: 48% !important;
    }
  }

`
