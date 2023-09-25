import Link from 'next/link';
import styles from "./ nav.module.css"

const Navbar = () => {
  return (
    
    <nav className={styles.navbar}>
      
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/signup">SignUp</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;