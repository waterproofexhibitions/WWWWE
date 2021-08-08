import Header from "../components/Header"
import Footer from "../components/Footer"
import useSWR from 'swr'

export default function Layout({ children }) {
	const { API_URL } = process.env;

	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	
	const url = `${API_URL}/global`;
	const { data: global, error: globalError } = useSWR(url, fetcher);

    if (globalError) return <div>failed to load</div>;
    if (!global) return <div>loading...</div>;

	return (
		<>
			<Header />
				<h1>{global.title}</h1>
				<p>{global.description}</p>
				<main>{children}</main>
			<Footer />
		</>
	)
}