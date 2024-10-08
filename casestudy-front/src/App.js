import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./component/Nav";
import MainContent from './component/SRoutes';
import Footer from './component/Footer'; // Import the Footer component
import './App.css';
import { Grid, Segment, Header } from 'semantic-ui-react';
import logo2 from './asset/logo2.png';
const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundImage:
            "-webkit-linear-gradient(rgb(33, 133, 208), rgba(33, 133, 208,0.5) 16em, transparent 0%, transparent 0%)"
        }}
        className="App"
      >
        <Nav />
        <Grid centered stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={16} textAlign="center">
              <Header
                inverted
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                as='h1'
              >
                <img
                  src={logo2}
                  alt="Hospital Logo"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                Amazecare Hospitals
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={16}>
              <Segment>
                <MainContent />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* Add Footer component */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
