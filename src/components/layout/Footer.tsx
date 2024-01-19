import { Link } from 'react-router-dom';

const Footer = () => (
	<footer className='fixed bottom-0 left-0 z-20 w-full p-4 bg-secondary border-t border-secondary shadow md:flex md:items-center md:justify-between md:p-4'>
		<span>
			© {new Date().getFullYear()}
			{` `}
			<a href='https://marnoux.dev/' className='hover:underline' target='_blank'>
				by {'<Marnoux />'}
			</a>
		</span>
		<ul className='flex flex-wrap items-center mt-3 text-sm font-medium  sm:mt-0'>
			<li>
				<a
					href='https://www.marnoux.dev/#about'
					target='_blank'
					className='hover:underline me-4 md:me-6'
				>
					About
				</a>
			</li>
			<Link to='/contact'>
				<a href='#' className='hover:underline'>
					Contact
				</a>
			</Link>
		</ul>
	</footer>
);

export default Footer;
