import React from 'react';
import styles from './Contact.module.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.contact.name,
      tel: this.props.contact.tel,
      editMode: {
        name: false,
        tel: false,
      },
      removeMode: false,
    };
  }

  enableEditMode = (fieldType) => {
    this.setState((state) => ({
      editMode: {
        ...state.editMode,
        [fieldType]: true,
      },
    }));
  }

  disableEditMode = (fieldType) => {
    this.setState((state) => ({
      editMode: {
        ...state.editMode,
        [fieldType]: false,
      },
    }));
    this.props.changeContactField(this.props.contact.id, {
      name: this.state.name,
      tel: this.state.tel,
    });
  }

  handleChange = (e, fieldType) => {
    this.setState({
      [fieldType]: e.target.value,
    });
  }

  enableRemoveMode = () => {
    this.setState({ removeMode: true });
  }

  disableRemoveMode = () => {
    this.setState({ removeMode: false });
  }

  render() {
    // Remove mode ENABLED +++
    if (this.state.removeMode) {
      return (
        <li
          className={styles.contact}
        >
          <span className={styles.removeHeader}>
            Удалить {this.props.contact.name}?
          </span>
          <button
            className={styles.buttonAgree}
            onClick={() => this.props.removeContact(this.props.contact.id)}
          >
            Да
          </button>
          <button
            className={styles.buttonRefuse}
            onClick={this.disableRemoveMode}
          >
            Нет
          </button>
        </li>
      );
      // Remove mode DISABLED ---
    } else {
      return (
        <li
          className={styles.contact}
        >
          {!this.state.editMode.name && // Name
            <div
              className={styles.name}
              onDoubleClick={() => this.enableEditMode('name')}
            >
              {this.props.contact.name}
            </div>
          }
          {this.state.editMode.name && // Name editing
            <div className={styles.field}>
              <label
                className="label"
                htmlFor="name"
              >
                Имя
            </label>
              <input
                name="name"
                type="text"
                autoComplete="off"
                autoFocus
                onBlur={() => this.disableEditMode('name')}
                onChange={(e) => this.handleChange(e, 'name')}
                value={this.state.name}
                maxLength="26"
              />
            </div>
          }
          {!this.state.editMode.tel && // Telephone
            <div
              className={styles.tel}
              onDoubleClick={() => this.enableEditMode('tel')}
            >
              {this.props.contact.tel}
            </div>
          }
          {this.state.editMode.tel && // Telephone editing
            <div className={styles.field}>
              <label
                className="label"
                htmlFor="tel"
              >
                Телефон
            </label>
              <input
                name="tel"
                type="tel"
                autoComplete="off"
                autoFocus
                onBlur={() => this.disableEditMode('tel')}
                onChange={(e) => this.handleChange(e, 'tel')}
                value={this.state.tel}
                maxLength="16"
              />
            </div>
          }
          <button
            className={styles.button}
            onClick={this.enableRemoveMode}
          >
            x
        </button>
        </li>
      );
    }
  }
}

export default Contact;
