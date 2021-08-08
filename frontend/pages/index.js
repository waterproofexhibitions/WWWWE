import ReactMarkdown from 'react-markdown'
import { Flex, Box } from 'reflexbox'

//import { fetchAPI } from "../lib/api"

const Home = ({ homepage }) => {

  return (
    <>
    <Box variant="navContainer" className="nav" />
    <h1 className="heading bg-pink-100">{homepage.heading}</h1>
    <ReactMarkdown children={homepage.content} className="p-4 bg-red-300" />
    </>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/homepage`);
  const data = await res.json();

  return {
    props: {
      homepage: data,
    },
  };
}

export default Home;