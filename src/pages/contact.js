import { createClient } from "contentful";
import { ThemeProvider } from "styled-components";
// import HeadInfo from "../components/HeadInfo/HeadInfo.js";
import { theme } from "../theme.js";
import styles from "../styles/Contact.module.css";
import Navbar from "../components/Navbar/Navbar.js";

export default function Contact({ Contacts }) {
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
            {Contacts && Contacts.map((contact, i) => {
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

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries();

  return {
    props: {
      Contacts: data.items.filter(
        (item) => item.sys.contentType.sys.id === "contacts"
      )
    },
    revalidate: 1,
  };
}
