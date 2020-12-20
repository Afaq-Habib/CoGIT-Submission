import React, { Component } from "react";
import { Container, TextField, Button, Grid, Select, MenuItem, InputLabel, TextareaAutosize } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>&nbsp;&nbsp;Get In Touch</h2>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <Container>
                <Grid>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <TextField
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <TextField
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <TextareaAutosize
                      name="message"
                      rowsMax= {4}
                      id="message"
                      className="form-control"
                      multiline
                      rows="4"
                      placeholder="Message"
                      required
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <Button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </Button>
                </form>
                </Grid>
            </Container>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <FacebookIcon fontSize="large"/>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <TwitterIcon fontSize="large"/>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <YouTubeIcon fontSize="large"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 CoGIT. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
