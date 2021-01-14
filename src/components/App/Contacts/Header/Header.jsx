import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <h1>Контакты</h1>
          <Link
            to="/"
            className={styles.logout}
            onClick={this.props.logout}
          >
            Выйти
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
