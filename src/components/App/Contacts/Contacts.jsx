import React from 'react';
import styles from './Contacts.module.css';
import Header from './Header/Header';
import Toolbar from './Toolbar/Toolbar';
import Contact from './Contact/Contact';
import ContactsService from '../../../services/contacts.service';
import rotateYourScreen from '../../../assets/rotate-smartphone.svg';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }

  componentDidMount() {
    ContactsService.getContacts()
      .then((res) => {
        const contacts = res.data;
        this.setState({ contacts });
      });
  }

  addContact = () => {
    ContactsService.addContact()
      .then((res) => {
        const newContact = res.data;
        this.setState((state) => ({
          contacts: [
            newContact,
            ...state.contacts,
          ],
        }));
      })
  }

  removeContact = (id) => {
    ContactsService.removeContact(id)
      .then(() => {
        this.setState((state) => ({
          contacts: [
            ...state.contacts.filter((contact) => contact.id !== id),
          ],
        }));
      })
  }

  changeContactField = (id, changing) => {
    ContactsService.changeContactField(id, changing)
      .then((res) => {
        const changedContact = res.data;
        this.setState((state) => ({
          contacts: [
            ...state.contacts.map((contact) => contact.id !== id ? contact : changedContact),
          ],
        }));
      });
  }

  searchContact = (query) => {
    ContactsService.searchContact(query)
      .then((res) => {
        this.setState({ contacts: res.data });
      });
  }

  render() {
    return (
      <>
        <div className={styles.phoneScreen}>
          <img src={rotateYourScreen} alt='Rotate your screen' />
        </div>
        <div className={styles.desktopScreen}>
          <Header
            logout={this.props.logout}
          />
          <Toolbar
            addContact={this.addContact}
            searchContact={this.searchContact}
          />
          <div className={styles.Contacts}>
            <div className={styles.wrapper}>
              <ul>
                {this.state.contacts.map((contact) =>
                  <Contact
                    contact={contact}
                    key={contact.id}
                    removeContact={this.removeContact}
                    changeContactField={this.changeContactField}
                  />
                )}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contacts;
