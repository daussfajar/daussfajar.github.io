import { GraduationCap } from "lucide-react";

import UPJLogo from "../../images/companies/upjlogo.png";
import TM from "../../images/companies/logotm.png";

const educations = [
    {
        logo: UPJLogo,
        title: "Bachelor of Computer Science",
        institution: "University of Technology",
        date: "2019 - 2023",
        description: `I am currently studying at the University of Technology majoring in Computer Science, my responsibilities include building new systems as needed, as well as developing and maintaining various features for existing applications.`,
    },
    {
        logo: TM,
        title: "Software Engineering Major",
        institution: "SMK Tunas Media",
        date: "2017 - 2019",
        description: `I studied at SMK Tunas Media majoring in Software Engineering. I learned about programming languages, databases, and software development methodologies. I also learned about web development, mobile development, and desktop development.`,
    },
];
export default function Education() {
    return (
        <>
            <div className="max-w-4xl mx-auto px-4 mt-10">
                {/* Header */}
                <h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-6 flex items-center">
                    <GraduationCap className="w-6 h-6 mr-4" /> Educations
                </h2>

                {/* Education List */}
                {educations.map((education, index) => (
                <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-primary-dark flex flex-col md:flex-row items-start md:items-center"
                        style={
                            {
                            marginTop: index === 0 ? "0px" : "20px",
                            }
                        }
                    >
                    {/* Logo */}
                    <div className="w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden md:mr-4">
                        <img src={education.logo} alt={education.institution} className="w-full h-full object-contain" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        {/* Title & Date */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold text-primary-dark dark:text-primary-light">{education.title}</h3>
                                <p className="text-md text-gray-600 dark:text-gray-300">{education.institution}</p>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{education.date}</p>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-justify">{education.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </>
    );
}