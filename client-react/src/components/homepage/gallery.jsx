import { ImportantDevices } from "@material-ui/icons";
import React, { Component } from "react";
import ModalImage from "react-modal-image";

const style = {
    maxHeight: '150px !Important'
}

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>
              Some of the pictures of our partners wonderful work are as follow
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <ModalImage
                      smallSrcSet="https://lh3.googleusercontent.com/proxy/ZdVC31xzkpY0Lyim5K9_ovUNiAAA88r8AywAUHPbZ1zZnFbtsBrBRJLJGjXH2Tv8T0-ndrux-7QtivdVmQ2WVcI0sFgYlWEceqWWBAIzDpa5p_8aRix0TYpFGSOp2aDqCBo=s0-d"
                      large="https://lh3.googleusercontent.com/proxy/ZdVC31xzkpY0Lyim5K9_ovUNiAAA88r8AywAUHPbZ1zZnFbtsBrBRJLJGjXH2Tv8T0-ndrux-7QtivdVmQ2WVcI0sFgYlWEceqWWBAIzDpa5p_8aRix0TYpFGSOp2aDqCBo=s0-d"
                      hideDownload={true}
                      hideZoom={true}
                      className= {style}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <ModalImage
                      smallSrcSet="https://i.pinimg.com/originals/e2/78/8f/e2788fd28e035281f3bee53c4181d5e0.jpg"
                      large="https://i.pinimg.com/originals/e2/78/8f/e2788fd28e035281f3bee53c4181d5e0.jpg"
                    
                      hideDownload={true}
                      hideZoom={true}
                      className= {style}
                    />
                    {" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <ModalImage
                      smallSrcSet="https://www.technocrazed.com/wp-content/uploads/2015/12/Home-Wallpaper-22.jpg"
                      large="https://www.technocrazed.com/wp-content/uploads/2015/12/Home-Wallpaper-22.jpg"
                    
                      hideDownload={true}
                      hideZoom={true}
                      className= {style}
                    />
                   {" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <ModalImage
                      smallSrcSet="https://lh4.googleusercontent.com/proxy/USKoIuAc3DEkWaNsDLdL3By6IglA0VznMniab1nQRi5PjFVWXfW67nTyS3otFl2MNmUrFDzV1a7QQQYuHYoXkPacKX58GRlshJ7HV_djJyGEeY4ScVmmm-BI9RqXnHeH=s0-d"
                      large="https://lh4.googleusercontent.com/proxy/USKoIuAc3DEkWaNsDLdL3By6IglA0VznMniab1nQRi5PjFVWXfW67nTyS3otFl2MNmUrFDzV1a7QQQYuHYoXkPacKX58GRlshJ7HV_djJyGEeY4ScVmmm-BI9RqXnHeH=s0-d"
                    
                      hideDownload={true}
                      hideZoom={true}
                      className= {style}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <ModalImage
                      smallSrcSet="https://www.technocrazed.com/wp-content/uploads/2015/12/Home-Wallpaper-35.jpg"
                      large="https://www.technocrazed.com/wp-content/uploads/2015/12/Home-Wallpaper-35.jpg"
                    
                      hideDownload={true}
                      hideZoom={true}
                      className= {style}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <ModalImage
                      smallSrcSet="https://i.pinimg.com/originals/2e/49/8e/2e498e0478178da99d160b184030c7c7.jpg"
                      large="https://i.pinimg.com/originals/2e/49/8e/2e498e0478178da99d160b184030c7c7.jpg"
                    
                      hideDownload={true}
                      hideZoom={true}
                      className= {style}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
{/* <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <ModalImage
                      smallSrcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWfkm2oRMymcNsen31EoMNfrTGn8jkoqL6w&usqp=CAU"
                      large="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWfkm2oRMymcNsen31EoMNfrTGn8jkoqL6w&usqp=CAU"
                      hideDownload={true}
                      hideZoom={true}
                      className= {style}
                    />{" "}
                  </div>
                </div>
              </div> */}

              

              // <div className="col-sm-6 col-md-4 col-lg-4">
              //   <div className="portfolio-item">
              //     <div className="hover-bg">
              //       {" "}
              //       <ModalImage
              //         smallSrcSet="https://www.pixelstalk.net/wp-content/uploads/images1/Room-home-luxury-style-modern-interior-backgrounds-1920x1080.jpg"
              //         large="https://www.pixelstalk.net/wp-content/uploads/images1/Room-home-luxury-style-modern-interior-backgrounds-1920x1080.jpg"
                    
              //         hideDownload={true}
              //         hideZoom={true}
              //         className= {style}
              //       />{" "}
              //     </div>
              //   </div>
              // </div>
              // <div className="col-sm-6 col-md-4 col-lg-4">
              //   <div className="portfolio-item">
              //     <div className="hover-bg">
              //       {" "}
              //       <ModalImage
              //         smallSrcSet="https://get.wallhere.com/photo/1920x1080-px-cabin-house-landscape-modern-mountain-simple-1105859.jpg"
              //         large="https://get.wallhere.com/photo/1920x1080-px-cabin-house-landscape-modern-mountain-simple-1105859.jpg"
                    
              //         hideDownload={true}
              //         hideZoom={true}
              //         className= {style}
              //       />{" "}
              //     </div>
              //   </div>
              // </div>


                    // <a
                    //   href="img/portfolio/09-large.jpg"
                    //   title="Project Title"
                    //   data-lightbox-gallery="gallery1"
                    // >
                    //   <div className="hover-text">
                    //     <h4></h4>
                    //   </div>
                    //   <img
                    //     src="img/portfolio/09-small.jpg"
                    //     className="img-responsive"
                    //     alt="Project Title"
                    //   />{" "}
                    // </a>