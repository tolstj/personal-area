import React from 'react';
import styles from './Auth.module.css';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e, field) => {
    this.setState({[field]: e.target.value});
  }

  login = (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.props.auth(email, password);
    this.setState({email: '', password: ''});
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.Auth}>
          <h1>Вход</h1>
          <span className={styles.errMsg}>{this.props.errMsg}</span>
          <form
            className={styles.form}
            onSubmit={this.login}
          >
            <label
              className="label"
              htmlFor="email"
            >
              Почта
          </label>
            <input
              className={styles.input}
              name="email"
              type="email"
              autoComplete="off"
              value={this.state.email}
              onChange={(e) => this.handleChange(e, 'email')}
            />
            <label
              className="label"
              htmlFor="password"
            >
              Пароль
            </label>
            <input
              className={styles.input}
              name="password"
              type="password"
              autoComplete="off"
              value={this.state.password}
              onChange={(e) => this.handleChange(e, 'password')}
            />
            {this.props.authMessage}
            <button
              className={styles.button}
              type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
