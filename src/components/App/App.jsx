import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Auth from './Auth/Auth';
import Contacts from './Contacts/Contacts';
import './App.css'
import auth from '../../api/auth';

// admin@mail.com password

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: true,
    };
  }

  componentDidMount() {
    auth('admin@mail.com', 'password')
      .then(res => console.log(res.data));
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
