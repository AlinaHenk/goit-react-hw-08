import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={css.homePage}>
      <h1 className={css.greeting}>Welcome to Contacts Book page</h1>
    </div>
  );
}
