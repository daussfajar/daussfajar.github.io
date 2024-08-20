import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { useNavigate } from 'react-router-dom';

const ProjectRelatedProjects = ({ project }) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const navigate = useNavigate();

	if (!project) return null;

	singleProjectData.RelatedProject = project.RelatedProject;
	
	return (
		<div className="mt-10 pt-5 sm:pt-5 sm:mt-10 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-8 sm:mb-8 text-left" style={{paddingTop: '20px'}}>
				{singleProjectData.RelatedProject.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{singleProjectData.RelatedProject.Projects.map((project) => {
					return (
						<img
							src={project.img}
							className="rounded-xl cursor-pointer"
							alt={project.title}
							key={project.id}
							style={{
								width: '100%',
								height: '100%',
								transition: 'transform 0.5s ease',
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.transform = 'scale(1.05)';
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.transform = 'scale(1)';
							}}
							onClick={() => {
								navigate(`/projects/${project.id}`);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectRelatedProjects;
