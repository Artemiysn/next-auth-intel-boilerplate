import { Locale } from "@/lib/i18n-config";
import { useTranslation } from '@/lib/i18n-server';
import { getAuthStatusJWT } from '@/lib/auth-jwt';
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function Home({ params }: Props) {

  const { lang } = await params;

  const { isLoggedIn } = await getAuthStatusJWT();

  if (!isLoggedIn) {
    return redirect(`/${lang}`); 
  }

  const { t } = await useTranslation(lang); 

  const blocks = [
    t('about.block1', { returnObjects: true }),
    t('about.block2', { returnObjects: true }),
    t('about.block3', { returnObjects: true }),
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans ">
      <h1 className="text-3xl font-bold mb-6 text-center">{t("about.title")}</h1>
      <article>
        {blocks.map((block: any, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-gray-50 border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">{block.title}</h2>
            <p className="text-gray-600 ">{block.text}</p>
          </div>
        ))}
      </article>
    </main>
  );
}