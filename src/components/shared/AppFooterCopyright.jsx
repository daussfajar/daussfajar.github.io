function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light" style={
				{
					marginTop: '2.5rem',
					marginBottom: '2rem'
				}
			}>
				<p
					className="ml-1 duration-500"
					style={
						{
							fontSize: '0.9rem',
						}
					}
				>
					Created by <b>Fajar Firdaus</b> with <b>Tailwind CSS</b>
				</p>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
