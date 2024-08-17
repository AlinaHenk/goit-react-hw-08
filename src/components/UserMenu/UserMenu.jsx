import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
// import action from "../../redux/contacts/slice";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(resetContacts());
    dispatch(logOut());
  };

  return (
    <div>
      <p>{`Welcome, ${user.email} `}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
