export const getGitHubUserFromEnv = () => {
	const GH_USER = process.env.GITHUB_USER;
	if (GH_USER === undefined) {
		throw new Error("a github user is not defined in the .env under GITHUB_USER");
	} else {
		return GH_USER;
	}
}
