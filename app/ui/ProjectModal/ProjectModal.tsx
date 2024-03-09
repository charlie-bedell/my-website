"use client"

import { useState } from "react";
import ProjectCardTitle from "../ProjectCard/ProjectCardTitle";
import SubNav from "../SubNav/SubNav";

interface ProjectModalProps {
  repoName: string,
	readmeImgUrl: string,
}

const ProjectModal: React.FC<ProjectModalProps> = ({ repoName, readmeImgUrl }) => {
	const [currentTab, setCurrentTab] = useState<string>("Overview");
	const changeTab = (tabName: string) => setCurrentTab(tabName);
	
  return (
	  <div className="flex flex-col items-center w-5/6 h-5/6 bg-gray-200">
		  <ProjectCardTitle title={repoName} />
			<div className="flex w-full h-[200px] justify-center align-center">
				<img className="w-full h-full object-cover"
					src={readmeImgUrl} />
			</div>
				<SubNav currentTab={currentTab} handleChange={changeTab}/>
		</div>
	)
}

export default ProjectModal;
