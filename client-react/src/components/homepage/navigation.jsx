import React, { Component } from "react";
import {Button,ButtonGroup,AppBar,Toolbar,IconButton,Typography} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import dialogProps from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import AuthProviderList from '../AuthProviderList';
import validate from "validate.js";
import constraints from "../../data/constraints";
import { ToastContainer, toast } from 'react-toastify';
import logo from "../../assests/CoGIT1.png"
import axios from 'axios';
import { connect } from "react-redux";
import {loginUser,registerUser,loggedUser }from '../../redux/actions/authActions';
import PropTypes from "prop-types";
import HideOnScroll from "./HideOnScroll";

import {
  Tooltip,
  Hidden,
  Grid,
  Divider,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";


const useStyles = (theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },

  icon: {
    marginRight: theme.spacing(0.5),
  },

  divider: {
    margin: "auto",
  },

  grid: {
    marginBottom: theme.spacing(2),
  },
  title: {
    padding: theme.spacing(1),
    
  }
});


export class Navigation extends Component{
    
  constructor(props){
    super(props)
    this.state = {
      openSU: false,
      openSN: false,
      performingActionSN: false,
      emailAddressSN: "",
      passwordSN: "",
        performingActionSU: false,
        nameSU: "",
        emailAddressSU: "",
        passwordSU: "",
        passwordSUConfirmation: "",
        errorsSU: null,
    }

    this.handleSignInOpen = this.handleSignInOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)

  }
  componentDidMount() {

    if (this.props.auth.isAuthenticated) {
        this.props.history.push("/main");
    }
}

componentWillReceiveProps(nextProps) {
  alert(nextProps.auth.isAuthenticated)
  if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/main"); // push user to dashboard when they login
  }
  if (nextProps.errors) {
      this.setState({
          errors: nextProps.errors,
      });
  }
}



  getSignInButton = () => {
    const { emailAddressSN, passwordSN, performingActionSN} = this.state;

    // if (emailAddressSN && !passwordSN) {
    //   return (
    //     <Button
    //       color="primary"
    //       // disabled={!emailAddressSN || performingActionSN}
    //       variant="contained"
    //       onClick={() => this.sendSignInLinkToEmail()}
    //     >
    //       Send sign-in link
    //     </Button>
    //   );
    // }

    return (
      <Button
        color="primary"
        // disabled={!emailAddressSN || performingActionSN}
        variant="contained"
        onClick={() => this.signIn()}
      >
        Sign in
      </Button>
    );
  };
  

handleSignInOpen=()=>{
  this.setState({openSN: true})
}
handleSignUpOpen=()=>{
  this.setState({openSU: true})
}

handleClose = () => {
  this.setState({openSN: false, openSU: false})
};


