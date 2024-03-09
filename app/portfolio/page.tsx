import { Octokit } from "octokit";
import ProjectCard from "../ui/ProjectCard/ProjectCard";

// get all my public repositories
const octokit = new Octokit();
const response = await octokit.request('GET /users/charlie-bedell/repos');

// move these two to another component
// const repoContents = await octokit.request('GET /repos/charlie-bedell/partysync-front-end/contents/README.md');
// console.log(atob(repoContents.data.content));

// exclude certain repositories
const excludeRepos = [
	'charlie-bedell',
	'k-frequent',
	'urban-robot',
	'nextjs-dashboard',
	'rental-scrape',
	'system-design-primer',
	'public_record_keeper'
];

const repositories = response.data.filter((repo: any) => !excludeRepos.includes(repo.name));

const Page: React.FC = () => {
  return (
	  <div className="grid grid-cols-3 place-items-center gap-5">
			{repositories.map((repo: any) => {
				return <ProjectCard key={repo.id}
					description={repo.description}
					title={repo.name}
					url={repo.html_url}
				/>
			})}
		</div>
	)
}

export default Page;
