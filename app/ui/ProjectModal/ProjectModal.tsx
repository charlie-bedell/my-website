"use client"

import { useState } from "react";
import ProjectCardTitle from "../ProjectCard/ProjectCardTitle";
import SubNav from "../SubNav/SubNav";
import RepoContent from "../RepoContent/RepoContent";

interface ProjectModalProps {
  repoName: string,
	readmeImgUrl: string,
	closeModalHandler: () => void,
}

export type tabState = "Overview" | "Readme";

const ProjectModal: React.FC<ProjectModalProps> = ({ repoName, readmeImgUrl, closeModalHandler }) => {
	const [currentTab, setCurrentTab] = useState<tabState>("Overview");
	const changeTab = (tabName: tabState) => setCurrentTab(tabName);

	const readmeContent = "### Party SYNC is a full-stack app that uses the Python-based Django REST Framework with a React.js frontend.\n" +
	"This app helps party hosts invite friends to one location where they can read all the party details.\n" +
		"\n## Technologies and Libraries Used\n" +
	"This application is built using the Python-based Django REST Framework with a React.js frontend and a Heroku/Netlify deployment.\n" +
	"Backend Technologies used:\n" +
	"\n-- Python\n" +
	"\n-- Django\n" +
	"\n-- Sql\n" +
	"\n-- JWT Auth\n" +
	"\n-- Heroku\n" +
	"FrontEnd Technologies used\n" +
	"\n-- Node.js\n" +
	"\n-- React.js\n" +
	"\n-- Netlify\n" +
	"\n-- Photoshop\n" +
	"\n## MVP User Stories & Stretch Goals\n" +
		"https://trello.com/b/Vdd8iW0j\n";

	const overviewContent = "Back in the day when I was a teenager\n" +
		"before I had status, before I had pager\n" +
		"I would be at home be listenting to hip hop\n" +
		"my daddy said it reminded him of bebop\n" +
		"I said well daddy you know these things go in cycles\n";

	
  type contentObject = {
		[key in tabState]: {
			contentType: tabState,
			title: string,
			content: string,
		};
	}

	const contentDisplay: contentObject = {
		"Overview": {
			contentType: "Overview",
			title: "Overview",
			content: overviewContent
		},
		"Readme": {
			contentType: "Overview",
			title: "Readme.md",
			content: readmeContent,
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
