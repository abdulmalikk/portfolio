import Link from 'next/link';
import { withRouter } from 'next/router';
import styles from '../styles/Navbar.module.scss';

const Navbar = ({ router }) => {
  const navs = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Tentang', href: '/about' },
    { name: 'Kontak', href: '/contact' }
  ];
  return (
    <nav className={styles['nav']}>
      <ul className={styles['nav-links-wrapper']}>
        { navs.map((nav, i) => (
          <li className={styles['nav-link']}>
            <Link key={i} href={nav.href}><a className={router.pathname === nav.href ? styles['active-link'] : ''}>{nav.name}</a></Link>
          </li>
        )) }
      </ul>
    </nav>
  );
}

export default withRouter(Navbar);
