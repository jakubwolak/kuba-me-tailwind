export async function getStaticPaths() {
  const res = await fetch('https://cms.kuba.me/wp-json/wp/v2/pages');
  const pages = await res.json();

  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://cms.kuba.me/wp-json/wp/v2/pages?slug=${params.slug}`);
  const data = await res.json();

  return {
    props: {
      page: data[0],
    },
  };
}

export default function Page({ page }) {
  return (
    <article className="max-w-3xl mx-auto p-6 prose">
      <h1>{page.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    </article>
  );
}
