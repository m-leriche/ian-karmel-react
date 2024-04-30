// import favicon from "../public/favicon.ico";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { theme } from '../theme.js';
import useContentful from "../useContentful.js";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar.js";
// import BookCircle from "../components/BookCircle/BookCircle.js";
import TourDatesComponent from "../components/TourDatesComponent/TourDatesComponent.js";
import Footer from "../components/Footer/Footer.js";
import MailchimpForm from "../components/MailChimpForm/MailChimpForm.js";
import '../styles/globals.css';

export default function Home() {
  const [tourDates, setTourDates] = useState([]);
  const [heroImage, setHeroImage] = useState(null);
  const { getData } = useContentful();

  useEffect(() => {
    getData(['tourDates', 'heroImage']).then((response) => {
      setHeroImage(response.includes.Asset[0].fields.file.url)
      const tourDates = response.items.filter(item => !item.fields.heroImage);
      setTourDates(tourDates)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className={`${styles.heroContainer} fadeIn`} style={{
          backgroundImage: heroImage ? `url(${heroImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: '50% 0%',
          backgroundRepeat: 'no-repeat',
          height: '100vh'
      }}>
        <div className={`${styles.socials} fadeIn`}>
          <a className={styles.social} href="https://www.instagram.com/iankarmel/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/></svg>
          </a>
          <a className={styles.social} href="https://www.x.com/iankarmel/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/></svg>
          </a>
          <a className={styles.social} href="https://www.tiktok.com/@iankarmel" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M50,27 c-3.964,0-6.885-1.09-9-2.695V38.5C41,44.841,35.841,50,29.5,50S18,44.841,18,38.5S23.159,27,29.5,27h2v5h-2 c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5s6.5-2.916,6.5-6.5V14h5c0.018,1.323,0.533,8,9,8V27z"/></svg>
          </a>
          <a className={styles.social} href="https://www.youtube.com/results?search_query=%23iankarmel" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="71.412064" height="50" x="0" y="0" version="1.1" viewBox="0 0 71 50">
              <g id="g5" transform="scale(.58824)">
                <path id="path7" fill="#000" fillOpacity="1" d="M118.9 13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7 0 60.7 0 60.7 0s-38 0-47.5 2.5C8.1 3.9 3.9 8.1 2.5 13.3 0 22.8 0 42.5 0 42.5s0 19.8 2.5 29.2C3.9 76.9 8 81 13.2 82.4 22.8 85 60.7 85 60.7 85s38 0 47.5-2.5c5.2-1.4 9.3-5.5 10.7-10.7 2.5-9.5 2.5-29.2 2.5-29.2s.1-19.8-2.5-29.3z"/>
                <path id="polygon9" fill="#c9b36e" d="M80.2 42.5 48.6 24.3v36.4z"/>
              </g>
            </svg>
          </a>
        </div>
        {/* <BookCircle /> */}
        <div className={styles.bookCta}>
          <a
            href="https://bookshop.org/p/books/t-shirt-swim-club-the-struggle-stretch-marks-and-solitude-of-being-fat-in-a-world-made-for-thin-people-ian-karmel/20601105?ean=9780593580929"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src="../../images/tshirtswimclub.jpg" alt="Order T Shirt Swim Club" />
          </a>
        </div>
      </div>
      <MailchimpForm />
      <TourDatesComponent tourDates={tourDates}/>
      <Footer />
    </ThemeProvider>
  );
}
