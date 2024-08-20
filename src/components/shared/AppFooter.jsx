import {
	FiGithub,
	FiLinkedin,
	FiFacebook,
	FiInstagram,
	FiDribbble,
} from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/daussfajar',
	},
	{
		id: 2,
		icon: <FiFacebook />,
		url: 'https://www.facebook.com/daus.tersenyum/',
	},
	{
		id: 3,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/daussfajar28/',
	},
	{
		id: 4,
		icon: <FiInstagram />,
		url: 'https://www.instagram.com/daussfajar28/',
	},
	{
		id: 5,
		icon: <FiDribbble />,
		url: 'https://dribbble.com/daussfajar28',
	}
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-0 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-12">
					<p className="text-3xl sm:text-3xl text-primary-dark dark:text-primary-light mb-8">
						Let's connect
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
