import ProjectModal from "../ui/ProjectModal/ProjectModal";
import React from 'react';

const Page: React.FC = () => {
return (
	<div className="flex flex-col items-center justify-center w-full h-full">
			<ProjectModal
				repoName="my test name"
				closeModalHandler={() => {/* do nothing */}}
				readme="NO readme"
				readmeImgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgrammarist.com%2Fwp-content%2Fuploads%2FGrammarist-Article-Graphic-V2-17-1024x478.png&f=1&nofb=1&ipt=5bebb5977e071f35e01870fa7791d76763c97828fd2580f23939c9cc95a3e686&ipo=images" />
		</div>
	)
}

export default Page;
