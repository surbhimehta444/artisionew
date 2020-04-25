import React, { Component } from 'react';
import cookies from 'react-cookies';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Main from './Components/Main';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route 
            path = "/"
            render = {(props) => {
              let token = cookies.load('token')
              return token === undefined ? <Login {...props}/> : <Main {...props}/>
            }}
          />
        </Switch>
      </Router>
    )
  }
}

export default App;