signInDialog = (classes) => {
  return(
    <Dialog
    fullWidth
    maxWidth="sm"
    disableBackdropClick={this.state.performingActionSN}
    disableEscapeKeyDown={this.state.performingActionSN}
    {...dialogProps}
    onKeyPress={this.handleKeyPress}
    onExited={this.handleExited}
    open={this.state.openSN}
    onClose={this.handleClose}
  >

<DialogTitle disableTypography>
      <Typography variant="h6">Sign in to your account</Typography>

      <Tooltip title="Close">
        <IconButton
          className={classes.closeButton}
          // disabled={this.state.performingActionSN}
          onClick={dialogProps.onClose}
        >
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </DialogTitle>

    <DialogContent>
        <Grid container direction="row">
          <Grid item xs={4}>
            <AuthProviderList
              performingActionSN={this.performingActionSN}
              onAuthProviderClick={this.signInWithAuthProvider}
            />
          </Grid>

          <Grid item xs={1}>
            <Divider className={classes.divider} orientation="vertical" />
          </Grid>

          <Grid item xs={7}>
            <Grid container direction="column" spacing={2}>
              <Grid item xs>
                <TextField
                  autoComplete="email"
                   disabled={this.state.performingActionSN}
                  fullWidth
                  label="E-mail address"
                  placeholder="afaqhabib49@gmail.com"
                  required
                  type="email"
                  variant="outlined"
                  InputLabelProps={{ required: false }}
                  value={this.state.emailAddressSN}
                  onChange={this.handleemailAddressSNChange}
                />
              </Grid>

              <Grid item xs>
                <TextField
                  autoComplete="current-passwordSN"
                  disabled={this.state.performingActionSN}
                  fullWidth
                  label="Password"
                  placeholder="Password Paa"
                  required
                  type="password"
                  value={this.state.passwordSN}
                  variant="outlined"
                  InputLabelProps={{ required: false }}
                  onChange={this.handlepasswordSNChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </DialogContent>

    <DialogActions>
      <Button
        color="primary"
        disabled={!this.state.emailAddressSN || this.state.performingActionSN}
        variant="outlined"
        onClick={this.resetpasswordSN}
      >
        Reset passwordSN
      </Button>

      {this.getSignInButton()}
    </DialogActions>

</Dialog>

  )
}

// Sign Up



handleKeyPressSU = (event) => {
  const {
    nameSU,
    emailAddressSU,
    passwordSU,
    passwordSUConfirmation,
  } = this.state;

  if (
    !nameSU ||
    !emailAddressSU ||
    !passwordSU ||
    !passwordSUConfirmation
  ) {
    return;
  }

  const key = event.key;

  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
    return;
  }

  if (key === "Enter") {
    this.signUp();
  }
};

handleExited = () => {
  const initialStateSU = {
    performingActionSU: false,
    nameSU: "",
    emailAddressSU: "",
    passwordSU: "",
    passwordSUConfirmation: "",
    errorsSU: null,
  };

  this.setState(initialStateSU);
};

handleemailAddressSUChange = (event) => {
  const emailAddressSU = event.target.value;

  this.setState({
    emailAddressSU: emailAddressSU,
  });
};

handlenameSUChange = (event) => {
  const nameSU = event.target.value;

  this.setState({
    nameSU: nameSU,
  });
};

handleemailAddressSNChange = (event) => {
  const emailAddressSN = event.target.value;

  this.setState({
    emailAddressSN: emailAddressSN,
  });
};

// handleemailAddressSUConfirmationChange = (event) => {
//   const emailAddressSUConfirmation = event.target.value;

//   this.setState({
//     emailAddressSUConfirmation: emailAddressSUConfirmation,
//   });
// };

handlepasswordSUChange = (event) => {
  const passwordSU = event.target.value;

  this.setState({
    passwordSU: passwordSU,
  });
};

handlepasswordSNChange = (event) => {
  const passwordSN = event.target.value;

  this.setState({
    passwordSN: passwordSN,
  });
};

handlepasswordSUConfirmationChange = (event) => {
  const passwordSUConfirmation = event.target.value;

  this.setState({
    passwordSUConfirmation: passwordSUConfirmation,
  });
};

signIn = e => {
  const { emailAddressSN, passwordSN } = this.state;
  const userData = {
    email: emailAddressSN,
    password: passwordSN,
  }


  this.props.loginUser(userData);
};

informParent = response => {
  //this.props.history.push('/dashboard');
  console.log("INFORM PARENT" + response)
  this.props.loggedUser(response.data)
};

signUp = e => {
  
  const { nameSU, emailAddressSU, passwordSU } = this.state;
  const userData = {
    name: nameSU,
    email: emailAddressSU,
    password: passwordSU,
  }


  this.props.registerUser(userData);
};



