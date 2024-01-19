const Hero = () => {
	return (
		<div className='flex items-center flex-col mt-8 gap-12 text-5xl mb-24'>
			<h1 className='text-8xl'>Hi, I'm Marnoux</h1>

			<img
				src='/headshot.png'
				className='h-64 w-64 rounded-full object-cover border border-primary animate-in'
			/>

			<h2>I blog about web development</h2>
		</div>
	);
};

export default Hero;
