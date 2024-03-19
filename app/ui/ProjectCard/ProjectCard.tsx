"use client"
import React from "react";
import ProjectCardDescription from "@/app/ui/ProjectCard/ProjectCardDescription";
import ProjectCardTitle from "@/app/ui/ProjectCard/ProjectCardTitle";
import { data } from "@/app/lib/data";

interface ProjectCardProps {
	description: string,
	title: string,
	id: number,
	// eslint-disable-next-line no-unused-vars
	openModalHandler: (repo: any) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, id, openModalHandler }) => {
	return (
		<button onClick={() => openModalHandler(id)}>
			<div className="flex flex-col items-center w-[400px] h-[400px] bg-gray-200 p-1 rounded-md group">
			<ProjectCardTitle title={title} />
				<img className="w-full h-full object-cover" src={data.testImage} />
				<ProjectCardDescription description={description} />
			</div>
	</button>
	)
}

export default ProjectCard;
