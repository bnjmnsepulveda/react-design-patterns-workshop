import React from 'react';
import './App.css';
import TabPanel from './workshop/components/TabPanel';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import DarkThemeProvider from './workshop/providers/DarkThemeProvider';



function App() {

  return (
    <div className="App">
      <DarkThemeProvider>
        <Container maxWidth="md">
          <Paper sx={{ margin: 10 }}>
            <TabPanel />
          </Paper>
        </Container>
      </DarkThemeProvider>
    </div>
  );
}

export default App;
