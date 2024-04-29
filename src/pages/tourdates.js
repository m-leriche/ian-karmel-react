import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import TourDatesComponent from "../components/TourDatesComponent/TourDatesComponent.js";
import MailchimpForm from "../components/MailChimpForm/MailChimpForm.js";
import useContentful from "../useContentful.js";
import styles from "../styles/TourDatesComponent.module.css";
import '../styles/globals.css';
import Footer from "../components/Footer/Footer.js";

function TourDatesPage() {
  const [tourDates, setTourDates] = useState([]);
  const { getData } = useContentful();

  useEffect(() => {
    getData(['tourDates']).then((response) => {
      const tourDates = response.items
      setTourDates(tourDates)
    })
  }, [tourDates])

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

export default TourDatesPage;

