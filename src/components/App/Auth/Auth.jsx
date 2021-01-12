import styles from './Auth.module.css';

function Auth() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.Auth}>
        <h1>Вход</h1>
        <form className={styles.form}>
          <label
            className={styles.label}
            htmlFor="email"
          >
            Почта
          </label>
          <input
            className={styles.input}
            name="email"
            type="email"
            autocomplete="off"
          />
          <label
            className={styles.label}
            htmlFor="password"
          >
            Пароль
          </label>
          <input
            className={styles.input}
            name="password"
            type="password"
            autocomplete="off"
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

export default Auth;
