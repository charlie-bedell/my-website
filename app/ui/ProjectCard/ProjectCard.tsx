"use client"
import Link from "next/link";
import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardTitle from "./ProjectCardTitle";

interface ProjectCardProps {
  description: string,
	title: string,
	url: string,
	openModalHandler: () => void,
}

const testImage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.lovepik.com%2Ffree-png%2F20211125%2Flovepik-square-cat-yellow-cartoon-angry-expression-pack-png-image_401129516_wh1200.png&f=1&nofb=1&ipt=cdf15c3a9033e687ef79040236f78a7db6ffc70d91ec8df9ea1ebf8c9fd9c514&ipo=images";


const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, url, openModalHandler }) => {
  return (
		<button onClick={() => {openModalHandler();}}>
	  <div className="flex flex-col items-center w-[400px] h-[400px] bg-gray-200 p-1 rounded-md group">
			<ProjectCardTitle title={title} />
				<img className="w-full h-full object-cover" src={testImage} />
				<ProjectCardDescription description={description} />
			</div>
	</button>
	)
}

export default ProjectCard;
