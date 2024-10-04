import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function Carousals() {
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
          src="https://healinghospital.co.in/wp-content/uploads/2021/07/Types_of_Doctors_1024x1024.jpeg"
          className="d-block w-100"
          alt="First slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>General Medicine</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src="https://d18jt1wktkj426.cloudfront.net/filer_public/7c/11/7c1188a1-380e-4826-86a9-97621bba66ad/pediatric_nurse_with_a_patient_1.jpg"
          className="d-block w-100"
          alt="Second slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>Pediatrics</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src="https://www.ambulance.nsw.gov.au/__data/assets/image/0006/552264/Calling-an-Ambulance.jpg"
          className="d-block w-100"
          alt="Third slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>Emergency Services</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src="https://advinhealthcare.com/wp-content/uploads/2022/12/Open-Heart-Surgery-1.jpg"
          className="d-block w-100"
          alt="Fourth slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>Surgery</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src="https://images.agoramedia.com/wte3.0/gcms/phases-of-labor-birth-2020-722x406.jpg"
          className="d-block w-100"
          alt="Fifth slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>Maternity and Obstetrics</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src="https://www.touchstoneimaging.com/wp-content/uploads/2022/03/CT_Heart_edit.jpg"
          className="d-block w-100"
          alt="Sixth slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>Diagnostics and Imaging</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src="https://domf5oio6qrcr.cloudfront.net/medialibrary/14637/b3e1d03e-4cb8-4f18-97a8-3fb7de097690.jpg"
          className="d-block w-100"
          alt="Seventh slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>Cardiology</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src="https://www.stcharleshealthcare.org/sites/default/files/Hero%20Images/Stroke/CTScan-hero.jpg"
          className="d-block w-100"
          alt="Eighth slide"
          style={carouselImgStyle}
        />
        <Carousel.Caption>
        <div style={overlayTextStyle}>And many more</div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Carousals;
