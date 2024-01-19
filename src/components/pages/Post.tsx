import { url } from '@/constants/data';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { isEmpty } from 'lodash';
import StyledMarkdown from '../display/StyledMarkdown';

const Post = () => {
	const { id } = useParams();

	const { data } = useQuery({
		queryKey: ['todos'],
		queryFn: () => axios.get(`${url}/api/collections/posts/records/${id}`).then((res) => res.data),
	});

	if (isEmpty(data?.content)) return;

	return <StyledMarkdown content={data?.content} />;
};

export default Post;
