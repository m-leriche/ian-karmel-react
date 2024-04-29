import { createClient } from "contentful";
import Navbar from "../components/Navbar/Navbar.js";
import TourDatesComponent from "../components/TourDatesComponent/TourDatesComponent.js";
import MailchimpForm from "../components/MailChimpForm/MailChimpForm.js";
// import HeadInfo from "../components/HeadInfo/HeadInfo.js";
import styles from "../styles/TourDatesComponent.module.css";
import Footer from "../components/Footer/Footer.js";

function TourDatesPage({ tourDates }) {
  return (
    <div>
      {/* <HeadInfo /> */}
      <Navbar />
      <div className={`${styles.titleContainer}`}>
        <h1>Shows</h1>
      </div>
      <TourDatesComponent tourDates={tourDates} />
      <MailchimpForm />
      <Footer />
    </div>
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
      tourDates: data.items.filter(
        (item) => item.sys.contentType.sys.id === "tourDates"
      )
    },
    revalidate: 1,
  };
}

export default TourDatesPage;

