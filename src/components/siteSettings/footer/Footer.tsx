import { Link } from "@/i18n/navigation";
import Image from "next/image";
import logo from "@/assets/logos/Header_Logo.svg";
import styles from "./Footer.module.css";

const FOOTER_LINK_GROUPS = [
  {
    title: "Featured Courses",
    links: [
    { label: "Featured Categories", href: "/categories" },
    { label: "Business", href: "/categories/business" },
    { label: "IT", href: "/categories/it" },
    { label: "Design", href: "/categories/design" },
    ],
  },
  {
    title: "Development",
    links: [
    { label: "Marketing", href: "/categories/marketing" },
    { label: "Photography", href: "/categories/photography" },
    { label: "Finance", href: "/categories/finance" },
    { label: "Sport", href: "/categories/sport" },
    ],
  },
  {
    title: "Become a Creator",
    links: [
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerTop}>
          <div>
            <Image src={logo} alt="ByteSpace" className={styles.brand} />
            <p className={styles.newsletterDescription}>Stay Up to date with our latest features and releases by joining our newsletter.</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Enter your email" aria-label="Email address" />
              <button type="submit">Search</button>
            </form>
            <p className={styles.newsletterFinePrint}>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
          <nav className={styles.footerLinks} aria-label="Footer navigation">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title} className={styles.footerLinkGroup}>
                <h2>{group.title}</h2>
                {group.links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
              </div>
            ))}
          </nav>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; {year} ByteSpace. All rights reserved.</p>
          <nav className={styles.legalLinks} aria-label="Legal navigation">
            {LEGAL_LINKS.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
        </div>
      </div>
    </footer>
  );
}
