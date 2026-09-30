import Image, { type StaticImageData } from "next/image";
import frame1 from "@/assets/icons/frame1.svg";
import frame2 from "@/assets/icons/frame2.svg";
import frame3 from "@/assets/icons/frame3.svg";
import frame4 from "@/assets/icons/Frame 4 (3).svg";
import frame5 from "@/assets/icons/Frame 4 (4).svg";
import frame6 from "@/assets/icons/Frame 4 (5).svg";
import styles from "@/app/page.module.css";
import figmaImage from "@/assets/images/course/1-learn-figma.jpg";
import digitalImage from "@/assets/images/course/2-build-digital.jpg";
import dataImage from "@/assets/images/course/3-big-data.jpg";
import productivityImage from "@/assets/images/course/4-productivity.jpg";
import moneyImage from "@/assets/images/course/5-money-manage.jpg";
import startupImage from "@/assets/images/course/6-startup.jpg";
import progressImage from "@/assets/images/testimonial/progress.png";
import revenueImage from "@/assets/images/testimonial/revenue.png";
import stat from "@/assets/icons/stat.svg";
import profile from "@/assets/icons/profiles.svg";

type Course = {
  image: StaticImageData;
  title: string;
};

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const COURSES: Course[] = [
  { image: figmaImage, title: "Learn Figma from Basic" },
  { image: digitalImage, title: "Build Digital Asset" },
  { image: dataImage, title: "the Power of Big Data" },
  { image: productivityImage, title: "Balancing Productivity and Life" },
  { image: moneyImage, title: "Mastering Money Management" },
  { image: startupImage, title: "From Idea to Startup Success" },
];

const LEARNING_PATHS: { label: string; icon: StaticImageData }[] = [
  { label: "Design", icon: frame1 },
  { label: "Development", icon: frame2 },
  { label: "IT & Software", icon: frame3 },
  { label: "Business", icon: frame4 },
  { label: "Marketing", icon: frame5 },
  { label: "Photography", icon: frame6 },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <article className={styles.courseDiscoveryCard}>
      <div className={styles.courseImageWrap}>
        <Image
          src={course.image}
          alt={course.title}
          className={styles.courseImage}
        />
        <div className={styles.courseImageStats} aria-label="Course statistics">
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
          <span>59 Comments</span>
        </div>
      </div>
      <div className={styles.courseCardBody}>
        <div className={styles.courseTitleRow}>
          <h3>{course.title}</h3>
          <span className={styles.courseRating}>
            4.5 <span aria-hidden="true">★</span>
          </span>
        </div>
        <p className={styles.courseCreator}>
          by <span className="text-[#003BE2]">purepearl studio</span>
        </p>
        <div className={styles.courseMetaRow}>
          <span>
            <Image
              src={stat}
              alt=""
              className={styles.levelIcon}
              aria-hidden="true"
            />
          </span>
          <span className={styles.studentAvatars} aria-label="26 plus students">
            <Image
              src={profile}
              alt=""
              className={styles.studentProfileIcon}
              aria-hidden="true"
            />
          </span>
        </div>
        <p className={styles.coursePrice}>
          $25<span>/lifetime</span>
        </p>
      </div>
    </article>
  );
}

export default function CourseDiscovery() {
  return (
    <section
      className={styles.courseDiscovery}
      aria-labelledby="course-discovery-title"
    >
      <div className="container mx-auto max-w-7xl px-8">
        <header className={styles.courseDiscoveryHeader}>
          <h2 className="">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p>
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different
            <br className="hidden md:block" /> fields, from technology to the
            arts, and make a difference in your career and life.
          </p>
        </header>

        <nav className={styles.courseCategories} aria-label="Course categories">
          {CATEGORIES.map((category, index) => (
            <button
              key={category}
              type="button"
              className={
                index === 0
                  ? styles.courseCategoryActive
                  : styles.courseCategory
              }
            >
              {category}
            </button>
          ))}
          <button type="button" className={styles.moreCategory}>
            + More
          </button>
        </nav>

        <div className={styles.courseGrid}>
          {COURSES.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        <section
          className={styles.learningPaths}
          aria-labelledby="learning-paths-title"
        >
          <header className={styles.learningPathsHeader}>
            <h2 id="learning-paths-title">
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p>
              At Bytespace, we believe in empowering individuals through
              knowledge. Our diverse range of courses spans various
              <br className="hidden md:block" /> fields, ensuring there&apos;s
              something for everyone. Unleash your potential and explore our
              carefully curated categories.
            </p>
          </header>

          <div className={styles.learningPathGrid}>
            {LEARNING_PATHS.map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                className={styles.learningPathCard}
              >
                <span className={styles.learningPathIcon} aria-hidden="true">
                  <Image src={icon} alt=""  />
                </span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </section>

        <section
          className={styles.growthSection}
          aria-label="Grow with Bytespace"
        >
          <div className={styles.growthRow}>
            <div className={styles.growthCopy}>
              <h2>
                Your Path to Professional
                <br className="hidden sm:block" /> Growth Starts Here!
              </h2>
              <p>
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
              <div className={styles.growthStats}>
                <div>
                  <strong>12K</strong>
                  <span>Students</span>
                </div>
                <div>
                  <strong>70+</strong>
                  <span>Courses</span>
                </div>
                <div>
                  <strong>16</strong>
                  <span>Creators</span>
                </div>
              </div>
            </div>
            <Image
              src={progressImage}
              alt="Student learning with course progress dashboard"
              className={styles.growthImage}
            />
          </div>

          <div className={`${styles.growthRow} ${styles.growthRowReverse}`}>
            <Image
              src={revenueImage}
              alt="Creator managing courses and revenue"
              className={styles.growthImage}
            />
            <div className={styles.growthCopy}>
              <h2>
                Create &amp; Manage
                <br className="hidden sm:block" /> Courses Easily.
              </h2>
              <p>
                ByteSpace supports individuals or entities in the creation,
                publication, and administration of educational courses.
              </p>
              <ul className={styles.growthChecklist}>
                <li>Share Your Expertise</li>
                <li>Monetize Your Passion</li>
                <li>Flexibility and Autonomy</li>
                <li>Build a Community</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
