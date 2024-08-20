const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="w-64 py-5 px-10 rounded-lg mb-8 cursor-pointer"
				alt={title}
			/>
		</>
	);
};

export default AboutClientSingle;
