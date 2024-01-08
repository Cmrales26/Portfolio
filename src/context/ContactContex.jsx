import { createContext, useContext } from "react";

export const ContactContex = createContext();

export const useContact = () => {
  const context = useContext(ContactContex);
  if (!context) throw new Error("There is no Icon Context");
  return context;
};
const SERVER_URL =
  import.meta.env.VITE_SERVER_URL || "http://localhost:5500/api";

export const ContactProvider = ({ children }) => {
  const SendEmail = async (data) => {
    const suit = await fetch(`${SERVER_URL}/sendemail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
      g,
    });
    return suit;
  };

  return (
    <ContactContex.Provider value={{ SendEmail }}>
      {children}
    </ContactContex.Provider>
  );
};
