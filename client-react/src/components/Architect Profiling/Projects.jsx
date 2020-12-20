import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const a = ["https://i.pinimg.com/736x/95/bd/10/95bd108e922889727d4a1946200c1281--electrical-plan-electrical-symbols.jpg?b=t","https://www.roomsketcher.com/wp-content/uploads/2017/11/RoomSketcher-More-Options-2D-Floor-Plan-Black-White.jpg","https://www.fivesquid.com/pics/t2/1452451836-49287-2-1.jpg"]
var images = a.map(function(a) { return (<div>
<img src= {a} rounded className='item-container'/>          
<span className="text-container">News from top sites around the world.</span>
</div>
); });
export default class Projects extends Component {
  render() {
    return (
      <Wrapper>
        <div className="projects-container">
          <div className='parent-container' style={{paddingTop: 20}}>
            <span style={{color:"black"}}>Upload more work:</span>
            <Button style = {{color: "#FF2A27", fontWeight: "bold", fontSize:14}}>Click Here</Button>
            <div className='m-container'>
                {images}
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  .projects-container {
    display: flex;
    align-items: center;    

    .parent-container{
      height: 87vh;
      overflow-y: auto;
      padding: 0 70px 0 50px;
      padding-bottom: 100px !important;

      .m-container {
        display: grid;
        grid-template-columns: repeat(2, 50% [col-start]);
        grid-row-gap: 50px;
        grid-column-gap: 40px;
        padding: 5% 0;

      .item-container {
        background-position: top left;
          background-size: cover;
          background-repeat: 'no-repeat';
        height: 400px;
        max-height: 400px;
        width: 100%;
        border: 1px solid #eee;
        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.05),
          0 2px 7px 0 rgba(72, 22, 66, 0.05);
        &:hover {
          box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.1),
            0 2px 7px 0 rgba(72, 22, 66, 0.1);
        }

        .anImg {
          background-position: top left;
          background-size: cover;
          background-repeat: 'no-repeat';
          width: 100%;
          height: 100%;
        }

        .text-container {
          display: flex;
          flex-direction: column;
          height: 35%;
          justify-content: center;
          align-items: center;

          > span:nth-child(1) {
            font-weight: bold;
            font-size: 13px;
            color: #1c699b;
            font-family: 'Poppins', sans-serif;
          }

          > span:nth-child(2) {
            font-size: 13px;
            margin: 10px 0;
          }

          > div:nth-child(3) {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            > span:nth-child(1) {
              margin-right: 5px;
              font-weight: bold;
            }
          }

          > span:nth-child(4) {
            font-size: 13px;
            margin-top: 10px;
            color: #f44e91;
            cursor: default;
            font-weight: bold;
            font-family: 'Poppins', sans-serif;
          }
        }
      }

    }    

  }
  @media (max-width: 600px) {
    .parent-container{
      padding: 0 15px 0 25px !important;
      padding-bottom: 100px !important;
    }
    .m-container {
      grid-template-columns: repeat(1, 100% [col-start]) !important;      
    }
  }
`
