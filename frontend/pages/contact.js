import ReactMarkdown from 'react-markdown'

function Contact({ contactpage }) {
    return (
      <>
        <h1 className="heading bg-pink-100">{contactpage.heading}</h1>
        <ReactMarkdown children={contactpage.content} className="p-4 bg-red-300" />
      </>
    );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/contactpage`);
  const data = await res.json();

  return {
    props: {
      contactpage: data,
    },
  };
}

export default Contact