import { useTranslation } from '@/lib/i18n-server'; 
import { Locale } from "@/lib/i18n-config";
import LangSwitcher from "./LangSwitcher";
import Link from "next/link";
import AuthButton from "./AuthButton";
import { LinkClass } from "../ui/Link";
import { getAuthStatusJWT } from '@/lib/auth-jwt';

async function Header({ lang }: { lang: Locale }) {

  const { t } = await useTranslation(lang);

  const { isLoggedIn, email } = await getAuthStatusJWT();

  const homePath = `/${lang}`;
  const aboutPath = `/${lang}/about`;

  return (
    <nav className="w-full bg-gray-100 border-b border-gray-200 p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
            {t("header.title")}
          </h1>
          <nav className="flex gap-4 ml-4">
            <Link
              href={homePath}
              className={LinkClass}
            >
              {t("header.nav_home")}
            </Link>
            <Link
              href={aboutPath}
              className={LinkClass}
            >
              {t("header.nav_about")}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <AuthButton
            isLoggedIn={isLoggedIn}
            loginText={t("header.login")}
            logoutText={t("header.logout")}
            email={email}
            loadingText={t("header.loading")}
          />
          <LangSwitcher linkText={t("header.switch")} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
