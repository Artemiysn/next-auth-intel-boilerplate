import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n-config";
import LangSwitcher from "./LangSwitcher";

async function Header({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <nav className="w-full bg-gray-100 border-b border-gray-200 p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">{dict.header.title}</h1>
        <LangSwitcher linkText={dict.header.switch} />
      </div>
    </nav>
  );
}

export default Header;
