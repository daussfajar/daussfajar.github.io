import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import LogoErajaya from '../images/companies/Logo_Erajaya.png';
import LogoUPJ from '../images/companies/LogoUPJ_HD.png';
import LogoPGI from '../images/companies/logoHD_PGI.png';
import LogoTM from '../images/companies/logotm.png';
import LogoIDS from '../images/companies/ids.png';

const Experience = () => (
<section className="container mx-auto">
	<div className="flex items-center mb-8">
		<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
			<Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
		</div>
		<h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
			Work Experience
		</h2>
	</div>

	<div className="space-y-6">
		<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
			{/* Wrapper */}
			<div className="flex flex-col sm:flex-row sm:justify-between gap-6">

				{/* Kiri: Logo + Detail */}
				<div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
					{/* Logo */}
					<div className="w-36 h-12 bg-gradient-to-br from-white to-gray-100 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 shadow-sm" style={{ width: '150px' }}>
						<img src={LogoPGI} alt="PGI Logo" className="w-12 h-12 object-contain p-3" />
					</div>

					{/* Teks dengan urutan yang benar */}
					<div className="text-center sm:text-left flex-1">
						{/* 1. Posisi */}
						<h3 className="text-xl font-bold text-gray-900 dark:text-white">
							Backend Developer
						</h3>
						
						{/* 2. Nama PT */}
						<p className="text-gray-600 dark:text-gray-300 font-medium mt-1">
							Pusat Gadai Indonesia
						</p>
						
						{/* 3. Tanggal Bekerja & Lokasi */}
						<p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-2">
							Apr 2025 - Present • West Jakarta, Indonesia
						</p>
						
						{/* 4. Deskripsi */}
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed" style={{maxWidth:'700px'}}>
							As a Backend Developer at Pusat Gadai Indonesia, I am responsible for designing, developing, and maintaining the backend infrastructure of the General Affairs (GA) system. By leveraging technologies such as JWT implementing secure authentication mechanisms, and ensuring smooth data integration across internal systems. I collaborate closely with cross-functional teams to streamline operational workflows, particularly in asset management, procurement, and internal support processes.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mt-6">
			{/* Wrapper */}
			<div className="flex flex-col sm:flex-row sm:justify-between gap-6">

				{/* Kiri: Logo + Detail */}
				<div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
					{/* Logo */}
					<div className="w-36 h-12 bg-gradient-to-br from-white to-gray-100 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 shadow-sm" style={{ width: '150px' }}>
						<img src={LogoErajaya} alt="Erajaya Logo" className="w-12 h-12 object-contain p-2" />
					</div>

					{/* Teks dengan urutan yang benar */}
					<div className="text-center sm:text-left flex-1">
						{/* 1. Posisi */}
						<h3 className="text-xl font-bold text-gray-900 dark:text-white">
							Fullstack Developer
						</h3>
						
						{/* 2. Nama PT */}
						<p className="text-gray-600 dark:text-gray-300 font-medium mt-1">
							PT Erajaya Swasembada, Tbk
						</p>
						
						{/* 3. Tanggal Bekerja & Lokasi */}
						<p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-2">
							Dec 2024 - Apr 2025 • West Jakarta, Indonesia
						</p>
						
						{/* 4. Deskripsi */}
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed" style={{maxWidth: '700px'}}>
							As a GA Supervisor & Fullstack Developer (Sub Unit System Support), I am responsible for overseeing and optimizing GA Systems, including monitoring, troubleshooting, and performance enhancements. I design, develop, and maintain applications and databases to support internal needs while ensuring seamless system functionality. My role also involves managing the installation, configuration, and maintenance of both software and hardware infrastructure. Furthermore, I ensure that all systems comply with security standards and company policies to maintain a secure and reliable IT environment.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mt-6">
			{/* Wrapper */}
			<div className="flex flex-col sm:flex-row sm:justify-between gap-6">

				{/* Kiri: Logo + Detail */}
				<div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
					{/* Logo */}
					<div className="w-36 h-12 bg-gradient-to-br from-white to-gray-100 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 shadow-sm" style={{ width: '150px' }}>
						<img src={LogoUPJ} alt="UPJ Logo" className="w-12 h-12 object-contain p-2" />
					</div>

					{/* Teks dengan urutan yang benar */}
					<div className="text-center sm:text-left flex-1">
						{/* 1. Posisi */}
						<h3 className="text-xl font-bold text-gray-900 dark:text-white">
							Fullstack Developer
						</h3>
						
						{/* 2. Nama PT */}
						<p className="text-gray-600 dark:text-gray-300 font-medium mt-1">
							Universitas Pembangunan Jaya
						</p>
						
						{/* 3. Tanggal Bekerja & Lokasi */}
						<p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-2">
							Oct 2019 - Dec 2024 • South Tangerang, Indonesia
						</p>
						
						{/* 4. Deskripsi */}
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed" style={{ maxWidth: '700px' }}>
							Working at Universitas Pembangunan Jaya as a Full-Stack Developer, my responsibilities include building new systems as needed, as well as developing and maintaining various features for existing applications. I am involved in both front-end and back-end development, ensuring seamless integration between user interfaces and server-side functionalities.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 mt-6">
			{/* Wrapper */}
			<div className="flex flex-col sm:flex-row sm:justify-between gap-6">

				{/* Kiri: Logo + Detail */}
				<div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
					{/* Logo */}
					<div className="w-36 h-12 bg-gradient-to-br from-white to-gray-100 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 shadow-sm" style={{ width: '150px' }}>
						<img src={LogoIDS} alt="IDS Logo" className="w-12 h-12 object-contain p-2" />
					</div>

					{/* Teks dengan urutan yang benar */}
					<div className="text-center sm:text-left flex-1">
						{/* 1. Posisi */}
						<h3 className="text-xl font-bold text-gray-900 dark:text-white">
							Junior Programmer
						</h3>
						
						{/* 2. Nama PT */}
						<p className="text-gray-600 dark:text-gray-300 font-medium mt-1">
							PT Inovasi Dinamika Solusi
						</p>
						
						{/* 3. Tanggal Bekerja & Lokasi */}
						<p className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-2">
							May 2019 - Jun 2019 • East Jakarta, Indonesia
						</p>
						
						{/* 4. Deskripsi */}
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed" style={{ maxWidth: '700px' }}>
							I worked in this company as a Fullstack Web Developer, responsible for developing and maintaining RESTful APIs to support various web applications. My role involved designing efficient backend logic, ensuring seamless integration between frontend and backend systems, optimizing database queries, and collaborating with the team to enhance system performance. Additionally, I contributed to debugging, troubleshooting, and improving existing features to align with business requirements.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
);

