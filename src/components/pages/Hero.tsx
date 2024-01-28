const Hero = () => {
	return (
		<div className='flex items-center flex-col mt-8 gap-12 text-5xl mb-24'>
			<h1 className='px-5 text-4xl'>Hi, I'm Marnoux</h1>
			<img
				src='/headshot.png'
				className='h-64 w-64 rounded-full object-cover border border-primary animate-in'
			/>

			<h2 className='text-base px-5'>I develop the web and write about it (sometimes)</h2>
		</div>
	);
};

export default Hero;
