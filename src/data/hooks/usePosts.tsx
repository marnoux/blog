import { url } from '@/constants/data';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const usePosts = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['todos'],
		queryFn: () => axios.get(`${url}/api/collections/posts/records`).then((res) => res.data),
	});

	return { data, isLoading };
};

export default usePosts;
