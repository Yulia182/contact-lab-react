import "./ContactForm.css";

const ContactForm = () => {
  return (
    <form className="ContactForm">
      <div className="inputsToBeFilled">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
        />
        <label htmlFor="phoneNumber">Phone number:</label>
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone number"
        />
      </div>
      <div className="toSubmit">
        <div className="checkboxDiv">
          <label htmlFor="isFavorite">Set as Favorite?</label>
          <input type="checkbox" name="isFavorite" id="isFavorite" />
        </div>
        <button>Add Contact</button>
      </div>
    </form>
  );
};

export default ContactForm;
