import React, { Component } from 'react';
import '../production/Main.css';
import Header from '../production/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../production/theme';
import { Container, TextField, Button, Grid, InputLabel } from '@material-ui/core';
import Options from './options'
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

class Start extends Component {
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
            <Container  style={{marginLeft  : '5%'}}>
              <h1 style={{fontSize: 40, color:'#FF2A27', margin: 20}}>
                Develop according to your desire
              </h1>
              </Container>
             <Grid container spacing={24}>
              <Grid item md={4}>
              <Options title="Maps" name="Maps" text="Click here to see the maps" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxwi5BytmpdcuGIrjcpKmpdDEWvYYOGSTWA&usqp=CAU"/>
              </Grid>
              <Grid item md={4}>
              <Options title="Develop Map" name="Develop Map" text="Click here to create custom maps" image="https://i.ytimg.com/vi/oULyZfa1C3k/maxresdefault.jpg"/>
              </Grid>
              <Grid item md={4}>
              <Options title="Hire an Architect" name="Hire an Architect" text="Click here to hire an architect" image="https://www.clipartkey.com/mpngs/m/52-520664_cartoon-architect.png"/>
              </Grid>
            </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Start;





