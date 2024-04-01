import { createContext, useContext } from "react";
import PropTypes from "prop-types";

export const ContactContex = createContext();

export const useContact = () => {
  const context = useContext(ContactContex);
  if (!context) throw new Error("There is no Icon Context");
  return context;
};
const SERVER_URL =
  import.meta.env.VITE_SERVER_URL || "http://localhost:5000/api";

export const ContactProvider = ({ children }) => {
  const SendEmail = async (data) => {
    const suit = await fetch(`${SERVER_URL}/sendemail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    });
    return suit;
  };

  ContactProvider.propTypes = {
    children: PropTypes.isRequired,
  };

  return (
    <ContactContex.Provider value={{ SendEmail }}>
      {children}
    </ContactContex.Provider>
  );
};
