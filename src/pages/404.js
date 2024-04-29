import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { theme } from "../theme.js";
import styles from "../styles/Page404.module.css";

export default function Page404() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();


  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((currentCountdown) => {
        if (currentCountdown <= 1) {
          clearInterval(interval);
          navigate('/');
        }
        return currentCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h3>Woops!</h3>
          </div>
            <p>Hold up while we return you to the home page in {countdown} second{countdown > 1 ? 's' : ''}{countdown === 0 ? 's' : ''}.</p>
        </div>
    </ThemeProvider>
  );
}
