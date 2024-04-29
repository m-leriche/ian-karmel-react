import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
// import HeadInfo from "../components/HeadInfo/HeadInfo.js";
import { theme } from "../theme.js";
import useContentful from "../useContentful.js";
import styles from "../styles/Contact.module.css";
import Navbar from "../components/Navbar/Navbar.js";
import '../styles/globals.css';

export default function Contact() {
  const [contacts, setContacts] = useState([]);
  const { getData } = useContentful();

  useEffect(() => {
    getData(['contacts']).then((response) => {
      setContacts(response.items)
    })
  }, [contacts])

  return (
    <ThemeProvider theme={theme}>
      {/* <HeadInfo /> */}
      <Navbar />
      <div>
        <div className={`${styles.titleContainer}`}>
          <h1>Booking</h1>
        </div>
        <div className={`${styles.container} fadeIn`}>
          <div className={styles.contacts}>
            {contacts && contacts.map((contact, i) => {
              return (
                <div key={i} className={styles.contact}>
                  <p>{contact.fields.name}</p>
                  <a href={`mailto:${contact.fields.email}`}>{contact.fields.email}</a>
                  <p>{contact.fields.company}</p>
                  <p>{contact.fields.phone}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
