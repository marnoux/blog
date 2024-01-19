import Posts from '../pages/Posts';
import Hero from '../pages/Hero';

const Home = () => {
	return (
		<div>
			<Hero />
			<Posts isFeatured />
		</div>
	);
};

export default Home;
