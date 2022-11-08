import React from 'react';

const AboutSomePlaces = () => {
    return (
        <div>
            <section className="p-4 lg:p-8 bg-gray-100 text-gray-800">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://images.pexels.com/photos/1680214/pexels-photo-1680214.jpeg?cs=srgb&dl=pexels-zoosnow-1680214.jpg&fm=jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<h3 className="text-3xl font-bold">About zoo</h3>
				<p className="my-6 text-gray-600">A zoo is a facility in which animals are housed within enclosures, cared for, displayed to the public, and in some cases bred for conservation purposes. </p>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://luxurycolumnist.com/wp-content/uploads/2022/02/the-colosseum-rome-italy.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
				<h3 className="text-3xl font-bold">About history of old places</h3>
				<p className="my-6 text-gray-600">A historic site or heritage site is an official location where pieces of political, military, cultural, or social history have been preserved due to their cultural heritage value.</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default AboutSomePlaces;