import { Link } from 'react-router-dom';
import { ModeToggle } from '../ui/mode-toggle';
import { FileIcon } from '@radix-ui/react-icons';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
	const socialLinks = [
		'https://linkedin.com/in/marnouxm',
		'https://github.com/marnoux',
		'https://instagram.com/marnouxm',
		'https://twitter.com/MarnouxM',
	];

	return (
		<header className='flex items-center justify-between md:px-24 sm:px-2 pb-4 border-b mt-2'>
			<div className='flex gap-12'>
				<Link to='/' className='flex items-center p-0 m-0 gap-2'>
					<FileIcon className='h-8 w-8' />
					<h1 className='text-4xl hover:cursor-pointer p-0 m-0'>Marnoux's Blog</h1>
				</Link>
				<div className='flex gap-2'>
					{socialLinks.map((link) => (
						<SocialIcon
							key={link}
							bgColor='transparent'
							fgColor='gray'
							url={link}
							target='_blank'
						/>
					))}
				</div>
			</div>
			<div className='flex gap-5 items-center text-xl'>
				<Link to='/posts' className='hover:underline'>
					Posts
				</Link>
				<Link to='/contact' className='hover:underline'>
					Contact
				</Link>
				<ModeToggle />
			</div>
		</header>
	);
};

export default Navbar;
