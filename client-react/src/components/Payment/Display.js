import React, { Component } from 'react';
import '../production/Main.css';
import Header from '../production/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from '../production/theme';
import { Container, TextField, Button, Grid, InputLabel} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Payment from "./Payment";


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

class BasicTable extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  toggleNavigation() {
    this.setState({open: !this.state.open});
  }
  render() {
    
    function createData(name, amount) {
      return { name, amount };
    }
    
    const rows = [
      createData('Cement', 530),
      createData('Sand', 600),
      createData('Steel', 108000),
      createData('Glass', 550),
      createData('Wood', 6500),
      createData('Bricks', 12500),
      createData('Concrete', 50),
      createData('Stone', 50),
      createData('Plastic', 170),
      createData('Paint', 3700),
      createData('Designing', 30000),
      createData('Total', 162650),

    ];
    
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div>
          <Header
            title={'Building Material Marketplace'}
            openState={this.state.open}
            toggleNavigation={this.toggleNavigation}
          />
            <Container  style={{width:1100,marginLeft  : '15%', marginTop:30}}>
            <span style={{fontSize:30,marginLeft:450, color:"#FF2A27"}}>Payment Details</span>
            <TableContainer style={{marginTop:30}} component={Paper}>
              <Table style={{minWidth: 350, minHeight: 350, height:100, justifyContent:"center"}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style= {{textAlign:"center",fontWeight: "bold", fontSize:16}}>Services</TableCell>
                    <TableCell align="center" style= {{textAlign:"center",fontWeight: "bold",fontSize:16}}>Amount</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell style={{textAlign:"center", fontSize:12}} component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell style={{textAlign:"center", fontSize:12}} align="center">{row.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            
            <Button onClick= {<Payment />} variant="contained" size="large" color="primary" style={{fontSize:12,backgroundColor:"#FF2A27",padding:20,marginLeft: 956, marginTop: "50px", marginBottom: "30px"}}>
                  Pay Bill
                </Button>
            </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default BasicTable;



