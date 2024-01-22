import { Link } from 'react-router-dom';

const Footer = () => (
	<footer className='fixed bottom-0 left-0 z-20 bg-secondary border-t border-secondary shadow md:flex md:items-center md:justify-between w-screen flex items-center justify-between p-5'>
		<span className='flex items-center'>
			© {new Date().getFullYear()}
			{' by'}&nbsp;
			<a href='https://marnoux.dev/' className='hover:underline' target='_blank'>
				{' <Marnoux />'}
			</a>
		</span>
		<ul className='flex items-center text-sm font-medium'>
			<li className='flex justify-center items-center'>
				<a
					href='https://www.marnoux.dev/#about'
					target='_blank'
					className='hover:underline me-4 md:me-6'
				>
					About
				</a>
			</li>
			<Link to='/contact'>Contact</Link>
		</ul>
	</footer>
);

export default Footer;
