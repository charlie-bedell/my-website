"use server"

import { Octokit } from "octokit";
import { getGitHubUserFromEnv } from "@/app/lib/util";


const GH_USER = getGitHubUserFromEnv();
const octokit = new Octokit(
	{auth: process.env.GITHUB_API_TOKEN,
	});

export const getRepoContents = async (repo: string) => {
	try {
		const response = await octokit.request('GET /repos/{username}/{repo}/contents',
			{
				repo: repo,
				username: GH_USER,
				branch: "main",
				headers: {
					"User-Agent": `${GH_USER}-portfolio`,
					"Accept": "application/vnd.github+json"
				}
			})
		return response.data;
	} catch (err) {
		console.error("Unable to fetch repo contents: ", err);
	}
}

export const checkForReadme = (repoContents: any[]) => {
	const possibleReadmeNames = ["readme.md", "readme.txt", "readme"];
	let readmeName: string | undefined;
	repoContents.some((file) => {
		if (possibleReadmeNames.includes(file.name.toLowerCase())) {
			readmeName = file.name;
			return true;
		}
	});
	return readmeName;
}

export const retrieveRepos = async () => {	
	const excludedRepos = [
		'charlie-bedell',
		'k-frequent',
		'urban-robot',
		'nextjs-dashboard',
		'rental-scrape',
		'system-design-primer',
		'public_record_keeper'
	];
	try {
		const response = await octokit.request(`GET /users/{username}/repos`,
			{username: GH_USER});
		
		let repositories = response.data.filter((repo: any) => !excludedRepos.includes(repo.name));
		const repoKeyed = repositories.reduce((accum: any, curr: any) => {
			return {
				...accum,
				[curr.id]: {
					name: curr.name,
					description: curr.description,
					readme: "",
				}
			}
		}, {});

		const repoIds = Array.from(Object.keys(repoKeyed));
		for (let i = 0; i < repoIds.length; i++) {
			const repoId = repoIds[i];
			const readme = await retrieveReadme(repoKeyed[repoId].name);
			repoKeyed[repoId].readme = readme;
		}
		console.log(repoKeyed);
		
		return repoKeyed;

	} catch (err) {
		console.error(`an error occured while fetching the repositories of user ${GH_USER}: `, err);
	}
}

export const retrieveReadme = async (repo: string) => {
	
	const contents = await getRepoContents(repo);
	
	const readmeName = checkForReadme(contents);
	if (readmeName) {
		try {
			const response = await octokit.request('GET /repos/{username}/{repo}/contents/{path}',
				{
					repo: repo,
					path: readmeName,
					username: GH_USER,
					branch: "main",
					headers: {
						"User-Agent": `${GH_USER}-portfolio`,
						"Accept": "application/vnd.github+json"
					}
				});
			const readme = atob(response.data.content);
			return readme;
		} catch (err) {
			console.error("unable to fetch readme: ", err);
		}
	} else {
		return "No Readme";
	}
}
