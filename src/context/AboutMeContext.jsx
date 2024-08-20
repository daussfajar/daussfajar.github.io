import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { educationsData, educationsHeading as educationsPageHeading } from '../data/educationsData';
import { clientsData as clientsDataJson } from '../data/clientsData';
import { skillsHeading, skillsData as skillsDataJson } from '../data/skillsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	const clientsHeading = clientsPageHeading;
	
	const educationsHeading = educationsPageHeading;

	const [clientsData, setClientsData] = useState(clientsDataJson);
	const [skillsData, setSkillsData] = useState(skillsDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				clientsHeading,
				educationsHeading,
				educationsData,
				clientsData,
				setClientsData,
				skillsHeading,
				skillsData,
				setSkillsData
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
