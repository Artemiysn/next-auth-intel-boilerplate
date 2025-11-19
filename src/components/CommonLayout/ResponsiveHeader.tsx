"use client";

import { useState } from "react";
import Link from "next/link";
import AuthButton from "./AuthButton";
import LangSwitcher from "./LangSwitcher";
import { LinkClass } from "../ui/Link";

// иконки скопированы откуда-то из интернета
// вынести в отдельный файл потом

const MenuIcon = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    ></path>
  </svg>
);

const CloseIcon = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

interface Props {
  lang: string;
  isLoggedIn: boolean;
  email: string | undefined;
  translations: {
    title: string;
    nav_home: string;
    nav_about: string;
    login: string;
    logout: string;
    switch: string;
    loading: string;
  };
}

export default function ResponsiveHeader({
  lang,
  isLoggedIn,
  email,
  translations,
}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const homePath = `/${lang}`;
  const aboutPath = `/${lang}/about`;

  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 p-4 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto flex gap-4 justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-800">
            {translations.title}
          </h1>
          <nav className="hidden lg:flex gap-4">
            <Link href={homePath} className={LinkClass}>
              {translations.nav_home}
            </Link>
            <Link href={aboutPath} className={LinkClass}>
              {translations.nav_about}
            </Link>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <AuthButton
            isLoggedIn={isLoggedIn}
            loginText={translations.login}
            logoutText={translations.logout}
            email={email}
            loadingText={translations.loading}
          />
          <LangSwitcher linkText={translations.switch} />
        </div>

        <button
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? CloseIcon : MenuIcon}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden mt-3 pt-3 border-t border-gray-300 bg-gray-50 p-4 rounded-b-lg shadow-lg"
        >
          <div className="flex flex-col gap-4">
            <Link
              href={homePath}
              className={LinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              {translations.nav_home}
            </Link>
            <Link
              href={aboutPath}
              className={LinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              {translations.nav_about}
            </Link>
          </div>

          <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-gray-200">
            <AuthButton
              isLoggedIn={isLoggedIn}
              loginText={translations.login}
              logoutText={translations.logout}
              email={email}
              loadingText={translations.loading}
            />
            <LangSwitcher linkText={translations.switch} />
          </div>
        </div>
      )}
    </div>
  );
}
