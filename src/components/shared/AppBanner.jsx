import { useState } from 'react';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Oval } from 'react-loader-spinner';
// import profile from '../../images/profile.jpg';
import profile from '../../images/fajar-photo.png';

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();
	const [isLoading, setIsLoading] = useState(true);

	const handleImageLoad = () => {
		setIsLoading(false);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col-reverse sm:justify-between items-center sm:flex-row xl:mt-12 lg:mt-12 sm:mt-2 md:mt-2"
		>
			<div className="w-full md:w-2/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light mobile-padding-top"
				>
					Hi, I am Fajar
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					A Full-Stack Developer
				</motion.p>
				<p className="text-justify sm:text-justify mt-2 mb-0 pt-2 pb-0" style={{
					textAlign: 'justify',
				}}>
					I am a Full-Stack Developer with a passion for web development. I have experience in building web applications using modern technologies. I am a quick learner and always eager to learn new things. I am a team player and have good communication skills. I am also a self-motivated person and always strive to improve my skills.
				</p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a
						download="Fajar-Resume.pdf"
						href="/files/Fajar-Resume.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>
				</motion.div>
			</div>
			<motion.div
				/*initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}*/
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<center>
					<div className="relative" style={{ maxWidth: '70%' }}>
						{isLoading && (
							<Oval
								height={80}
								width={80}
								color="#4A90E2"
								secondaryColor="#4A90E2"
								strokeWidth={4}
								strokeWidthSecondary={2}
								style={{
									FiAlignJustify: 'center',
								}}
							/>
						)}						
						<img
							src={
								activeTheme === 'dark' ? profile : profile
							}
							alt="Developer"
							onLoad={handleImageLoad}
							style={{
								maxWidth: '100%',
								display: isLoading ? 'none' : 'block',
							}}
							className="rounded-lg /*shadow-lg*/ border-2 border-primary-light dark:border-secondary-dark"
						/>
					</div>
				</center>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;