import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Card, CardContent } from '../ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const Contact = () => {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:marnouxmanser@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`;
	};

	return (
		<div className='flex justify-center items-center mt-12'>
			<Card className='bg-background border-primary m-0 p-5 max-w-96'>
				<CardContent>
					<div className='flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center align-center'>
						<div className='flex flex-col space-y-5 md:space-y-25'>
							<div className='space-y-5 md:space-y-6'>
								<div className='flex items-center space-x-5 justify-center'>
									<PhoneIcon className='text-primary h-7 w-7 animate-pulse' />

									<p className='text-2xl'>+31 61 686 1777</p>
								</div>

								<div className='flex items-center space-x-5 justify-center'>
									<EnvelopeIcon className='text-primary h-7 w-7 animate-pulse' />

									<p className='text-2xl'>marnouxmanser@gmail.com</p>
								</div>

								<div className='flex items-center space-x-5 justify-center'>
									<MapPinIcon className='text-primary h-7 w-7 animate-pulse' />

									<p className='text-2xl'>Amsterdam, Netherlands</p>
								</div>
							</div>

							<form
								className='flex flex-col space-y-2 w-fit mx-auto sm:max-w-[50rem] lg:max-w-[90vw]'
								onSubmit={handleSubmit(onSubmit)}
							>
								<Input {...register('name')} className='bg-card' placeholder='Name ' type='text' />
								<Input
									{...register('email')}
									className='bg-card'
									placeholder='Email'
									type='email'
								/>
								<Input
									{...register('subject')}
									className='bg-card'
									placeholder='Subject'
									type='text'
								/>

								<Textarea
									{...register('message')}
									className='bg-card rounded-md p-2'
									placeholder='Message'
								/>

								<button type='submit' className='bg-primary py-2 px-3 rounded-md font-bold text-lg'>
									Submit
								</button>
							</form>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default Contact;
