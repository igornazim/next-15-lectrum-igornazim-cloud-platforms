import Head from "next/head";
import styles from "@/styles/Platforms.module.css";

const PLATFORMS = [
  {
    name: "Netlify",
    description:
      "Хостинг фронтенду з автоматичним деплоєм з GitHub. Підтримує SSR та API Routes Next.js.",
  },
  {
    name: "AWS Amplify",
    description:
      "Хостинг від Amazon з CI/CD з GitHub. Підтримує SSR та API Routes Next.js.",
  },
  {
    name: "Firebase",
    description:
      "Платформа від Google: Hosting для статики, App Hosting для SSR на тарифі Blaze.",
  },
];

export default function PlatformsPage() {
  return (
    <>
      <Head>
        <title>Платформи | Cloud Platforms Demo</title>
      </Head>
      <h1>Хмарні платформи</h1>
      <ul className={styles.list}>
        {PLATFORMS.map((platform) => (
          <li key={platform.name} className={styles.card}>
            <h2>{platform.name}</h2>
            <p>{platform.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}