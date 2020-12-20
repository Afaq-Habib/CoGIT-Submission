import React, { Component } from "react";
import Aqil from "../../assests/aqil.jpeg";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            {/* <p>
              
            </p> */}
          </div>
          <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}

                    {/* className="team-img" */}
                    <img src={d.img} width="240px" height="240px" alt="..." />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;