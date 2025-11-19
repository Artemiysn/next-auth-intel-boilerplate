import { useTranslation } from "@/lib/i18n-server";
import { Locale } from "@/lib/i18n-config";
import { getAuthStatusJWT } from "@/lib/auth-jwt";
import ResponsiveHeader from "./ResponsiveHeader";

async function Header({ lang }: { lang: Locale}) {

  const { t } = await useTranslation(lang);

  const headerTranslations = {
    title: t('header.title'),
    nav_home: t('header.nav_home'),
    nav_about: t('header.nav_about'),
    login: t('header.login'),
    logout: t('header.logout'),
    switch: t('header.switch'),
    loading: t("header.loading")
  };

  const { isLoggedIn, email } = await getAuthStatusJWT();

  return (
    <ResponsiveHeader
      lang={lang}
      isLoggedIn={isLoggedIn}
      email={email}
      translations={headerTranslations}
    />
  );
}

export default Header;
