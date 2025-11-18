import { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/dictionary";
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
  const dict = await getDictionary(lang);
  const blocks = [dict.about.block1, dict.about.block2, dict.about.block3];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans ">
      <h1 className="text-3xl font-bold mb-6">{dict.about.title}</h1>
      <article>
        {blocks.map((block, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-gray-50 border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-4">{block.title}</h2>
            <p className="text-gray-600 ">{block.text}</p>
          </div>
        ))}
      </article>
    </main>
  );
}