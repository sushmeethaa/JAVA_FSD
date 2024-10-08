import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function Carousal() {
  const carouselImgStyle = {
    filter: 'brightness(40%)',
    objectFit: 'cover',
    width: '100%',
    height: '65vh',
  };
  const overlayTextStyle = {
    position: 'absolute',
    top: '-500%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#F5F5F5',
    fontSize: '3rem',
    fontWeight: 'bold',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
    zIndex: '20',
    whiteSpace: 'nowrap',
  };

  return (
    <Carousel fade>
      <Carousel.Item  interval={1000}>
        <img
          src="https://www.stcharleshealthcare.org/sites/default/files/Hero%20Images/Stroke/CTScan-hero.jpg"
          className="d-block w-100"
          alt="First slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>CT scans</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src="https://advinhealthcare.com/wp-content/uploads/2022/12/Open-Heart-Surgery-1.jpg"
          className="d-block w-100"
          alt="Second slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>Surgeries</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src="https://www.touchstoneimaging.com/wp-content/uploads/2022/03/CT_Heart_edit.jpg"
          className="d-block w-100"
          alt="Third slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>X-rays</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src="https://grandjunctioneyecare.com/wp-content/uploads/sites/8/2022/01/eye-terms-and-conditions.jpg"
          className="d-block w-100"
          alt="Fourth slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>Eye care</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src="https://d18jt1wktkj426.cloudfront.net/filer_public/7c/11/7c1188a1-380e-4826-86a9-97621bba66ad/pediatric_nurse_with_a_patient_1.jpg"
          className="d-block w-100"
          alt="Fifth slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>And many more</div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Carousal;
