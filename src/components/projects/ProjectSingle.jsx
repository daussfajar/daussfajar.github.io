import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Oval } from 'react-loader-spinner';

const ProjectSingle = ({ title, category, image, id }) => {
	const [imageLoading, setImageLoading] = useState(true);

	const handleImageLoaded = () => {
		setImageLoading(false);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link to={`/projects/${id}`} aria-label="Single Project">
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						{imageLoading && (
							<div className="flex justify-center items-center h-44">
								<Oval color="#2563EB" height={50} width={50} />
							</div>
						)}
						<img
							src={image}
							className="rounded-t-xl border-none"
							onLoad={handleImageLoaded}
							alt="Single Project"
							style={{
								width: '100%',
								height: '200px',
								objectFit: 'cover',
								display: `${imageLoading ? 'none' : 'block'}`,
							}}
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
