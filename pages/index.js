import Link from 'next/link'
import Image from 'next/image'

export async function getStaticProps() {
  const res = await fetch('https://cms.kuba.me/wp-json/wp/v2/pages');
  const pages = await res.json();

  return {
    props: {
      pages,
    },
  };
}

export default function Home({ pages }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
        <div className="w-[190px] flex-shrink-0">
          <Image
            src="https://cms.kuba.me/wp-content/uploads/2025/07/krew.jpg"
            alt="Zdjęcie Kuby"
            width={190}
            height={337}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Cześć! Tu Kuba 👋</h1>
          <p className="text-lg leading-relaxed">
            Tworzę strony internetowe, działam społecznie, prowadzę Fundację i uwielbiam pomagać. Zobacz, co robię 👇
          </p>
          <p className="mt-4">
            <Link href="/kontakt" className="text-blue-600 hover:underline font-semibold">
              Skontaktuj się
            </Link>
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Moje strony</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        {pages
          .sort((a, b) => a.title.rendered.localeCompare(b.title.rendered)) // posortuj alfabetycznie
          .map((page) => (
            <li key={page.id}>
              <Link href={`/${page.slug}`} className="text-blue-700 hover:underline">
                {page.title.rendered}
              </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}
