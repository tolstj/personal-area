import React from 'react';
import styles from './Contacts.module.css';
import Header from './Header/Header';
import Toolbar from './Toolbar/Toolbar';
import Contact from './Contact/Contact';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test@mail.ru',
      contacts: [
        {
          id: 1,
          name: 'Максим Гиря',
          tel: '88888888888',
        },
        {
          id: 2,
          name: 'Олег Ананасовый пирог',
          tel: '88888888888',
        },
        {
          id: 3,
          name: 'Мария Сергеевна',
          tel: '88888888888',
        },
        {
          id: 4,
          name: 'Варвара Большой Нос',
          tel: '88888888888',
        }
      ],
    };
  }

  render() {
    return (
      <>
        <Header email={this.state.email} />
        <Toolbar />
        <div className={styles.Contacts}>
          <div className={styles.wrapper}>
            <ul>
              {this.state.contacts.map((contact) => 
                <Contact contact={contact} key={contact.id} />
              )}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Contacts;
