import usePosts from '@/data/hooks/usePosts';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { format } from 'date-fns';
import { url } from '@/constants/data';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

const Posts = ({ isFeatured }: { isFeatured: boolean }) => {
	const { data: posts } = usePosts();

	if (isEmpty(posts?.items)) return;

	return (
		<div className='bg-primary flex items-center flex-col gap-12 p-0 text-5xl h-screen'>
			<h1 className='text-7xl text-primary-foreground mt-8'>{`${
				isFeatured ? 'Featured' : 'All'
			} Posts`}</h1>
			<div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-2 px-8 mb-8'>
				{posts?.items.map(
					(item: {
						id: string;
						date: Date;
						image: string;
						subtitle: string;
						title: string;
						collectionId: string;
					}) => {
						const { id, date, image, subtitle, title, collectionId } = item;

						return (
							<Card key={id} className={`hover:cursor-pointer border-primary border-4 shadow-lg`}>
								<Link to={`/posts/${id}`}>
									<CardHeader>
										<CardTitle className='text-2xl'>{title}</CardTitle>
										<CardDescription>{format(date, 'yyyy-MM-dd')}</CardDescription>
									</CardHeader>
									<CardContent className='h-64'>
										<img
											alt={`Image for ${id}`}
											src={`${url}/api/files/${collectionId}/${id}/${image}`}
											className='w-full h-full object-cover'
										/>
									</CardContent>
									<CardFooter className='text-lg'>
										<p>{subtitle}</p>
									</CardFooter>
								</Link>
							</Card>
						);
					},
				)}
			</div>
		</div>
	);
};

export default Posts;
