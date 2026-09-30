"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Menu, X, User } from "lucide-react";
import { logout } from "@/services/auth";
import { useRouter } from "@/i18n/navigation";
import type { AuthMe } from "@/types/auth";
import logo from "@/assets/logos/Header_Logo.svg";
import Image from "next/image";
import cartIcon from "@/assets/icons/cart.svg";
import styles from "./Navbar.module.css";

type NavbarClientProps = {
  user: AuthMe | null;
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const Right_Nav_Links = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/signup" },
  { label: "Cart", href: "/cart", icon: cartIcon },
];

export default function NavbarClient({ user }: NavbarClientProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    setSigningOut(true);
    await logout();
    router.push("/login");
    router.refresh();
  }

  return (
    <header
      className={`${styles.navbar} sticky top-0 z-50 border-b border-blue-700`}
    >
      <div className="container">
        <div className="flex h-[120px] items-center justify-between">
          {/* Brand */}
          <Link href="/" className="tracking-tight">
            <Image
              src={logo}
              alt="ByteSpace"
              className="w-auto h-full"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white hover:text-gray-900 transition-colors font-satoshi"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth — desktop */}
          <div className="hidden md:flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-6">
              {Right_Nav_Links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-white hover:text-gray-900 transition-colors font-satoshi"
                >
                  {link.icon ? (
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={20}
                      height={20}
                    />
                  ) : (
                    link.label
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-3 border-t border-blue-400/30 bg-[#073fe0] px-4 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white hover:text-[#d4fb20]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 border-t border-blue-400/30 pt-3">
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-sm font-medium text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  <User className="w-4 h-4" />
                  {user.name ?? user.email}
                </Link>
                <button
                  onClick={handleLogout}
                  disabled={signingOut}
                  className="btn-primary text-left"
                >
                  {signingOut ? "Signing out…" : "Sign Out"}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="btn-primary text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
