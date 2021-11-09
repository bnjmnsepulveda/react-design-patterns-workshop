import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabPanel from './workshop/components/TabPanel';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <TabPanel />
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
