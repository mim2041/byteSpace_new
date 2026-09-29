import { Search } from "lucide-react";
import styles from "@/app/page.module.css";
import frame1 from "@/assets/icons/Frame.svg";
import Image from "next/image";
import cone1 from "@/assets/icons/Cone.svg";
import frame2 from "@/assets/icons/Frame (1).svg";
import cone2 from "@/assets/icons/Cone (1).svg";
import ellipse from "@/assets/icons/Ellipse 7.svg";
import img from "@/assets/icons/Image.svg";
import layout1 from "@/assets/icons/Auto Layout Vertical.svg";
import layout2 from "@/assets/icons/Auto Layout Vertical (1).svg";
import layout3 from "@/assets/icons/Auto Layout Vertical (2).svg";

const PARTNERS = [
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
];

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className="relative isolate overflow-hidden ">
          <div className={styles.heroGrid} aria-hidden="true" />

          <div
            className="absolute top-20 left-0 w-full h-full "
            aria-hidden="true"
          >
            <Image
              src={frame1}
              alt="Frame"
              className={styles.frame1}
              aria-hidden="true"
            />
          </div>
          <Image
            src={cone1}
            alt="Cone"
            className="absolute top-20 right-0"
            aria-hidden="true"
          />
          <Image
            src={frame2}
            alt="Frame"
            className="absolute top-1/2 left-40"
            aria-hidden="true"
          />
          <Image
            src={cone2}
            alt="Cone"
            className="absolute top-1/2 right-40"
            aria-hidden="true"
          />

          <div
            className={`container relative z-10 flex flex-col items-center px-4 pt-16 text-center sm:pt-20 ${styles.heroContent}`}
          >
            <div className="">
              <h1 className="text-4xl font-bold leading-[1.5]  text-white sm:text-5xl lg:text-[72px]">
                Get Access to Hundreds
                <br />
                Courses Available
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-xs leading-5 text-blue-100 sm:text-sm">
                Unlock your creativity, gain valuable knowledge, and grow your
                business with our wide range of courses.
              </p>
            </div>

            <form
              className="mt-12 flex w-full  items-center gap-1.5 rounded-full max-w-2xl relative"
              role="search"
            >
              <input
                type="search"
                placeholder="Course, Topic, creator"
                aria-label="Search courses"
                className="min-w-0 flex-1 bg-transparent px-10 text-xs text-gray-700 outline-none placeholder:text-gray-400 sm:text-sm bg-white py-3 rounded-full relative"
              />
              <Search
                className="ml-2 h-4 w-4 shrink-0 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              />
              <button
                type="submit"
                className="rounded-full bg-[#d4fb20] px-4 py-3 text-xs font-semibold text-blue-950 transition-transform hover:scale-105 sm:text-sm"
              >
                Search
              </button>
            </form>

            <div
              className={styles.heroVisual}
              aria-label="Course learning dashboard preview"
            >
              <Image
                src={ellipse}
                alt=""
                className={styles.heroEllipse}
                aria-hidden="true"
              />
              <Image
                src={img}
                alt="Student learning online"
                className={styles.heroLearner}
              />
              <Image
                src={layout2}
                alt="UI/UX Design course summary"
                className={styles.courseCard}
              />
              <Image
                src={layout1}
                alt="Learning progress: 55 percent"
                className={styles.progressAsset}
              />
              <Image
                src={layout3}
                alt="Happy students and course rating"
                className={styles.studentsCard}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.partnerStrip} aria-label="Trusted partners">
        <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 py-7 sm:justify-between sm:gap-x-4">
          {PARTNERS.map((partner, index) => (
            <div key={`${partner}-${index}`} className={styles.partner}>
              <span className={styles.partnerMark} aria-hidden="true">
                {index === 2 ? "⚡" : index === 3 ? "✣" : "◉"}
              </span>
              {partner}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
