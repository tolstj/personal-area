import React from 'react';
import styles from './Toolbar.module.css';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: 0,
      infoMessages: [
        'Режим редактирования - double click по контакту',
        'Сохранить изменения - клик снаружи поля ввода',
      ],
    };
  }

  componentDidMount() {
    const timerID = setInterval(() => {
      this.state.currentMessage === this.state.infoMessages.length - 1
      ? this.setState({currentMessage: 0})
      : this.setState((state) => ({currentMessage: state.currentMessage + 1}));
    }, 5000);
    this.setState({timerID});
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  render() {
    return (
      <div className={styles.toolbar}>
        <div className={styles.wrapper}>
          <button
            className={styles.button}
            onClick={this.addContact}
          >
            +
            </button>
          <p className={styles.shortInfo}>
            {this.state.infoMessages[this.state.currentMessage]}
          </p>
          <form className={styles.search}>
            <label
              className="label"
              htmlFor="search"
            >
              Поиск
            </label>
            <input
              className={styles.input}
              name="search"
              type="search"
              autoComplete="off"
            />
            <button
              className={styles.button}
              type="submit"
            >
              {'>'}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Toolbar;
