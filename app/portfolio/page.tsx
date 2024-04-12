import React from 'react';
import Portfolio from '../ui/Portfolio/Portfolio';
import { repoData } from '../lib/definitions';

const fetchRepos = async () => {
	try {
		const res: repoData = await fetch("http://localhost:3000/api/fetchrepos", {
			next: { revalidate: (60 * 60 * 24) }, 
		});
		const data = await res.json();
		return data.data;
	} catch (err) {
		console.error("there was an error fetching the data: ", err);
		return undefined;
	}
}

const Page: React.FC = async () => {

	const data = await fetchRepos();

	return (
		<>
			<Portfolio repoDataPack={data}/>
		</>
	);
}
export default Page;
