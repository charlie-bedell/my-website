"use client"

import { useState } from "react";
import ProjectCardTitle from "@/app/ui/ProjectCard/ProjectCardTitle";
import SubNav from "@/app/ui/SubNav/SubNav";
import RepoContent from "@/app/ui/RepoContent/RepoContent";
import { tabState, contentObject } from "@/app/lib/definitions";
import { data } from "@/app/lib/data";

interface ProjectModalProps {
  repoName: string,
	readmeImgUrl: string,
	closeModalHandler: () => void,
	readme: string,
	overview?: string
}

const ProjectModal: React.FC<ProjectModalProps> = ({
	repoName,
	readmeImgUrl,
	closeModalHandler,
	readme,
	overview}) => {

	const [currentTab, setCurrentTab] = useState<tabState>("Overview");
	const changeTab = (tabName: tabState) => setCurrentTab(tabName);

	const contentDisplay: contentObject = {
		"Overview": {
			contentType: "Overview",
			title: "Overview",
			content: overview ?? "no content"
		},
		"Readme": {
			contentType: "Readme",
			title: "Readme.md",
			content: readme,
		}
	};
	
  return (
	  <div className="fixed inset-x-40 inset-y-10 bg-gray-200 rounded-xl">
			<div className="flex justify-between">
				<ProjectCardTitle title={repoName} />
				<button
					onClick={() => {closeModalHandler()}}
					className="flex justify-center items-center font-bold px-4 text-black border border-black rounded-tr-xl">X</button>
			</div>
			<div className="flex w-full h-[200px] justify-center align-center">
				<img className="w-full h-full object-cover"
					src={readmeImgUrl} />
			</div>
			<SubNav currentTab={currentTab} handleChange={changeTab}/>
			<RepoContent contentType={contentDisplay[currentTab].contentType} title={contentDisplay[currentTab].title} content={contentDisplay[currentTab].content} />
		</div>
	)
}

export default ProjectModal;
