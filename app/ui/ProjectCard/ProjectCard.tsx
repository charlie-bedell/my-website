import ProjectCardDescription from "./ProjectCardDescription";
import ProjectCardTitle from "./ProjectCardTitle";

interface ProjectCardProps {
  // declare props here
}

const testImage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.lovepik.com%2Ffree-png%2F20211125%2Flovepik-square-cat-yellow-cartoon-angry-expression-pack-png-image_401129516_wh1200.png&f=1&nofb=1&ipt=cdf15c3a9033e687ef79040236f78a7db6ffc70d91ec8df9ea1ebf8c9fd9c514&ipo=images";


const ProjectCard: React.FC<ProjectCardProps> = ({/* Destructure Props Here */}) => {
  return (
	  <div className="flex flex-col items-center w-[400px] h-[400px] bg-gray-200 p-1 rounded-md group">
			<ProjectCardTitle title="myTestCat" />
			<img className="w-full h-full object-cover" src={testImage}/>
			<ProjectCardDescription description="this is a general overview of what the project is about, I'm hoping that it could be quite long, but there will be a hover option where it begins to scroll text what the hell is going on, this should be a simple cut and dry text attribute thingy that does the thing I want it to, instead I've spent way too much time trying to figure this out" />
		</div>
	)
}

export default ProjectCard;
