import SubNavButton from "./SubNavButton";

import { tabState } from "../ProjectModal/ProjectModal";

interface SubNavProps {
  currentTab: string,
	handleChange: (name: tabState ) => void,
}

const SubNav: React.FC<SubNavProps> = ({ currentTab, handleChange }) => {
  return (
	  <nav className="flex justify-start gap-1 w-full">
			{/* TODO: use clsx to conditionally change color of selected tab */}
		  <SubNavButton name="Overview" currentTab={currentTab} handleChange={handleChange}/>
			<SubNavButton name="Readme" currentTab={currentTab} handleChange={handleChange}/>
		</nav>
	)
}

export default SubNav;
