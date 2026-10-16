import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Cloud Platforms Demo</title>
      </Head>
      <h1>Cloud Platforms Demo</h1>
      <p>
        Навчальний Next.js-застосунок для перевірки деплою на Netlify и Amplify: статичні сторінки, SSR та API Route.
      </p>
      <p>
        Перевірка API: <a href="/api/ping">/api/ping</a>
      </p>
    </>
  );
}