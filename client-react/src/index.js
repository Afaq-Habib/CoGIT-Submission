import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App.jsx';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import Activate from './screens/Activate.jsx';
import Private from './screens/Private.jsx';
import Admin from './screens/Admin.jsx';
import ForgetPassword from './screens/ForgetPassword.jsx';
import ResetPassword from './screens/ResetPassword.jsx';
import { Provider } from "react-redux";
import store from "./store";
import Homepage from "./components/homepage/homepage"
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import 'react-toastify/dist/ReactToastify.css';
import Main from './components/production/Main';
import Survey from './components/survey/survey';
import Options from './components/Home Architecture/start';
import BasicTable from './components/Payment/Display'
import Material from './components/Building Material/index'
import Container from './components/Architect Profiling/Container'
// import Start from './components/Home Architecture/start'
// import Payment from './components/Payment/Display'

// redirect = () => {
//   window.location.href = 'http://localhost:8080/auth/login';
//   // maybe can add spinner while loading
//   return null;
// }

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" >
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Homepage} />
      {/* render={ props => <Homepage {...props}/>} */}
      <Route path='/login' render={props => <Login {...props} />} />
      <Route path='/register' render={props => <Register {...props} />} />
      <Switch>
        {/* <Route path="/start"  component={Start} /> */}
        <PrivateRoute path="/main" component={Main} />
        <Route path="/payment" component={BasicTable} />
        <Route path="/material" component={Material} />
        <Route path="/architect" component={Container} />
        <Route path='/users/password/forget' render={props => <ForgetPassword {...props} />} />
        <Route path='/users/password/reset/:token' render={props => <ResetPassword {...props} />} />
        <Route path='/users/activate/:token' render={props => <Activate {...props} />} />
        <PrivateRoute path="/private" component={Private} />
        <AdminRoute path="/admin" component={Admin} />
        <PrivateRoute path="/survey" component={Survey} />
        <PrivateRoute path="/home-architecture" component={Options} />
        <Route path="/planner" >
          {() => { window.location.href = 'http://localhost:9000/'; }}
        </Route>

      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
