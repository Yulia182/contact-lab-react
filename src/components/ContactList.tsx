import Contact from "../models/Contacts";
import ContactCard from "./ContactCard";
import "./ContactList.css";

interface Props {
  list: Contact[];
}
// we need interface here because param can only be object and we had an arr
const ContactList = (props: Props) => {
  return (
    <ul className="ContactList">
      {props.list
        // sorting by last name
        .sort((a, b) => (a.lastName < b.lastName ? -1 : 1))
        .map((contact) => {
          return (
            <ContactCard
              key={contact.phoneNumber}
              firstName={contact.firstName}
              lastName={contact.lastName}
              phoneNumber={contact.phoneNumber}
              isFavorite={contact.isFavorite}
            />
          );
        })}
    </ul>
  );
};

export default ContactList;
