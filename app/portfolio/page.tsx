"use client"
import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import ProjectCard from "../ui/ProjectCard/ProjectCard";
import ProjectModal from "../ui/ProjectModal/ProjectModal";

// get all my public repositories
// const octokit = new Octokit();
// const response = await octokit.request('GET /users/charlie-bedell/repos');

// move these two to another component
// const repoContents = await octokit.request('GET /repos/charlie-bedell/partysync-front-end/contents/README.md');
// console.log(atob(repoContents.data.content));

// exclude certain repositories

// const repositories = response.data.filter((repo: any) => !excludeRepos.includes(repo.name));

const Page: React.FC = () => {

	const octokit = new Octokit();
	const [repoData, setRepoData] = useState([]);

	useEffect(() => {
		const retrieveRepoData = async () => {
			const excludeRepos = [
				'charlie-bedell',
				'k-frequent',
				'urban-robot',
				'nextjs-dashboard',
				'rental-scrape',
				'system-design-primer',
				'public_record_keeper'
			];
			const response = await octokit.request('GET /users/charlie-bedell/repos');
			const repositories = response.data;
			setRepoData(repositories.filter((repo: any) => !excludeRepos.includes(repo.name)));
		}
		retrieveRepoData();
		console.log(repoData);
	}, []);

	const [modalData, setModalData] = useState("");
	const [displayModal, setDisplayModal] = useState(false);

	const enableModal = () => {
		setDisplayModal(true);
	}

	const disableModal = () => {
		setDisplayModal(false);
	}

	const changeModal = () => {
		// get data about repo...
		enableModal();
		console.log('displayModal: ', displayModal);
	}


	
  return (
	  <div className="grid grid-cols-3 place-items-center gap-5">
			{repoData.map((repo: any) => {
				return <ProjectCard key={repo.id}
								 description={repo.description}
								 title={repo.name}
								 url={repo.html_url}
								 openModalHandler={changeModal}
				/>
			})}
			{displayModal &&
				<ProjectModal
					repoName="front end party sync"
					readmeImgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.lovepik.com%2Ffree-png%2F20211125%2Flovepik-square-cat-yellow-cartoon-angry-expression-pack-png-image_401129516_wh1200.png&f=1&nofb=1&ipt=cdf15c3a9033e687ef79040236f78a7db6ffc70d91ec8df9ea1ebf8c9fd9c514&ipo=images"
					closeModalHandler={disableModal}/>
			
			}
		</div>
	)
}

export default Page;
