import React, { Component } from 'react';
import '../production/Main.css';
import Header from '../production/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../production/theme';
import { Container, TextField, Button, Grid, InputLabel} from '@material-ui/core';
import IconButton from 'material-ui/IconButton'
import HomeIcon from 'material-ui-icons/Home'
import {Link, withRouter} from 'react-router-dom'
import CartIcon from 'material-ui-icons/ShoppingCart'
import Badge from 'material-ui/Badge'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import {Typography} from "@material-ui/core"
import CssBaseline from '@material-ui/core/CssBaseline';
import { BorderOuterRounded } from '@material-ui/icons';
import Items from './items'
import { width } from '@fortawesome/free-solid-svg-icons/faList';
import './displayItems.css'


const styles={
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

class Material extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({open: !this.state.open});
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
          <div>
        <div>
          <Header
            title={'Building Material Marketplace'}
            openState={this.state.open}
            toggleNavigation={this.toggleNavigation}
          />
            <Container  style={{marginLeft  : '5%'}}>
            {/* <div>
            <Link>
            <IconButton style={{float:"right"}} aria-label="Home">
                <HomeIcon/>
            </IconButton>
            </Link>
            <Link>
            <Button style={{float:"right"}}>
                Cart
                <Badge color="secondary" style={{'marginLeft': '7px'}}>
                <CartIcon />
                </Badge>
            </Button>
            </Link>      
      </div> */}
      <CssBaseline />
        <AppBar showMenuIconButton={false} title="Select according to your desire" style={{marginTop:30, marginLeft:200, width:900,borderRadius:50, backgroundColor:"#FF2A27"}} position="static">
    <Toolbar style={{marginTop:4, backgroundColor:"#FF2A27"}}>
    
      <div>
        <Link to="/material">
          <IconButton aria-label="Home">
            <HomeIcon color="white"/>
          </IconButton>
        </Link>
        <Link>
          <Button style={{marginBottom:16, fontSize:12, color:"white", paddingLeft:15}}>
            Cart
              <CartIcon color="white"/>
          </Button>
        </Link>      
      </div>
      
    </Toolbar>
  </AppBar>
            </Container>
        </div>
        {/* <div id="btns" style={{width:"1000px", marginLeft: 330, marginTop: 100}}>
        <div style={{display:"inline-block",width:"80%", marginLeft: 50}}>
          <span style={{paddingTop: 20, paddingBottom: 20}}>
        <Button style={{fontSize: 14, fontWeight:"bold" , borderRadius:50, padding:30, color:"#FF2A27", borderColor:"#FF2A27", borderWidth: 2}} variant="outlined">
        &nbsp;Cement&nbsp;
      </Button>
      </span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span style={{paddingTop: 20, paddingBottom: 20}}>
      <Button style={{fontSize: 14, fontWeight:"bold" ,borderRadius:50, padding:30, color:"#FF2A27", borderColor:"#FF2A27", borderWidth: 2}} variant="outlined" >
      &nbsp;&nbsp; Sand &nbsp;&nbsp;
      </Button>
      </span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span style={{paddingTop: 20, paddingBottom: 20}}>
        <Button style={{fontSize: 14, fontWeight:"bold" , borderRadius:50, padding:30, color:"#FF2A27", borderColor:"#FF2A27", borderWidth: 2}} variant="outlined">
        &nbsp;&nbsp;&nbsp; Steel &nbsp;
      </Button>
      </span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span style={{paddingTop: 20, paddingBottom: 20}}>
      <Button style={{fontSize: 14, fontWeight:"bold" , borderRadius:50, padding:30, color:"#FF2A27", borderColor:"#FF2A27", borderWidth: 2}} variant="outlined" >
        Concrete
      </Button>
      </span>
      <br /><br /><br /><br /><br /><br />
      <span style={{paddingTop: 20, paddingBottom: 20}}>
        <Button style={{fontSize: 14, fontWeight:"bold" , borderRadius:50, padding:30, color:"#FF2A27", borderColor:"#FF2A27", borderWidth: 2}} variant="outlined">
        &nbsp; Glass &nbsp;&nbsp; 
      </Button>
      </span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span style={{paddingTop: 20, paddingBottom: 20}}>
      <Button style={{fontSize: 14, fontWeight:"bold" , borderRadius:50, padding:30, color:"#FF2A27", borderColor:"#FF2A27", borderWidth: 2}} variant="outlined" >
       &nbsp;&nbsp; Wood &nbsp;&nbsp;
      </Button>
      </span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span style={{paddingTop: 20, paddingBottom: 20}}>
        <Button style={{fontSize: 14, fontWeight:"bold" , borderRadius:50, padding:30, color:"#FF2A27", borderColor:"#FF2A27", borderWidth: 2}} variant="outlined">
        &nbsp;&nbsp; Brick &nbsp;&nbsp;
      </Button>
      </span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span style={{paddingTop: 20, paddingBottom: 20}}>
      <Button style={{fontSize: 14, fontWeight:"bold" , borderRadius:50, padding:30, color:"#FF2A27", borderColor:"#FF2A27", borderWidth: 2}} variant="outlined" >
      &nbsp; Stone &nbsp;&nbsp;&nbsp;
      </Button>
      </span><br /><br /><br /><br /><br /><br />
      <span style={{paddingTop: 20, paddingBottom: 20}}>
        <Button style={{fontSize: 14, fontWeight:"bold" , borderRadius:50, padding:30, color:"#FF2A27", borderColor:"#FF2A27", borderWidth: 2}} variant="outlined">
        &nbsp;Plastic
      </Button>
      </span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span style={{paddingTop: 20, paddingBottom: 20}}>
      <Button style={{fontSize: 14, fontWeight:"bold" , borderRadius:50, padding:30, color:"#FF2A27", borderColor:"#FF2A27", borderWidth: 2}} variant="outlined" >
      &nbsp;&nbsp;&nbsp; Paint &nbsp;
      </Button>
      </span>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      </div>
             
        </div> */}
        <Items />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Material;
