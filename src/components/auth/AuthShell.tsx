"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import art from "@/assets/images/auth/login-left.png";
import styles from "./AuthShell.module.css";

export default function AuthShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const signup = pathname.endsWith("/signup");

  return (
    <div className={styles.page}>
      <div className={styles.frame}>
        <div className={styles.brand} aria-label="ByteSpace">
          <span className={styles.brandMark} aria-hidden="true" />
          bytespace
        </div>
        <section className={styles.intro} aria-label="ByteSpace introduction">
          <p className={styles.eyebrow}>{signup ? "Sign up and come in" : "Sign in with ease"}</p>
          <p className={styles.description}>
            {signup
              ? "The registration process is straightforward, uncomplicated, and efficient, allowing you to sign up quickly, easily, and at no cost."
              : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."}
          </p>
        </section>
        <Image className={styles.art} src={art} alt="ByteSpace learning courses" priority />
        <main className={styles.formArea}>
          <div className={styles.formCard}>{children}</div>
        </main>
      </div>
    </div>
  );
}