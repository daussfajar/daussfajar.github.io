import { useContext, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Oval } from 'react-loader-spinner';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';

const ProjectsGrid = () => {
	const {
		projects,
		// searchProject,
		setSearchProject,
		searchProjectsByTitle,
		// selectProject,
		setSelectProject,
		selectProjectsByCategory,
		loadMoreProjects,
		hasMoreProjects,
	} = useContext(ProjectsContext);

	const [isLoading, setIsLoading] = useState(false);

	const handleLoadMore = async () => {
		setIsLoading(true);
		await loadMoreProjects();
		setIsLoading(false);
	};

	return (
		<section className="mt-10 py-5">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
					Projects Portfolio
				</p>
			</div>

			<div className="mt-6 mb-4">
				<h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
					Search projects by title or filter by category
				</h3>
				<div className="flex flex-col sm:flex-row justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 overflow-x-auto">
					<div className="flex justify-between gap-2">
						<span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
							<FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
								searchProjectsByTitle(e.target.value); // Filter berdasarkan judul
							}}
							className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectsFilter
						setSelectProject={(category) => {
							setSelectProject(category);
							selectProjectsByCategory(category); // Filter berdasarkan kategori
						}}
					/>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{projects.map((project) => (
					<ProjectSingle
						title={project.title}
						category={project.category}
						image={project.img}
						id={project.id}
						key={project.id}
					/>
				))}
			</div>

			<div className="flex justify-center mt-8">
				{isLoading ? (
					<Oval
						height={50}
						width={50}
						color="#4A90E2"
						secondaryColor="#4A90E2"
						strokeWidth={4}
						strokeWidthSecondary={2}
					/>
				) : (
					hasMoreProjects && (
						<button
							onClick={handleLoadMore}
							className="px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
						>
							Load More
						</button>
					)
				)}
			</div>
		</section>
	);
};

export default ProjectsGrid;