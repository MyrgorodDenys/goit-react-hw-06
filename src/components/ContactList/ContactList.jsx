import { nanoid } from "@reduxjs/toolkit";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const search = useSelector(selectNameFilter);

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <>
      {contacts.length !== 0 ? (
        <ul className={css.listContacts}>
          {filterContacts.map((contact) => (
            <li className={css.itemContact} key={nanoid()}>
              <Contact data={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.infoText}>Your phonebook is empty 😢</p>
      )}

      {!filterContacts.length && contacts.length !== 0 && (
        <p className={css.infoText}>No contacts found 😢</p>
      )}
    </>
  );
};

export default ContactList;
