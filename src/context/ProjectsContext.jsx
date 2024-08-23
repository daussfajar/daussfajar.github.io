import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState(projectsData.slice(0, 6));
	const [visibleProjectsCount, setVisibleProjectsCount] = useState(6);
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');
	const [filteredProjects, setFilteredProjects] = useState(projectsData);

	const loadMoreProjects = () => {
		setVisibleProjectsCount(prevCount => {
			const newCount = prevCount + 6;
			setProjects(filteredProjects.slice(0, newCount));
			return newCount;
		});
	};

	const hasMoreProjects = visibleProjectsCount < filteredProjects.length;

	const searchProjectsByTitle = (title) => {
		const result = projectsData.filter(item =>
			item.title.toLowerCase().includes(title.toLowerCase())
		);
		setFilteredProjects(result);
		setProjects(result.slice(0, 6));
		setVisibleProjectsCount(6);
	};

	const selectProjectsByCategory = (category) => {
		const result = projectsData.filter(item =>
			item.category.toLowerCase() === category.toLowerCase()
		);
		setFilteredProjects(result);
		setProjects(result.slice(0, 6));
		setVisibleProjectsCount(6);
	};

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
				loadMoreProjects,
				hasMoreProjects,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};