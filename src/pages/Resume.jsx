import { motion } from 'framer-motion';

import Experience from '../components/resume/Experience';
import Education from '../components/resume/Education';

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container py-5 lg:py-10 lg:mt-10"
		>
			<Experience />
			<Education />
		</motion.div>
	);
};

export default Resume;
