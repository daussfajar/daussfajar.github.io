import { Briefcase } from "lucide-react";

import ErajayaLogo from "../../images/companies/logo-erajaya.png";
import UPJLogo from "../../images/companies/upjlogo.png";
import IDS from "../../images/companies/ids.png";

const experiences = [
  {
    logo: ErajayaLogo,
    title: "GA - Supervisor & Fullstack Developer",
    company: "PT Erajaya Swasembada, Tbk",
    date: "Dec 2024 - Apr 2025",
    description:
      "As a GA Supervisor & Fullstack Developer (Sub Unit System Support), I oversee and optimize GA Systems, ensuring performance, security, and reliability. I develop and maintain applications, databases, and IT infrastructure while ensuring compliance with security standards and company policies.",
  },
  {
    logo: UPJLogo,
    title: "Fullstack Developer",
    company: "Universitas Pembangunan Jaya",
    date: "Oct 2019 - Dec 2024",
    description: `I am currently working at Pembangun Jaya University as a Full Stack Developer, my responsibilities include building new systems as needed, as well as developing and maintaining various features for existing applications.`,
  },
  {
    logo: IDS,
    title: "Junior Programmer Intern",
    company: "PT Inovasi Dinamika Solusi",
    date: "May 2019 - Jun 2019",
    description: `I worked in this company as a Fullstack Web Developer, responsible for developing and maintaining RESTful APIs to support various web applications. My role involved designing efficient backend logic, ensuring seamless integration between frontend and backend systems, optimizing database queries, and collaborating with the team to enhance system performance. Additionally, I contributed to debugging, troubleshooting, and improving existing features to align with business requirements.`,
  },
];

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Header */}
      <h2 className="text-3xl font-bold text-primary-dark dark:text-primary-light mb-6 flex items-center">
        <Briefcase className="w-6 h-6 mr-4" /> Experiences
      </h2>

      {/* Experience List */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
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
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className=""
                  style={
                    {
                      width: "200px",
                      height: "80px",
                    }
                  }
                />
            </div>

            {/* Content */}
            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light">
                    {exp.title}
                  </h3>
                  <p className="text-md text-gray-600 dark:text-gray-300">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 md:text-right">
                  {exp.date}
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-justify">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
