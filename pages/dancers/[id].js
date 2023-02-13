import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const contact = await response.json();

  if (!contact) {
    return {
      notFound: true,
    };
  }

  return {
    props: contact,
  };
};

function Contact(contact) {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
}
export default Contact;
