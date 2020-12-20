import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, TextField, TextareaAutosize } from '@material-ui/core';

import UpdateAccount from './UpdateAccount';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ChatIcon from '@material-ui/icons/Chat';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import UpdateIcon from '@material-ui/icons/Update';

export default class Account extends Component {
  constructor(props) {
    super(props)
    this.state = this.initialState
  }

  initialState = {
    name: '',
    email: '',
    message: '',
    nameErrorField: false,
    emailErrorField: false,
    messageErrorField: false
  }

  handleUserInput(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      nameErrorField: false,
      emailErrorField: false,
      messageErrorField: false,
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.name) {
      this.setState({
        nameErrorField: true
      })
    } else if (!this.state.email) {
      this.setState({
        emailErrorField: true
      })
    } else if (!this.state.message) {
      this.setState({
        messageErrorField: true
      })
    } else {
      axios
        .post('https://mandrillapp.com/api/1.0/messages/send.json', {
          data: {
            key: '',
            message: {
              from_email: this.state.email,
              to: [
                {
                  email: 'princewilliroka@outlook.com',
                  name: this.state.name,
                  type: 'to'
                }
              ],
              autotext: 'true',
              subject: `Princewill Iroka's Portfolio`,
              html: this.state.message
            }
          }
        })
        .then(function (response) {
          console.log(response)
          this.setState(this.initialState)
        })
        .catch(function (response) {
          console.log(`Error: ${response}`)
        })
    }
  }

  render() {
    return (
      <Wrapper>
        <div className="aboutContainer">
        <div style={{fontSize: 30, fontWeight: "bold", paddingBottom: 15, paddingBottom:50, marginLeft: 240}}>
              Account Settings
              </div>
          <div style={{display:"inline-block",width:"40%", marginLeft: 50}}>
          <div style={{paddingTop: 35, paddingBottom: 20}}>
        <Button startIcon={<UpdateIcon />} onClick={<UpdateAccount />} style={{fontSize:14,borderRadius:50, padding:30, color:"green", borderColor:"lightgreen", borderWidth: 2}} variant="outlined">
        &nbsp;&nbsp;Update Profile&nbsp;&nbsp;
      </Button>
      </div>
      <div style={{paddingTop: 20, paddingBottom: 20}}>
      <Button startIcon={<LockOpenIcon />} style={{fontSize:14,borderRadius:50, padding:30, color:"green", borderColor:"lightgreen", borderWidth: 2}} variant="outlined" >
        Change Password
      </Button>
      </div>
      </div>
      <div style={{display:"inline-block", width:"40%", float:"right"}}>
      <div style={{paddingTop: 20, paddingBottom: 20}}>
      <Button startIcon={<ChatIcon />} style={{fontSize:14,borderRadius:50, padding:30, color:"green", borderColor:"lightgreen", borderWidth: 2}} variant="outlined">
      &nbsp;&nbsp;Contact CoGIT
      </Button>
      </div>
      <div style={{paddingTop: 20, paddingBottom: 20}}>
      <Button startIcon={<DeleteForeverIcon />} style={{fontSize:14,borderRadius:50, paddingBottom:30, paddingTop: 30, paddingLeft: 30, paddingRight: 30, color:"#FF2A27", borderColor:"#FF2A27", borderWidth: 2}} variant="outlined" >
        Delete Account
      </Button>
      </div>
      </div>
      </div>
        {/* {a == 1 ? <UpdateAccount /> : "Afaq"} */}
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
