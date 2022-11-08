import React from 'react';
import { Link } from 'react-router-dom';

const Photography = () => {
    return (
        <section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
		<div className="flex flex-col justify-center p-2 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">
                Travellian photography contest
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">
            Travel photography is a genre of photography that may involve the documentation of an area's landscape, people, cultures, customs, and history.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-primary text-gray-50">Join contest</Link>
				<Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-primary">About contest</Link>
			</div>
		</div>
	</div>
</section>
    );
};

export default Photography;