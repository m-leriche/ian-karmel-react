import { useEffect, useState } from "react";
// import HeadInfo from "../components/HeadInfo/HeadInfo.js";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme.js";
import styles from "../styles/Page404.module.css";
// import { useRouter } from "next/router";

export default function Page404() {
  const [countdown, setCountdown] = useState(5);
  // const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((currentCountdown) => {
        if (currentCountdown <= 1) {
          clearInterval(interval);
          // router.push('/');
        }
        return currentCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <HeadInfo /> */}
        <div className={styles.container}>
          <div className={styles.title}>
            <h3>Woops!</h3>
          </div>
            <p>Hold up while we return you to the home page in {countdown} second{countdown > 1 ? 's' : ''}{countdown === 0 ? 's' : ''}.</p>
        </div>
    </ThemeProvider>
  );
}
