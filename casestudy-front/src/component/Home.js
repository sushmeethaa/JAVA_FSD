import React, { useState, useEffect } from 'react';
import { Accordion, Icon, Loader, Segment } from 'semantic-ui-react';
import './css/Home.css';
import Carousal from "./Carousal";
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <Segment basic textAlign="center" style={{ minHeight: '50vh' }}>
          <Loader active inline="centered" size="large">
            Loading...
          </Loader>
        </Segment>
      ) : (
        <>
          <h1>Welcome to Amazecare Hospital</h1>
          <p>Your health is our priority. We offer a range of medical services to ensure your well-being.</p>
          <Accordion styled fluid>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={handleClick}
            >
              <Icon name='dropdown' />
              24/7 Emergency Services
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>Our emergency services are available 24/7 to handle any medical emergencies with a dedicated team of doctors and nurses.</p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={handleClick}
            >
              <Icon name='dropdown' />
              Outpatient Services
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>Our outpatient services offer routine checkups, consultations, and follow-up visits without the need for hospital admission.</p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={handleClick}
            >
              <Icon name='dropdown' />
              Inpatient Care
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>Our inpatient care provides comprehensive treatment and 24-hour monitoring for patients admitted to the hospital.</p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={handleClick}
            >
              <Icon name='dropdown' />
              Specialized Consultations
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              <p>We offer specialized consultations with expert doctors in various fields, ensuring you receive the best care.</p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 4}
              index={4}
              onClick={handleClick}
            >
            <Icon name='dropdown' />
              Surgical Services
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
              <p>Our surgical services include a variety of procedures performed by experienced surgeons using advanced technology.</p>
            </Accordion.Content>
          </Accordion>

          {/* Additional Content Section */}
          <div className="additional-content">
            <h2>Our Mission</h2>
            <p>At Amazecare Hospital, our mission is to provide compassionate, accessible, high-quality, cost-effective healthcare to the communities we serve.</p>

            <h2>Patient Testimonials</h2>
            <p>"The care I received at Amazecare was exceptional. The staff was attentive, and the doctors were incredibly knowledgeable!" - Jane Doe</p>
            <p>"I had a wonderful experience during my stay. I felt cared for and supported throughout my recovery." - John Smith</p>
          </div>
        </>
      )}
      
      <div className="crsl zoom-in">
        <Carousal />
      </div>
    </div>
  );
}
export default Home;
