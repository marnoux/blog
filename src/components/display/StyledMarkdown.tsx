import Markdown from 'react-markdown';

const StyledMarkdown = ({ content }: { content: string }) => {
	return (
		<div className='flex flex-col items-center xs:px-12'>
			<div className='flex flex-col justify-center max-w-[1280px] gap-10 p-12 text-wrap'>
				<Markdown
					children={content}
					components={{
						h1: ({ ...props }) => <h1 className='text-7xl' {...props} />,
						h2: ({ ...props }) => <h2 className='text-6xl italic' {...props} />,
						h3: ({ ...props }) => <h3 className='text-left text-4xl' {...props} />,
						h4: ({ ...props }) => <h4 className='text-2xl' {...props} />,
						h5: ({ ...props }) => <h5 className='text-xl' {...props} />,
						h6: ({ ...props }) => <h6 className='text-lg' {...props} />,
						p: ({ ...props }) => <p className=' text-lg ' {...props} />,
						a: ({ ...props }) => <a className='text-base' {...props} />,
						ul: ({ ...props }) => <ul className='text-base' {...props} />,
						ol: ({ ...props }) => <ol className='text-base' {...props} />,
						li: ({ ...props }) => <li className='text-base' {...props} />,
						blockquote: ({ ...props }) => <blockquote className='text-base' {...props} />,
						code: ({ ...props }) => <code className='text-base' {...props} />,
						pre: ({ ...props }) => <pre className='text-base' {...props} />,
						img: ({ ...props }) => (
							<div className='flex justify-center'>
								<img className='h-96 ' {...props} />
							</div>
						),
					}}
				/>
			</div>
		</div>
	);
};

export default StyledMarkdown;
