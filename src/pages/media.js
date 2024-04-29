import { createClient } from "contentful";
// import HeadInfo from "../components/HeadInfo/HeadInfo.js";
import Navbar from "../components/Navbar/Navbar.js";
import styles from "../styles/Media.module.css";
import MailchimpForm from "../components/MailChimpForm/MailChimpForm.js";
// import Link from "next/link";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer.js";

function Media({ media, releases }) {
  return (
    <div>
      {/* <HeadInfo /> */}
      <Navbar />
      <div className={`${styles.titleContainer}`}>
        <h1>Media</h1>
      </div>
      <div className={styles.releases}>
        <div className={`${styles.releaseContainer} fadeIn`}>
          {releases.map((item, i) => {
            return (
              <div key={i} className={styles.release}>
                <Link legacyBehavior={true} href={item.fields.url}>
                  <a target="_blank" rel="noopener noreferrer">
                    <img src={item.fields.image.fields.file.url} alt={item.fields.name} />
                  </a>
                </Link>
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
                width="560"
                height="315"
                src={item.fields.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              >
              </iframe>
            </div>
          );
        } else if (item.fields.platform === 'vimeo') {
          return (
            <div className={styles.video} key={i}>
              <iframe src={item.fields.url} width="560" height="315" allow="autoplay; fullscreen; picture-in-picture"></iframe>
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

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries();

  return {
    props: {
      media: data.items.filter(
        (item) => item.sys.contentType.sys.id === "media"
      ),
      releases: data.items.filter(
        (item) => item.sys.contentType.sys.id === "releases"
      ),
    },
    revalidate: 1,
  };
}
