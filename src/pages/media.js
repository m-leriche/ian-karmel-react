import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import useContentful from "../useContentful.js";
import styles from "../styles/Media.module.css";
import MailchimpForm from "../components/MailChimpForm/MailChimpForm.js";
import '../styles/globals.css';
import Footer from "../components/Footer/Footer.js";

function Media() {
  const [releases, setReleases] = useState([]);
  const [media, setMedia] = useState([]);
  const { getData } = useContentful();

  useEffect(() => {
    getData(['media', 'releases']).then((response) => {
      const mediaItems = response.items.filter(item => item.fields.hasOwnProperty('platform'));
      setMedia(mediaItems);
      const releaseItems = response.items.filter(item => item.fields.hasOwnProperty('type'));
      setReleases(releaseItems);
    })
  }, [getData, media, releases])

  return (
    <div>
      <Navbar />
      <div className={`${styles.titleContainer}`}>
        <h1>Media</h1>
      </div>
      <div className={styles.releases}>
        <div className={`${styles.releaseContainer} fadeIn`}>
          {releases.map((item, i) => {
            return (
              <div key={i} className={styles.release}>
                <a href={item.fields.url} target="_blank" rel="noopener noreferrer">
                  <img src={item.fields.image.fields.file.url} alt={item.fields.name} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
      <div className={`${styles.titleContainer} fadeIn`}>
        <h2>Videos</h2>
      </div>
      <div className={styles.videoGallery}>
      {media.map((item, i) => {
        if (item.fields.platform === 'youtube') {
          return (
            <div className={styles.video} key={i}>
              <iframe
                title={item.fields.name}
                width="560"
                height="315"
                src={item.fields.url}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              >
              </iframe>
            </div>
          );
        } else if (item.fields.platform === 'vimeo') {
          return (
            <div className={styles.video} key={i}>
              <iframe
                src={item.fields.url}
                title={item.fields.name}
                width="560"
                height="315"
                allow="autoplay; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          )
        }
      })}
      </div>
      <MailchimpForm />
      <Footer />
    </div>
  );
}

export default Media;
