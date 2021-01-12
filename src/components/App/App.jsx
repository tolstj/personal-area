import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Auth from './Auth/Auth';
import Contacts from './Contacts/Contacts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
    };
  }

  render() {
    return (
      <Switch>
        <Route path="/auth">
          {this.state.isAuth &&
            <Redirect to="/" />
          }
          <Auth />
        </Route>
        <Route path="/">
          {!this.state.isAuth &&
            <Redirect to="/auth" />
          }
          <Contacts />
        </Route>
      </Switch>
    );
  }
}

export default App;
