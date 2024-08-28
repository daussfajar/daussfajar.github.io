const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="w-64 py-5 px-10 rounded-lg mb-8"
				alt={title}
				style={{
					objectFit: 'contain',
				}}
			/>
		</>
	);
};

export default AboutClientSingle;
