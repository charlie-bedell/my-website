import React from 'react';

interface ProjectCardDescriptionProps {
	description: string,
}

const ProjectCardDescription: React.FC<ProjectCardDescriptionProps> = ({ description }) => {
	return (
		<div className="py-2 line-clamp-2 h-[18%] group-hover:h-[30%] group-hover:line-clamp-none group-hover:overflow-hidden transition-all ease-in-out duration-1000">
			<p className="overflow-hidden group-hover:animate-autoScroll text-gray-500 px-5">{description}</p>
		</div>
	)
}

export default ProjectCardDescription;
