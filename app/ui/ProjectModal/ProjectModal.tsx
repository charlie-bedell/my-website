"use client"
import React from "react";
import { useState } from "react";
import ProjectCardTitle from "@/app/ui/ProjectCard/ProjectCardTitle";
import SubNav from "@/app/ui/SubNav/SubNav";
import RepoContent from "@/app/ui/RepoContent/RepoContent";
import { tabState, contentData } from "@/app/lib/definitions";
import CloseModalButton from "@/app/ui/ProjectModal/closeModalButton";
import ModalOverlay from "@/app/ui/ProjectModal/ModalOverlay";

interface ProjectModalProps {
	repoName: string,
	readmeImgUrl: string,
	// eslint-disable-next-line no-unused-vars
	closeModalHandler: (e: any) => void,
	readme: string,
	overview?: string
}

const ProjectModal: React.FC<ProjectModalProps> = ({
	repoName,
	readmeImgUrl,
	closeModalHandler,
	readme,
	overview
}) => {

	const [currentTab, setCurrentTab] = useState<tabState>("Overview");
	const changeTab = (tabName: tabState) => setCurrentTab(tabName);

	const contentDisplay: contentData = {
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
		<ModalOverlay closeModalHandler={closeModalHandler}>
			<div className="fixed flex flex-col inset-x-20 inset-y-10 bg-gray-200 rounded-xl max-h-full overflow-y-auto">
				<div className="flex justify-between">
					<ProjectCardTitle title={repoName} />
					<CloseModalButton closeModalHandler={closeModalHandler}/>
				</div>
				<div className="flex w-full h-[200px] justify-center align-center">
					<img className="w-full h-full object-cover" src={readmeImgUrl} alt="an image"/>
				</div>
				<SubNav currentTab={currentTab} handleChange={changeTab}/>
				<RepoContent contentType={contentDisplay[currentTab].contentType} title={contentDisplay[currentTab].title} content={contentDisplay[currentTab].content} />
			</div>
		</ ModalOverlay>
	)
}

export default ProjectModal;
