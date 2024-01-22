import { Link } from 'react-router-dom';
import { ModeToggle } from '../ui/mode-toggle';
import { SocialIcon } from 'react-social-icons';
import { HomeIcon } from 'lucide-react';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	// DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '../ui/button';
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuTrigger,
	NavigationMenuContent,
	NavigationMenuLink,
} from '../ui/navigation-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const Navbar = () => {
	const socialLinks = [
		'https://linkedin.com/in/marnouxm',
		'https://github.com/marnoux',
		'https://instagram.com/marnouxm',
		'https://twitter.com/MarnouxM',
	];

	return (
		<>
			<NavigationMenu className='flex items-center justify-between pb-4 border-b mt-4 px-4 right-1 w-full'>
				<NavigationMenuList>
					<NavigationMenuItem className='flex items-center justify-center'>
						<Link className='hidden md:flex' to='/'>
							<img
								className='sm:px-5 border border-primary animate-ping animate-out rounded-full py-2'
								src='/logo.png'
								alt='logo'
							/>
						</Link>

						<Drawer>
							<DrawerTrigger>
								<Button className='md:hidden dark:bg-transparent'>
									<HamburgerMenuIcon />
								</Button>
							</DrawerTrigger>
							<DrawerContent className='h-screen px-5'>
								<DrawerHeader>
									<DrawerTitle>Marnoux's blog</DrawerTitle>
								</DrawerHeader>

								<Link to='/' className='flex items-center p-0 m-0'>
									<DrawerClose>
										<span className='flex items-center gap-3'>
											<HomeIcon className='h-8 w-8' />
											Home
										</span>
									</DrawerClose>
								</Link>
								<DrawerFooter>
									<DrawerClose>
										<Button variant='outline'>Close</Button>
									</DrawerClose>
								</DrawerFooter>
							</DrawerContent>
						</Drawer>
					</NavigationMenuItem>
					<NavigationMenuItem className='hidden md:flex items-center justify-center'>
						{socialLinks.map((link) => (
							<NavigationMenuLink key={link}>
								<SocialIcon
									className='fg-secondary accent-secondary'
									url={link}
									bgColor='none'
									fgColor='bg-secondary'
									target='_blank'
								/>
							</NavigationMenuLink>
						))}
					</NavigationMenuItem>
					<NavigationMenuItem className='md:hidden'>
						<NavigationMenuTrigger>Socials</NavigationMenuTrigger>
						<NavigationMenuContent className='flex p-2 pb-5 gap-5'>
							{socialLinks.map((link) => (
								<NavigationMenuLink key={link}>
									<SocialIcon url={link} target='_blank' />
								</NavigationMenuLink>
							))}
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
				<NavigationMenuList className='right-2'>
					<NavigationMenuItem className='flex gap-5 items-center sm:text-sm md:text-xl'>
						<Link to='/posts' className='hover:underline'>
							Posts
						</Link>
						<Link to='/contact' className='hover:underline'>
							Contact
						</Link>
						<ModeToggle />
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
};

export default Navbar;
