import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import styles from "../styles/Home.module.scss";

const { API_HOST } = process.env;

export const getStaticProps = async () => {
  const response = await fetch(`${API_HOST}/socials`);
  const socials = await response.json();

  if (!socials) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials },
  };
};

function Home({ socials }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Ballroom world" />
      <Socials socials={socials} />
    </div>
  );
}
export default Home;
