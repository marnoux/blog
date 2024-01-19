import App from '@/App';
import Contact from '@/components/pages/Contact';
import Post from '@/components/pages/Post';
import Posts from '@/components/pages/Posts';
import ErrorPage from '@/error-page';

export const routes = [
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: 'posts',
				element: <Posts isFeatured={false} />,
			},
			{
				path: 'posts/:id',
				element: <Post />,
			},
		],
	},
];
