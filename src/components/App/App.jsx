// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading, selectError } from "../../redux/contacts/selectors";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
// import { refreshUser } from "../redux/auth/operations";
// import { selectIsRefreshing } from "../redux/auth/selectors";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
}
// <div className={css.container}>
//   <h1>Phonebook</h1>
//   <ContactForm />
//   <SearchBox />
//   {isLoading && !error && <b>Request in progress...</b>}
//   <ContactList />
// </div>
