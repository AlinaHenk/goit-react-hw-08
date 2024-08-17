import Contact from "../../components/Contact/Contact";
import css from "./ContactsPage.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactsPage() {
  const contactsInState = useSelector(selectFilteredContacts);

  return (
    <div className={css.group}>
      <ContactForm />
      <SearchBox />
      {contactsInState.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </div>
  );
}

// <div className={css.container}>
//   <h1>Phonebook</h1>
//   <ContactForm />
//   <SearchBox />
//   {isLoading && !error && <b>Request in progress...</b>}
//   <ContactList />
// </div>
