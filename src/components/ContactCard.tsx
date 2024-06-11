import Contact from "../models/Contacts";
import "./ContactCard.css";

const ContactCard = (props: Contact) => {
  return (
    <li className="ContactCard">
      <div className="Name">
        {props.firstName} {props.lastName}
      </div>
      <div>
        <p className="phoneNumber">
          {/* hyphenation with regex */}
          {props.phoneNumber
            .toString()
            .replace(/^(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
        </p>
        <p className="icons">
          {props.isFavorite ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
          <i className="fa-solid fa-trash-can"></i>
        </p>
      </div>
    </li>
  );
};

export default ContactCard;
