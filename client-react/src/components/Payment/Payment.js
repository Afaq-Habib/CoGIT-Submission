import React, { Component } from 'react';
import '../production/Main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../production/theme';
import { Container, TextField, Button, Grid, InputLabel} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Header from '../production/Header'


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

class PaymentForm extends Component {

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
        <Header
              title={'Building Material Marketplace'}
              openState={this.state.open}
              toggleNavigation={this.toggleNavigation}
            />
        <Container  style={{width:1100,marginLeft  : '15%', marginTop:30}}>
        <Typography style={{fontSize:30, color:"#FF2A27"}} variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <TextField required id="cardName" label="Name on card" fullWidth autoComplete="cc-name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveCard" value="yes" />}
              label="Remember credit card details for next time"
              fontSize="12"
            />
          </Grid>
          <Grid>
          <Button variant="contained" size="large" color="primary" style={{fontSize:16,backgroundColor:"#FF2A27",padding:15,marginLeft: 980, marginTop: "50px", marginBottom: "30px"}}>
                  Pay Now
          </Button>
          </Grid>
          
        </Grid>
        </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default PaymentForm;









