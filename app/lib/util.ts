import { QueryResultRow } from "@vercel/postgres";
import { repoData, repoObject } from "./definitions";

export const getGitHubUserFromEnv = () => {
	const GH_USER = process.env.GITHUB_USER;
	if (GH_USER === undefined) {
		throw new Error("a github user is not defined in the .env under GITHUB_USER");
	} else {
		return GH_USER;
	}
}
/**
 * takes the array of repoObjects and gives them a key based on their id
 **/
export const repoArrayToObject = (repositories: QueryResultRow[]): repoData => {
	const filteredRepos = filterRepos(repositories);
	const repoKeyed = filteredRepos.reduce((accum: any, curr: any) => {
			return {
				...accum,
				[curr.repo_id]: {
					id: curr.repo_id,
					name: curr.name,
					description: curr.description,
					readme: curr.readme,
				}
			}
	}, {});
	
	return repoKeyed;
}

/**
* filter out repos in `excludeRepos`
**/
export const filterRepos = (repositories: QueryResultRow[]): repoObject[] => {
	const excludeRepos: string[] = [
		'charlie-bedell',
		'k-frequent',
		'urban-robot',
		'nextjs-dashboard',
		'rental-scrape',
		'system-design-primer',
		'public_record_keeper'];
	const filteredRepos = repositories.filter((repo) => !excludeRepos.includes(repo.name));
	return filteredRepos as repoObject[];
	};
