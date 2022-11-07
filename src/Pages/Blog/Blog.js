import React from 'react';

const Blog = () => {
    return (
        <section className="bg-gray-100 text-gray-800 my-10">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Our Blogs</h2>
		<div className="divide-y divide-gray-300">
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">1. What difference between SQL and nonSQL</h3>
				<p className="md:pl-0 md:col-span-7">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them)
                    <br />
                    NoSQL database technology stores information in JSON documents instead of columns and rows used by relational databases
                </p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">2. What is JWT, and how does it work?</h3>
				<p className="md:pl-0 md:col-span-7">JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims.

                The token is mainly composed of header, payload, signature. These three parts are separated by dots(.). A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange. </p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">3. What is the difference between javascript and NodeJS?</h3>
				<p className="md:pl-0 md:col-span-7">Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. <br />
                Node js: NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">4. How does NodeJS handle multiple requests at the same time?</h3>
				<p className="md:pl-0 md:col-span-7"><code>
                Node.js runs JavaScript code in a single thread, which means that your code can only do one task at a time. However, Node. js itself is multithreaded and provides hidden threads through the libuv library, which handles I/O operations like reading files from a disk or network requests
                </code>
</p>
			</div>
		</div>
	</div>
</section>
    );
};

export default Blog;