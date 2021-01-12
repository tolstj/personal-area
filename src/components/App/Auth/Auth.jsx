import React from 'react';
import styles from './Auth.module.css';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.Auth}>
          <h1>Вход</h1>
          <form className={styles.form}>
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
            />
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
