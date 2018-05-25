import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import Main from '../../components/Main';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
      render() {
        return (
          <div className="App">
              <AppBar position="static" >
                  <Toolbar >
                      <Typography variant="title" color="inherit" style={{flex:1}} align="center">
                          TV Series
                      </Typography>
                  </Toolbar>
              </AppBar>
              <Main />

          </div>
        );
      }
}

export default App;
