import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";

export const getStaticProps = async () => {
  const URL = process.env.URL_JSON_USERS;
  const response = await fetch(URL);
  const dancers = await response.json();

  if (!dancers) {
    return {
      notFound: true,
    };
  }

  return {
    props: { dancers },
  };
};

const Dancers = ({ dancers }) => {
  return (
    <>
      <Head>
        <title>Dancers</title>
      </Head>
      <Heading text="Users list:" />

      <ul>
        {dancers &&
          dancers.map(({ id, name, email }) => (
            <li key={id}>
              <Link href={`/dancers/${id}`}>{name}</Link> <span>{email}</span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Dancers;