signUpDialog = (classes) => {

  const {
    nameSU,
    emailAddressSU,
    passwordSU,
    passwordSUConfirmation,
    performingActionSU
  } = this.state;

  const errorsSU = validate(
    {
      nameSU: nameSU,
      emailAddressSU: emailAddressSU,
      passwordSU: passwordSU,
      passwordSUConfirmation: passwordSUConfirmation,
    },
    {
      nameSU: constraints.username,
      emailAddressSU: constraints.emailAddressSU,
      passwordSU: constraints.passwordSU,
      passwordSUConfirmation: constraints.passwordSUConfirmation,
    }
  );

  
  

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      disableBackdropClick={performingActionSU}
      disableEscapeKeyDown={performingActionSU}
      {...dialogProps}
      onKeyPress={this.handleKeyPressSU}
      onExited={this.handleExited}
      open={this.state.openSU}
      onClose={this.handleClose}
    >
      <DialogTitle disableTypography>
        <Typography variant="h6">Sign up for an account</Typography>

        <Tooltip title="Close">
          <IconButton
            className={classes.closeButton}
            disabled={performingActionSU}
            onClick={dialogProps.onClose}
          >
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </DialogTitle>

      
        <DialogContent>
          <Grid container direction="row">
            <Grid item xs={4}>
              <AuthProviderList
                performingActionSU={performingActionSU}
                onAuthProviderClick={this.signInWithAuthProvider}
              />
            </Grid>

            <Grid item xs={1}>
              <Divider className={classes.divider} orientation="vertical" />
            </Grid>

            <Grid item xs={7}>
              <Grid container direction="column" spacing={2}>
                
              <Grid item xs>
                  <TextField
                    autoComplete="name"
                    disabled={performingActionSU}
                    error={!!(errorsSU && errorsSU.nameSU)}
                    fullWidth
                    // helperText={
                    //   errorsSU && errorsSU.nameSU
                    //     ? errorsSU.nameSU[0]
                    //     : ""
                    // }
                    label="Name"
                    placeholder="Afaq Habib"
                    required
                    type="text"
                    value={nameSU}
                    variant="outlined"
                    InputLabelProps={{ required: false }}
                    onChange={this.handlenameSUChange}
                  />
                </Grid>
                
                
                <Grid item xs>
                  <TextField
                    autoComplete="email"
                    disabled={performingActionSU}
                    error={!!(errorsSU && errorsSU.emailAddressSU)}
                    fullWidth
                    helperText={
                      errorsSU && errorsSU.emailAddressSU
                        ? errorsSU.emailAddressSU[0]
                        : ""
                    }
                    label="E-mail address"
                    placeholder="afaqhabib49@gmail.com"
                    required
                    type="email"
                    value={emailAddressSU}
                    variant="outlined"
                    InputLabelProps={{ required: false }}
                    onChange={this.handleemailAddressSUChange}
                  />
                </Grid>

                <Grid item xs>
                  <TextField
                    autoComplete="new-passwordSU"
                    disabled={performingActionSU}
                    error={!!(errorsSU && errorsSU.passwordSU)}
                    fullWidth
                    helperText={
                      errorsSU && errorsSU.passwordSU ? errorsSU.passwordSU[0] : ""
                    }
                    label="Password"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    required
                    type="password"
                    value={passwordSU}
                    variant="outlined"
                    InputLabelProps={{ required: false }}
                    onChange={this.handlepasswordSUChange}
                  />
                </Grid>

                <Grid item xs>
                  <TextField
                    autoComplete="passwordSU"
                    disabled={performingActionSU}
                    error={!!(errorsSU && errorsSU.passwordSUConfirmation)}
                    fullWidth
                    helperText={
                      errorsSU && errorsSU.passwordSUConfirmation
                        ? errorsSU.passwordSUConfirmation[0]
                        : ""
                    }
                    label="Password confirmation"
                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                    required
                    type="password"
                    value={passwordSUConfirmation}
                    variant="outlined"
                    InputLabelProps={{ required: false }}
                    onChange={this.handlepasswordSUConfirmationChange}
                  />
                </Grid>
                <Grid item xs spacing={2}>
                <InputLabel id="label" style={{padding: '5px'}}>Role</InputLabel>
              <Select labelId="label" id="select" value="User">
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Architect">Architect</MenuItem>
                <MenuItem value="Designer">Designer</MenuItem>
                <MenuItem value="Supplier">Supplier</MenuItem>
                <MenuItem value="Contractor">Contractor</MenuItem>
              </Select>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      

      

      <DialogActions>
        <Button
          color="primary"
          disabled={
            !nameSU ||
            !emailAddressSU ||
            !passwordSU ||
            !passwordSUConfirmation ||
            performingActionSU
          }
          variant="contained"
          onClick={this.signUp}
        >
          Sign up
        </Button>
      </DialogActions>
    </Dialog>
  ); 
}

    render(){
      const {classes} = this.props;
    return (
      <>
      <ToastContainer/>
      <HideOnScroll threshold={550}>
      <AppBar style={{backgroundColor: "#505050"}}>
  <Toolbar>
  <img src={logo} alt="Logo" width="80" height="70"/>
  {/* <Typography variant="h3" className={classes.title}>
      CoGIT
    </Typography> */}
    
    <Typography style= {{marginLeft: "auto", color: "white"}} variant="h4" component="a" href="/login" className={classes.title}>
      Services 
    </Typography>&emsp;
    <Divider style={{backgroundColor: "gray", width: "0.5px"}} orientation="vertical" flexItem />
    &emsp;&emsp;
    <Typography style= {{color: "white"}} variant="h4" className={classes.title}>
      Gallery
    </Typography>
    &emsp;&emsp;
    <Divider style={{backgroundColor: "gray", width: "1px"}} orientation="vertical" flexItem />
    &emsp;
    <Typography style= {{color: "white"}} variant="h4" className={classes.title}>
      Testimonials
    </Typography>
    &emsp;
    <Divider style={{backgroundColor: "gray", width: "1px"}} orientation="vertical" flexItem />
    &emsp;&emsp;
    <Typography style= {{color: "white"}} variant="h4" className={classes.title}>
      Team
    </Typography>
    &emsp;&emsp;
    <Divider style={{backgroundColor: "gray", width: "1px"}} orientation="vertical" flexItem />
    &emsp;&emsp;
    <Typography style= {{color: "white"}} variant="h4" className={classes.title}>
      Contact
    </Typography>
    &emsp;&emsp;
    <Divider style={{backgroundColor: "gray", width: "1px"}} orientation="vertical" flexItem />
    &emsp;&emsp;
    <Typography style= {{color: "white"}} variant="h4" className={classes.title}>
      About
    </Typography>
    &emsp;&emsp;
    <Divider style={{backgroundColor: "gray", width: "1px"}} orientation="vertical" flexItem />
    &emsp;&emsp;
    {/* <Button color="inherit">Login</Button> */}
    <ButtonGroup>
      <Button size= 'large' style={{borderTopLeftRadius: 20, borderBottomLeftRadius: 20, fontSize: '1.4rem', fontWeight: "bold", color: 'white', textAlign: 'center'}} className="btn-custom" onClick={this.handleSignInOpen} >Login </Button>
      <Button size="large" style={{borderTopRightRadius: 20, borderBottomRightRadius: 20, fontSize: '1.4rem', fontWeight: "bold",  color: 'white', textAlign: 'center'}} className="btn-custom" onClick={this.handleSignUpOpen} >Sign Up </Button>
    </ButtonGroup>
  </Toolbar>
</AppBar>
</HideOnScroll>
      {this.signInDialog(classes)}
      {this.signUpDialog(classes)}
      </>
    );
  }
  }

  // SignInDialog.propTypes = {
  //   classes: PropTypes.object.isRequired,
  
  //   dialogProps: PropTypes.object.isRequired,
  
  //   openSnackbar: PropTypes.func.isRequired,
  // };
  



  Navigation.propTypes = {
    loginUser: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
  })
  
  const mapDispatchToProps = {
    loginUser,registerUser
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Navigation));