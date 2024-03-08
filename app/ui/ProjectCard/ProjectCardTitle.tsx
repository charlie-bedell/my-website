interface ProjectCardTitleProps {
  title: string,
}

const ProjectCardTitle: React.FC<ProjectCardTitleProps> = ({ title }) => {
  return (
			<div className="w-full justify-start pl-3 mx-5 text-black">
		  <p><span className="font-bold">{title}</span></p>
			</div>
	)
}

export default ProjectCardTitle;
