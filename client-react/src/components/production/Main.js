import React, { Component } from 'react';
import './Main.css';
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './theme';
import { Container, TextField, Button, Grid, InputLabel } from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import SurveyComponent from "../survey/survey";



const styles = {
  openModalStyle: {
    padding: '1em',
    transtion: '0.3s all ease-out',
    WebkitTransition: '0.3s all ease-out',
    transform: 'translate3d(258px, 0px, 0px)',
    marginTop: '64px',
    textAlign: 'left'
  },
  closeModalStyle: {
    padding: '1em',
    transtion: '0.3s all ease-out',
    WebkitTransition: '0.3s all ease-out',
    transform: 'translate3d(50px, 0px, 0px)',
    marginTop: '64px',
    textAlign: 'left'
  },
  buttons: {
    backgroundColor: "#FF2A27",
    color: "white",
    padding: 10,
    margin: 5
  }
};

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div>
          <Header
            title={'Dashboard'}
            openState={this.state.open}
            toggleNavigation={this.toggleNavigation}
          />
          <Container style={{ marginLeft: '5%' }}>
            {/* <h1 style={{fontWeight:"bold",textAlign: "center",fontSize: 40, color:'#FF2A27', margin: 20}}>
                Good to have you here
              </h1> */}
            <div style={{ display: "inline-block", width: "40%", marginLeft: 50 }}>
              <div style={{ fontWeight: "bold", textAlign: "center", fontSize: 30, color: '#FF2A27', marginTop: 60 }}>
                Welcome to CoGIT
                </div>
              <div style={{ fontStyle: "italic", fontSize: 16, color: 'black', marginTop: 20 }}>
                "Working since 2020 in the field of Architecture, the founders realized that there was a huge disconnect between the various parts of the construction industry. The moving components were not in constant communication with each other, resulting in a waste of time and energies. Material information, specifications, trustworthy contractors, clients and architects; all the stakeholders were working together on the same goal but in individual pockets of isolation. A functioning Eco-system was missing. Something had to be built to solve this. So they decided to build this ecosystem. You know it as CoGIT (Construction getting in touch)"
                </div>
            </div>
            <div style={{ display: "inline-block", width: "40%", marginLeft: 50, float: "right" }}>
              <div style={{ fontWeight: "bold", textAlign: "center", fontSize: 30, color: '#FF2A27', marginTop: 60, marginBottom: 20 }}>
                Start a Project
                </div>
              <form onSubmit={() => { this.props.history.push('/survey') }}>
                <span style={{ fontSize: 20, marginLeft: 20, color: '#FF2A27' }}>Enter Project Name:</span>
                <div style={{ paddingTop: 10, paddingBottom: 10, marginLeft: 20 }}>
                  <TextField
                    id="outlined-basic"
                    label="Project Name"
                    type="text"
                    variant="outlined"
                    style={{ width: 445, marginBottom: 40, marginTop: 20 }}
                  />
                </div>
                <input style={{ outline: "none", fontSize: 18, marginLeft: 385, color: "white", padding: 20, borderRadius: 20, backgroundColor: "#FF2A27" }} type="submit" value="Start" />
              </form>
              {/* <FormControl style={{marginLeft:40}} variant="outlined">
                  <InputLabel htmlFor="component-outlined">Name</InputLabel>
                  <OutlinedInput id="component-outlined" label="Project Name" />
                </FormControl>
                <br/><br/><br/><br/>                  
                <div style={{margin : '2%', width: '80%'}}></div> */}
            </div>
            {/* <div style={{margin : '2%', width: '80%'}}>
                <SurveyComponent/>
              </div> */}
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
