import { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/dictionary";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function Home({ params }: Props) {

  const { lang } = await params;
  const dict = await getDictionary(lang);

  const blocks = [dict.home.block1, dict.home.block2, dict.home.block3];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans ">
      <h1 className="mb-5">Main page</h1>
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
