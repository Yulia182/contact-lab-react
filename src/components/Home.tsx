import { useState } from "react";
import "./Home.css";
import Contact from "../models/Contacts";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const Home = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      firstName: "Veronica",
      lastName: "Villalobos",
      phoneNumber: 9127779238,
      isFavorite: false,
    },
    {
      firstName: "Ernie",
      lastName: "Hernandez",
      phoneNumber: 9152479599,
      isFavorite: true,
    },
    {
      firstName: "Catherine",
      lastName: "K",
      phoneNumber: 9128544549,
      isFavorite: true,
    },
  ]);
  return (
    <main className="Home">
      <ContactForm />
      <ContactList list={contacts} />
    </main>
  );
};

export default Home;
