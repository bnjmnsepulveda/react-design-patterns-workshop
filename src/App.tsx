import React from 'react';
import logo from './logo.svg';
import './App.css';
import TabPanel from './workshop/components/TabPanel';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Paper sx={{ margin: 10 }}>
            <TabPanel />
          </Paper>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
