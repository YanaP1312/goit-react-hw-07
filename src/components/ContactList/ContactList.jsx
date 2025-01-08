import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectChangeFilter } from "../../redux/selectors";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectChangeFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.contactsList}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <p className={s.noMatches}>No matches found</p>
      )}
    </ul>
  );
}
