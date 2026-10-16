import Link from "next/link";
import styles from "@/styles/Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Головна" },
  { href: "/platforms", label: "Платформи" },
  { href: "/server-time", label: "Час сервера" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          Cloud Platforms Demo
        </Link>
        <ul className={styles.list}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}