const Education = () => (
<section className="container mx-auto mt-12">
	<div className="flex items-center mb-8">
		<div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
			<GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
		</div>
		<h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
			Education
		</h2>
	</div>

	<div className="space-y-6 mt-5">
		<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
			{/* Wrapper */}
			<div className="flex flex-col sm:flex-row sm:justify-between gap-6">

				{/* Kiri: Logo + Detail */}
				<div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
					{/* Logo */}
					<div
						className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
						<img src={LogoUPJ} alt="UPJ Logo" className="w-24 h-12 object-contain" />
					</div>

					{/* Teks */}
					<div className="text-center sm:text-left">
						<h3 className="text-xl font-bold text-gray-900 dark:text-white">
							Bachelor of Computer Science
						</h3>
						<p className="text-gray-600 dark:text-gray-300 font-medium">
							Universitas Pembangunan Jaya
						</p>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
							Studying Computer Science with focus on software development and web technologies.
						</p>
					</div>
				</div>

				{/* Kanan: Tanggal & Lokasi */}
				<div className="flex flex-col items-center sm:items-end">
					<span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
						2020 - 2024
					</span>
					<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 mt-2">
						Completed
					</span>
				</div>
			</div>
		</div>
	</div>

	<div className="space-y-6 mt-5">
		<div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
			{/* Wrapper */}
			<div className="flex flex-col sm:flex-row sm:justify-between gap-6">

				{/* Kiri: Logo + Detail */}
				<div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
					{/* Logo */}
					<div
						className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
						<img src={LogoTM} alt="TM Logo" className="w-24 h-12 object-contain" />
					</div>

					{/* Teks */}
					<div className="text-center sm:text-left">
						<h3 className="text-xl font-bold text-gray-900 dark:text-white">
							Software Engineering Major
						</h3>
						<p className="text-gray-600 dark:text-gray-300 font-medium">
							SMK Tunas Media
						</p>
						<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
							Focusing on software development and programming languages.
						</p>
					</div>
				</div>

				{/* Kanan: Tanggal & Lokasi */}
				<div className="flex flex-col items-center sm:items-end">
					<span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
						2017 - 2020
					</span>
					<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 mt-2">
						Completed
					</span>
				</div>
			</div>
		</div>
	</div>
</section>
);

const Resume = () => {
const containerVariants = {
hidden: { opacity: 0, y: 20 },
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.6,
staggerChildren: 0.2
}
}
};

const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.5 }
}
};

return (
<div className="min-h-screen py-8 lg:py-12">
	<motion.div initial="hidden" animate="visible" variants={containerVariants}
		className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
		{/* Header */}
		<motion.div variants={itemVariants} className="text-center mb-12 lg:mb-16">
			<h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-5">
				My Resume
			</h1>
			<p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
				A comprehensive overview of my professional experience, education, and skills
			</p>
		</motion.div>

		{/* Content */}
		<motion.div variants={itemVariants}>
			<Experience />
		</motion.div>

		<motion.div variants={itemVariants}>
			<Education />
		</motion.div>
	</motion.div>
</div>
);
};

export default Resume;