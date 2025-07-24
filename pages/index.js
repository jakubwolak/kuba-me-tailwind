import Link from 'next/link'

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
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Witaj na stronie Kuby</h1>
      <ul className="space-y-4">
        {pages.map((page) => (
          <li key={page.id}>
            <Link href={`/page/${page.slug}`} className="text-xl text-blue-600 hover:underline">
              {page.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
