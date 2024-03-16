"use client"
import { useEffect, useState } from "react";
import ProjectCard from "@/app/ui/ProjectCard/ProjectCard";
import ProjectModal from "@/app/ui/ProjectModal/ProjectModal";
import { retrieveRepos } from "@/app/lib/githubApi";

const Page: React.FC = () => {

	const [repoData, setRepoData] = useState<any>({});
	const [currentRepo, setCurrentRepo] = useState<string>("");
	const [displayModal, setDisplayModal] = useState(false);

	useEffect(() => {
		retrieveRepos()
			.then((data: any) => {setRepoData(data)})
			.catch((err) => console.error(err));
	}, []);

	const enableModal = (repoId: any) => {
		changeCurrentRepo(repoId);
		setDisplayModal(true);
	}

	const disableModal = () => {
		setDisplayModal(false);
	}

	const changeCurrentRepo = (repoId: any) => {
		if (repoId !== currentRepo) {
			setCurrentRepo(repoId);
		}
	}
	
  return (
	  <div className="grid grid-cols-3 place-items-center gap-5">
			{Array.from(Object.values(repoData)).map((repo: any) => {
				return <ProjectCard key={repo.id}
								 description={repo.description}
								 title={repo.name}
								 id={repo.id}
								 openModalHandler={enableModal}
				/>
			})}
			{displayModal &&
				<ProjectModal
					repoName={repoData[currentRepo].name}
					readmeImgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.lovepik.com%2Ffree-png%2F20211125%2Flovepik-square-cat-yellow-cartoon-angry-expression-pack-png-image_401129516_wh1200.png&f=1&nofb=1&ipt=cdf15c3a9033e687ef79040236f78a7db6ffc70d91ec8df9ea1ebf8c9fd9c514&ipo=images"
					closeModalHandler={disableModal}
					readme={repoData[currentRepo].readme}
				/>
			}
		</div>
	)
}

export default Page;
