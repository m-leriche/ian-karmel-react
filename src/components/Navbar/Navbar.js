import { useState, useRef } from "react";
import { useOnClickOutside } from "../../hooks.js";
// import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import Burger from "../Burger/Burger.js"
import Menu from "../Menu/Menu.js"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const hamburgerRef = useRef();
  useOnClickOutside(hamburgerRef, () => setOpen(false));

  return (
    <div className={`${styles.navbar}`}>
      <p>nav</p>
      {/* <div className={styles.home}>
        <Link legacyBehavior={true} href="/">
          <a>Ian Karmel</a>
        </Link>
      </div>
      <div ref={hamburgerRef} className={styles.hamburgerMenu}>
          <Menu open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </div>
      <div className={styles.links}>
        <Link legacyBehavior={true} href="https://headgum.com/all-fantasy-everything">
        <a target="_blank" rel="noopener noreferrer" className={styles.link}>
          All Fantasy Everything
        </a>
      </Link>
        <Link legacyBehavior={true} href="/tourdates">
          <a className={styles.link}>Shows</a>
        </Link>
        <Link legacyBehavior={true} href="/about">
          <a className={styles.link}>About</a>
        </Link>
        <Link legacyBehavior={true} href="/media">
          <a className={styles.link}>Media</a>
        </Link>
        <Link legacyBehavior={true} href="/contact">
          <a className={styles.link}>Contact</a>
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;
