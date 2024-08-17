import { useEffect } from "react";
import Contact from "../../components/Contact/Contact";
import css from "./ContactsPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.group}>
      <ContactForm />
      <SearchBox />
      {isLoading && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
}
