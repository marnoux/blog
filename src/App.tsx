import { Route, Routes } from 'react-router-dom';
import Home from './components/layout/Home';
import Contact from './components/pages/Contact';
import Posts from './components/pages/Posts';
import Navbar from './components/layout/Navbar';
import Post from './components/pages/Post';
import Footer from './components/layout/Footer';

const App = () => {
	return (
		<div className={`overflow-x-hidden h-screen`}>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/posts' element={<Posts isFeatured={false} />} />
				<Route path='/posts/:id' element={<Post />} />
			</Routes>
			<div className='my-8'></div>
			<Footer />
		</div>
	);
};

export default App;
