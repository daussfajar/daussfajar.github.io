import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { projectsData } from '../data/projects';
import { useParams } from 'react-router-dom';

const ProjectSingle = () => {
	// const projectId = window.location.pathname.split("/")[2];
	const params = useParams();
	const projectId = params.id;
	
	const [project, setProject] = useState(null);
	
	useEffect(() => {
		if (isNaN(projectId)) {
			window.location.href = "/";
		} else {
			const selectedProject = projectsData.find(project => project.id === parseInt(projectId));
			if (!selectedProject) {
				window.location.href = "/projects";
			} else {
				setProject(selectedProject);
				console.log(selectedProject);
			}
		}
	}, [projectId]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader project={project} />
				<ProjectGallery project={project} />
				<ProjectInfo project={project} />
				<ProjectRelatedProjects project={project} />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
