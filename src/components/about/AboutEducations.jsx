import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';

const AboutEducations = () => {
    const { educationsData, educationsHeading } = useContext(AboutMeContext);
    const { skillsData, skillsHeading } = useContext(AboutMeContext);

    return (
        <>
            <div className="mt-10 sm:mt-20">
                <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
                    {skillsHeading}
                </p>
                <p style={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: '#6b7280',
                    cursor: 'default',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                    marginBottom: '1rem'
                }}>
                    Here are some of the technical skills that I have mastered, including programming languages, frameworks, and tools.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" style={{alignItems:'center'}}>
                    {skillsData.map((client) => (
                        <AboutClientSingle
                            title={client.title}
                            image={client.img}
                            key={client.id}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-10 sm:mt-10">
                <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
                    {educationsHeading}
                </p>
                <p style={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: '#6b7280',
                    cursor: 'default',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                    marginBottom: '1rem'
                }}>
                    I have studied and am currently studying at the following programs and universities
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" style={{alignItems: 'center'}}>
                    {educationsData.map((client) => (
                        <AboutClientSingle
                            title={client.title}
                            image={client.img}
                            key={client.id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutEducations;
