import type { GetServerSideProps } from "next";
import Head from "next/head";

const TIME_ZONE = "Europe/Kyiv";

type Props = {
  isoTime: string;
  displayTime: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const now = new Date();

  return {
    props: {
      isoTime: now.toISOString(),
      displayTime: now.toLocaleString("uk-UA", {
        timeZone: TIME_ZONE,
        dateStyle: "long",
        timeStyle: "medium",
      }),
    },
  };
};

export default function ServerTimePage({ isoTime, displayTime }: Props) {
  return (
    <>
      <Head>
        <title>Час сервера | Cloud Platforms Demo</title>
      </Head>
      <h1>Час сервера</h1>
      <p>
        Сторінку згенеровано на сервері:{" "}
        <time dateTime={isoTime}>{displayTime}</time>
      </p>
      <p>Оновіть сторінку — час зміниться.</p>
    </>
  );
}