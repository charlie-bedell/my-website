import { Octokit } from "octokit";
import { getGitHubUserFromEnv } from "@/app/lib/util";
import { repoData } from "../definitions";

const GH_USER = getGitHubUserFromEnv();
const octokit = new Octokit(
	{auth: process.env.GITHUB_API_TOKEN,
	});

export const getRepoContents = async (repo: string) => {
	// gets the contents of a specific readme
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

export const checkForReadme = (repoContents: any[]): string | undefined => {
	// returns a readme name if its in repoContents
	// otherwise: undefined
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

export const retrieveRepos = async (): Promise<repoData> => {	
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
					id: curr.id,
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
		
		return repoKeyed;

	} catch (err) {
		console.error(`an error occured while fetching the repositories of user ${GH_USER}: `, err);
		return {"0": {id: 0, repo_id: 0, name: "", description: "", readme: ""}};
	}
}

export const retrieveReadme = async (repo: string) => {
	// checks if a readme exists within a the contents of a repo.
	// If it does, return the readme
	const contents = await getRepoContents(repo);


	// 
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

