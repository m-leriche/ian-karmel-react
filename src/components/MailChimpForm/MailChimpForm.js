import React, { useEffect, useState } from 'react';
import styles from '../../styles/MailchimpForm.module.css';

const MailchimpForm = () => {
  const placeholder = 'Enter your email';
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    script.type = 'text/javascript';
    script.onload = () => {
      window.fnames = new Array();
      window.ftypes = new Array();
      window.fnames[0] = 'EMAIL';
      window.ftypes[0] = 'email';
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`${styles.emailListContainer} fadeIn`} id="mc_embed_signup">
      <h3>Subscribe</h3>
      <p>Sign up to receive updates on shows, podcasts, and more!</p>
      <form
        action="https://iankarmel.us18.list-manage.com/subscribe/post?u=1c13d50a5330d7b159910d430&amp;id=6325c01749&amp;f_id=00ec74e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className={`${styles.mailChimpForm} validate`}
        target="_blank"
      >
        <input
          type="email"
          className={`${styles.emailInput} required email`}
          id="mce-EMAIL"
          name="EMAIL"
          placeholder={placeholder}
          value={email}
          onChange={handleEmailChange}
          maxLength="100"
          required
        />
        <input
          type="submit"
          name="subscribe"
          id="mc-embedded-subscribe"
          className={`${styles.submitButton} button`}
          value="Subscribe"
        />
        <div aria-hidden="true" className={styles.hiddenAria}>
          <input
            type="text"
            className={styles.hiddenAria}
            name="b_1c13d50a5330d7b159910d430_6325c01749"
            tabIndex="-1"
            value=""
            readOnly={true}
          />
        </div>
      </form>
      <div id="mce-responses" className="clear foot">
        <div className={`${styles.response} response fadeIn`} id="mce-error-response"></div>
        <div className={`${styles.response} response fadeIn`} id="mce-success-response"></div>
      </div>
    </div>
  );
};

export default MailchimpForm;
