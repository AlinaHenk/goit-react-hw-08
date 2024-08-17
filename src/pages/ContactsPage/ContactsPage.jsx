import Contact from "../../components/Contact/Contact";
import css from "./ContactsPage.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const contactsInState = useSelector(selectFilteredContacts);

  return (
    <div className={css.group}>
      {contactsInState.map((contact) => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </div>
  );
}
