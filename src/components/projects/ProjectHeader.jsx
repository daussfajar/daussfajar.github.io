import { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';

const ProjectSingleHeader = ({ project }) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	if(!project) return null;
	
	singleProjectData.ProjectHeader.title = project.title;
	singleProjectData.ProjectHeader.publishDate = project.ProjectHeader.publishDate;
	singleProjectData.ProjectHeader.tags = project.ProjectHeader.tags;
	
	return (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-0 sm:mt-0 mb-7">
				{singleProjectData.ProjectHeader.title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProjectData.ProjectHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{singleProjectData.ProjectHeader.tags}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
