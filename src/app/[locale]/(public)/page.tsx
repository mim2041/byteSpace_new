import { Link } from "@/i18n/navigation";
import styles from "@/app/page.module.css";
import Hero from "@/components/siteSettings/hero/Hero";
import CourseDiscovery from "@/components/siteSettings/courseDiscovery/CourseDiscovery";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Hero />
      <CourseDiscovery />

      <section className="sr-only">
        <h2>Explore ByteSpace courses</h2>
        <Link href="/courses">Browse all courses</Link>
      </section>
    </div>
  );
}
