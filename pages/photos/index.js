import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import ImageGallery from "../../components/ImageGallery";
import API from "../../services/API";
import Modal from "../../components/Modal";

export const getStaticProps = async () => {
  const gallery = await API.getGallery();

  if (!gallery) {
    return {
      notFound: true,
    };
  }

  return {
    props: { gallery },
  };
};

const Photos = ({ gallery }) => {
  return (
    <>
      <Head>
        <title>Photos</title>
      </Head>
      <Heading text="Our Photos" />
      <ImageGallery gallery={gallery} />
      {/* <Modal /> */}
    </>
  );
};

export default Photos;
