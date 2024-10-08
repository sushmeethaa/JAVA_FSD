// component/Footer.js
import React from 'react';
import { Segment, Container, Grid, List, Header, Icon } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment
      inverted
      vertical
      style={{ backgroundColor: '#194471', padding: '2em 0em', marginTop: '2em' }} // Set custom background color
    >
      <Container>
        <Grid divided inverted stackable centered> {/* Centered Grid */}
          <Grid.Row>
            <Grid.Column width={8} textAlign='center'> {/* Center the content in the column */}
              <Header inverted as='h4' content='Contact Information' />
              <p>
                If you have any questions or need assistance, please don't hesitate to contact us:
              </p>
              <List horizontal style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Center and align the list */}
                <List.Item style={{ margin: '0 1em', display: 'flex', alignItems: 'center' }}>
                  <Icon name='mail' style={{ marginRight: '0.5em' }} /> {/* Adjust icon margin */}
                  <span>Email: <a href="mailto:support@amazecarehospital.com" style={{ color: 'white' }}>support@amazecarehospital.com</a></span>
                </List.Item>
                <List.Item style={{ margin: '0 1em', display: 'flex', alignItems: 'center' }}>
                  <Icon name='phone' style={{ marginRight: '0.5em' }} /> {/* Adjust icon margin */}
                  <span>Phone: (123) 456-7890</span>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};
export default Footer;
