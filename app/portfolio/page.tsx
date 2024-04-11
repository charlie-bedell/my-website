import React from 'react';
import Portfolio from '../ui/Portfolio/Portfolio';
import { repoData } from '../lib/definitions';
import { fetchRepoData } from '../lib/services/vercelPostgres';
import { retrieveRepos } from '../lib/services/githubApi';

const fetchRepos = async () => {
	try {
		const res: repoData = await retrieveRepos();
		return res;
	} catch (err) {
		console.error("there was an error fetching the data: ", err);
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
