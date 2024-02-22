import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>
      <Link href="/">
        Your News App
      </Link>
    </div>
    <ul className={styles.navLinks}>
      <li>
        <Link href="/category/world">
         World
        </Link>
      </li>
      <li>
        <Link href="/category/technology">
          Technology
        </Link>
      </li>
      <li>
        <Link href="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
