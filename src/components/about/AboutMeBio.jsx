/* eslint-disable jsx-a11y/img-redundant-alt */
import profileImage from '../../images/profile.jpg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<>
			<div>
				<p className="font-general-medium text-2xl sm:text-4xl text-center text-primary-dark dark:text-primary-light mt-20">
					About Me
				</p>
				<p
					className="text-center mt-2 text-gray-500 dark:text-gray-300"
				>
					Here is a brief introduction about me
				</p>
			</div>
			<div className="block sm:flex sm:gap-10 mt-10">
				<div className="w-full sm:w-1/4 mb-7 sm:mb-0 flex justify-center sm:justify-start">
					<img src={profileImage} className="rounded-lg w-96" alt="Profile Image" />
				</div>

				<div className="font-general-regular w-full sm:w-3/4 text-left">
					{aboutMe.map((bio) => (
						<p
							className="mb-4 text-ternary-dark dark:text-ternary-light text-base sm:text-lg"
							key={bio.id}
							style={{ 
								whiteSpace: 'pre-line',
								textAlign: 'justify' 
							}}
						>
							{bio.bio}
						</p>
					))}
				</div>
			</div>
		</>
	);
};

export default AboutMeBio;