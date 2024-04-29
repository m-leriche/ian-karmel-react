import { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks.js";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.css";
import Burger from "./../Burger/Burger.js";
import Menu from "./../Menu/Menu.js"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const hamburgerRef = useRef();
  useOnClickOutside(hamburgerRef, () => setOpen(false));

  return (
    <div className={`${styles.navbar}`}>
      <div className={styles.home}>
        <Link to="/">Ian Karmel</Link>
      </div>
      <div ref={hamburgerRef} className={styles.hamburgerMenu}>
          <Menu open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </div>
      <div className={styles.links}>
        <a
          href="https://headgum.com/all-fantasy-everything"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          All Fantasy Everything
        </a>
        <Link to="/tourdates" className={styles.link}>Shows</Link>
        <Link to="/about" className={styles.link}>About</Link>
        <Link to="/media" className={styles.link}>Media</Link>
        <Link to="/contact" className={styles.link}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
