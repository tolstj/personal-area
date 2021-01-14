import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Auth from './Auth/Auth';
import Contacts from './Contacts/Contacts';
import './App.css'
import AuthService from '../../services/auth.service';

// admin@mail.com password

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      errMsg: '',
    };
  }

  componentDidMount() {
    AuthService.isAuth()
      .then((res) => {
        if (res.data.isAuth) {
          this.setState({isAuth: true, errMsg: ''});
        }
      })
      .catch(() => {
        // 'jwt expired'
        // 'Missing authorization header'
        this.setState({isAuth: false});
      });
  }

  auth = (email, password) => {
    AuthService.login(email, password)
      .then(() => {
        this.setState({isAuth: true, errMsg: ''});
      })
      .catch((err) => {
        let errMsg;
        if (err.response?.data) {
          errMsg = err.response.data;
        }
        // console.log(`DEBUG auth: ${errMsg}`);
        if (errMsg === 'Cannot find user') {
           this.setState({isAuth: false, errMsg: 'Почта не найдена.'});
        } else if (errMsg === 'Incorrect password') {
           this.setState({isAuth: false, errMsg: 'Пароль неверный.'});
        }
      });
  }

  logout = () => {
    AuthService.logout();
    this.setState({isAuth: false});
  }

  render() {
    return (
      <Switch>
        <Route path="/auth">
          {this.state.isAuth &&
            <Redirect to="/" />
          }
          <Auth
            auth={this.auth}
            errMsg={this.state.errMsg}
          />
        </Route>
        <Route path="/">
          {!this.state.isAuth &&
            <Redirect to="/auth" />
          }
          <Contacts logout={this.logout} />
        </Route>
      </Switch>
    );
  }
}

export default App;
