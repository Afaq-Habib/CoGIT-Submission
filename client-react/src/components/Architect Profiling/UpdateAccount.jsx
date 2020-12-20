import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, TextField, TextareaAutosize, Avatar } from '@material-ui/core';
export default class UpdateAccount extends Component {
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
          {/* <div className="formContainer"> */}
            <div style={{fontSize: 30, fontWeight: "bold", paddingBottom: 15, textAlign: "center"}}>
              Your Profile
              </div>
            <form>
              <div style={{display:"inline-block", width: "40%"}}>
              <div style={{fontWeight: "bold", fontSize: 20, textAlign: "center"}}>Personal Info</div>
            <div style={{paddingTop: 10, paddingBottom: 10}}>
            <TextField 
            id="outlined-basic" 
            label="Afaq Habib" 
            type= "text"
            variant="outlined" 
            style={{width:350}}
            disabled />
            </div>
        
            <div style={{paddingTop: 10, paddingBottom: 10}}>
            <TextField 
            id="outlined-basic" 
            label="afaqhabib49@gmail.com" 
            type= "email"
            variant="outlined" 
            style={{width:350}}
            disabled />
            </div>
           
            <div style={{paddingTop: 10, paddingBottom: 10}}>
            <TextField 
            id="outlined-basic" 
            label="Profession Quote" 
            type= "text"
            variant="outlined" 
            style={{width:350}}
            />
            </div>
          
            <div style={{paddingTop: 10, paddingBottom: 10}}>
            <TextField
              id="outlined-multiline-static"
              label="Personal Description"
              multiline
              rows={4}
              variant="outlined"
              style={{width:350}}
            />
            </div>
            <div style={{paddingTop: 10, paddingBottom: 10}}>
            <div style={{paddingBottom: 20,fontWeight: "bold", fontSize: 20, textAlign: "center"}}>Profile Picture</div>
            <input 
              ref="file" 
              type="file" 
              name="user[image]" 
              multiple="true"
              style={{outline:"none", fontSize:18, color:"black"}}
            //   onChange={this_onChange}
            />
            </div>
            </div>
            <div style={{display:"inline-block", width: "40%", float:"right"}}>
            <div style={{fontWeight: "bold", fontSize: 20, textAlign: "center"}}>Social Links</div>
            <div style={{paddingTop: 10, paddingBottom: 10}}>
            <TextField 
            id="outlined-basic" 
            label="Twitter Link" 
            type= "url"
            variant="outlined" 
            style={{width:350}}
            />
            </div>
            <div style={{paddingTop: 10, paddingBottom: 10}}>
            <TextField 
            id="outlined-basic" 
            label="Youtube Link" 
            type= "url"
            variant="outlined"
            style={{width:350}} 
            />
            </div>
            <div style={{paddingTop: 10, paddingBottom: 10}}>
            <TextField 
            id="outlined-basic" 
            label="Linkedin Link" 
            type= "url"
            variant="outlined" 
            style={{width:350}}
            />
            </div>
            <div style={{paddingTop: 10, paddingBottom: 100}}>
            <TextField 
            id="outlined-basic" 
            label="Instagram Link" 
            type= "url"
            variant="outlined" 
            style={{width:350}}
            />
            </div>
            <input style={{outline:"none", fontSize:18,marginLeft: 270, color:"white", padding: 20, borderRadius: 20, backgroundColor: "limegreen"}} type="submit" value="Save" />
            </div>
            </form>
            {/* <form>
              <span className="fill_field">
                {this.state.nameErrorField ? 'Please fill your name' : ''}
              </span>
              <div>
                <i className="fas fa-user"></i>
                <input
                  value={this.state.name}
                  onChange={e => this.handleUserInput(e)}
                  placeholder="Name"
                  name="name"
                />
              </div>
              <span className="fill_field">
                {this.state.emailErrorField ? 'Please fill your email' : ''}
              </span>
              <div>
                <i className="far fa-envelope"></i>
                <input
                  value={this.state.email}
                  onChange={e => this.handleUserInput(e)}
                  placeholder="Email"
                  name="email"
                />
              </div>
              <span className="fill_field">
                {this.state.messageErrorField ? 'Please fill your message' : ''}
              </span>
              <div>
                <textarea
                  value={this.state.message}
                  onChange={e => this.handleUserInput(e)}
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>
              <button onClick={e => this.handleSubmit(e)}>Submit</button>
            </form> */}
          {/* </div> */}
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  .aboutContainer {
    display: block;
    padding: 5% 15% 0;
    height: 85vh;
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
