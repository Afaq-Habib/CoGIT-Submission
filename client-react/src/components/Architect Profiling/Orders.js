import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


export default class Order extends Component {
 

  render() {
    return (
      <Wrapper>
        <div className="aboutContainer">
          <span>No Orders</span>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  .aboutContainer {
    display: block;
    padding: 5% 15% 0;
    height: 87vh;
    overflow-y: auto;

    > .helloContainer {
      width: 40%;
      display: flex;
      flex-direction: column;

      .h-f-div{
        display: flex;
        flex-direction: column;
          > span:nth-child(1) {
          font-weight: bold;
          font-size: 35px;
          margin-bottom: 30px;
        }

        > .f-r-span,
        > span:nth-child(3) {
          font-size: 17px;
        }
      }

      .h-s-div {
        display: flex;
        flex-direction: column;
        padding-top: 30px;

        > .or-span {
          padding-left: 100px;
          margin-top: 50px;
        }

        .s-d-text {
          margin-top: 50px;
          margin-bottom: 5px;
        }

         .m-l-text {
          color: #1c699b;
        }
      }
    }

    > .formContainer {
      width: 60%;
      display: flex;
      flex-direction: column;
      padding-left: 10%;

      > span:nth-child(1) {
        font-family: 'Oswald', sans-serif;
        font-size: 35px;
        margin-bottom: 30px;
      }

      form {
        display: flex;
        flex-direction: column;

        > div:nth-child(2),
        > div:nth-child(4) {
          background-color: #ebeef1;
          height: 50px;
          border-radius: 20px;
          margin-bottom: 20px;
          display: flex;

          > .fas,
          > .far {
            align-self: center;
            color: #9998a9;
            margin: 0 15px;
          }

          > input {
            border: none;
            background-color: #ebeef1;
            width: 100%;
            outline: none;
            border-radius: 20px;
            padding: 5px;
            font-size: 16px;
          }
        }

        > .fill_field {
          font-size: 13px;
          color: #f33b86;
        }

        > div:nth-child(6) {
          background-color: #ebeef1;
          height: 150px;
          border-radius: 20px;
          margin-bottom: 40px;

          > textarea {
            height: 100%;
            width: 100%;
            background-color: #ebeef1;
            resize: none;
            border: none;
            border-radius: 20px;
            padding: 15px 10px;
            outline: none;
            font-family: Arial;
            font-size: 16px;
          }
        }

        > button {
          background-color: #FF2A27;
          border-radius: 50px;
          padding: 15px 0;
          color: #fff;
          border: 1px solid transparent;
          font-size: 16px;
          font-weight: bold;
          outline: none;

          &:hover {
            background-color: #fff;
            border: 1px solid #f33b86;
            color: #f33b86;
          }
        }
      }
    }

  }

  @media (max-width: 600px) {
    .aboutContainer{
      flex-direction:column;
      padding: 5% 5% 40%;
    }
    .helloContainer {
      width: 100% !important;
      flex-direction: row !important;
    }

    .formContainer {
      width: 100% !important;
      margin-top: 60px;
    }
    .h-f-div{
      width: 45%;
    }
    .h-s-div{
      width: 58%;
    }
    .s-d-text {
      margin-top: auto !important;
    }
    .or-span{
      display:none;
    }
  }
`
