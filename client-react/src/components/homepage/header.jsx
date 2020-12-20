import React, { Component } from "react";
import {Button} from "@material-ui/core"
import { connect } from "react-redux";
import {loginUser }from '../../redux/actions/authActions';
import PropTypes from "prop-types";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  {/* <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p> */}
                  <Button size="large" style={{fontSize: '2rem', fontWeight: "bold"}} className="btn-custom" >Let's Start </Button>
                  {/* <Button size="large" style={{fontSize: '1.5rem', color: 'white'}} className="" href="" >Admin </Button> */}
                  {/* <a
                    href="/login"
                    className="btn btn-custom btn-lg page-scroll"
                    
                  >
                    Learn More
                  </a>{" "} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
})

const mapDispatchToProps = {
  loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
