import Image from "next/image";
import { Link } from "@/i18n/navigation";
import styles from "@/app/page.module.css";
import sarahImage from "@/assets/images/testimonial/sarah.png";
import jamesImage from "@/assets/images/testimonial/james.png";
import inspiredImage from "@/assets/images/testimonial/inspired.png";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: sarahImage,
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: jamesImage,
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: inspiredImage,
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function Testimonials() {
  return (
    <section
      className={styles.testimonials}
      aria-labelledby="testimonials-title"
    >
      <section
        className={styles.creatorCta}
        aria-labelledby="creator-cta-title"
      >
        <span
          className={`${styles.creatorShape} ${styles.creatorShapeLimeLeft}`}
          aria-hidden="true"
        />
        <span
          className={`${styles.creatorShape} ${styles.creatorShapeWhiteLeft}`}
          aria-hidden="true"
        />
        <span
          className={`${styles.creatorShape} ${styles.creatorShapeLimeRight}`}
          aria-hidden="true"
        />
        <span
          className={`${styles.creatorShape} ${styles.creatorShapeWhiteRight}`}
          aria-hidden="true"
        />
        <div className={styles.creatorCtaContent}>
          <h2 id="creator-cta-title">
            Unlock Your Potential as a<br />
            Creator with ByteSpace
          </h2>
          <p>
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <Link href="/creator" className={styles.creatorCtaButton}>
            Join as Creator
          </Link>
        </div>
      </section>
      <div className="container mx-auto max-w-7xl px-4">
        <div className={styles.testimonialsIntro}>
          <h2 id="testimonials-title">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p>
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className={styles.testimonialGrid}>
          {TESTIMONIALS.map((testimonial) => (
            <article key={testimonial.name} className={styles.testimonialCard}>
              <Image
                src={testimonial.image}
                alt={`${testimonial.name} portrait`}
                className={styles.testimonialAvatar}
              />
              <h3>{testimonial.name}</h3>
              <p className={styles.testimonialRole}>{testimonial.role}</p>
              <p className={styles.testimonialQuote}>{testimonial.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
