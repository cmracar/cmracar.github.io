import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <>
            <Head>
                <title>Cemre Acar - About</title>
                <meta name="description" content="Cemre Acar - About | Cemre Acar's digital resume" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
                <div className="bg-white h-5/6 md:w-3/3 lg:w-9/12 p-3 border rounded-3xl shadow-lg">
                    <div className="font-semibold h-full overflow-auto w-full sm:p-3 md:p-20">

                        <div className="text-center mb-5">
                            <h1 className="text-3xl text-gray-500 tracking-wide">About</h1>
                            <Link href='/'>
                                <button className='text-sm bg-black text-gray-100 rounded-3xl px-3 py-1 mt-3 '>
                                    ← Back
                                </button>
                            </Link>
                        </div>

                        <div className="flex rounded-3xl justify-center content-center">
                            <div className="rounded-3xl w-full">
                                { /* header (profile) */}
                                <header>
                                    { /* social icons*/}
                                    <ul className="flex flex-wrap justify-end gap-2">
                                        <li>
                                            { /* medium */}
                                            <a href="https://medium.com/@cmracar" title="Medium" className="bg-black p-2 font-medium text-white inline-flex items-center space-x-2 rounded" target="\u201D_blank\u201D">
                                                <svg className="w-5 h-5" viewBox="0 -55 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                                                    <g>
                                                        <path className="fill-white" d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z" fill="#000000" />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>

                                        { /* linkedin */}
                                        <li>
                                            <a href="https://www.linkedin.com/in/cmracar/" title="LinkedIn" className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded" target="\u201D_blank\u201D">
                                                <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055">
                                                        </path>
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            { /* github */}
                                            <a href="https://github.com/cmracar" title="GitHub" className="bg-gray-700 p-2 font-medium text-white inline-flex items-center space-x-2 rounded" target="\u201D_blank\u201D">
                                                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                    <g fill="none">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between items-center">
                                        <div className="mx-2">
                                            <div className="bg-cover bg-no-repeat border rounded-full h-32 w-32" style={{ backgroundImage: "url(https://avatars.githubusercontent.com/u/35954709?v=4)" }}>
                                            </div>
                                        </div>
                                        <div className="grid justify-items-end">
                                            <h1 className="text-5xl font-extrabold">Cemre ACAR</h1>
                                            <p className="text-xl mt-3">Front-End Developer</p>
                                        </div>
                                    </div>
                                </header>
                                { /* detailed info */}
                                <main className="flex gap-x-10 mt-10">
                                    <div className="w-2/6">

                                        { /* contact details */}
                                        <strong className="text-xl font-medium">Contact Details</strong>
                                        <ul className="mt-2 mb-10">
                                            <li className="px-3 mt-2">
                                                <p className="mr-3 text-base">Working</p>
                                                <p className="font-light text-sm">Active, <u>Carbon Consulting</u></p>
                                            </li>
                                            <li className="px-3 mt-2">
                                                <p className="mr-3 text-base">Location</p>
                                                <span className="block font-light text-sm">İzmir, Turkey</span>
                                            </li>
                                        </ul>

                                        { /* skills */}
                                        <strong className="text-xl font-medium">Skills</strong>
                                        <ul className="mt-2 mb-10">
                                            <li className="px-3 mt-2 text-sm">
                                                <span className="text-red-500 text-base">⬤</span> HTML
                                            </li>
                                            <li className="px-3 mt-2 text-sm">
                                                <span className="text-blue-700 text-base">⬤</span> CSS
                                            </li>
                                            <li className="px-3 mt-2 text-sm">
                                                <span className="text-yellow-500 text-base">⬤</span> Javascript
                                            </li>
                                            <li className="px-3 mt-2 text-sm">
                                                <span className="text-red-700 text-base">⬤</span> Typescript
                                            </li>
                                            <li className="px-3 mt-2 text-sm">
                                                <span className="text-blue-600 text-base">⬤</span> Python
                                            </li>
                                            <li className="px-3 mt-2 text-sm">
                                                <span className="text-blue-400 text-base">⬤</span> React
                                            </li>
                                            <li className="px-3 mt-2 text-sm">
                                                <span className="text-gray-300 text-base">⬤</span> NextJS
                                            </li>
                                            <li className="px-3 mt-2 text-sm">
                                                <span className="text-purple-500 text-base">⬤</span> Redux Toolkit
                                            </li>
                                            <li className="px-3 mt-2 text-sm">
                                                <span className="text-blue-800 text-base">⬤</span> Tailwind
                                            </li>
                                        </ul>

                                        {/* side skills */}
                                        <strong className="text-xl font-medium">Side Skills</strong>
                                        <ul className="mt-2 mb-10 text-sm font-light">
                                            <li className="px-3 mt-2">Data Visualization with Highcharts</li>
                                            <li className="px-3 mt-2">UI/UX Design with Figma</li>
                                            <li className="px-3 mt-2">Experience VCS Github, GitLab etc.</li>
                                            <li className="px-3 mt-2">CI/CD Knowlodge - Github Actions</li>
                                            <li className="px-3 mt-2">Docker</li>
                                            <li className="px-3 mt-2">Jira, ClickUp, Trello</li>
                                            <li className="px-3 mt-2">Linux/UNIX Shell Script</li>
                                        </ul>

                                        {/* hobbies */}
                                        <strong className="text-xl font-medium">Interests & Hobbies</strong>
                                        <ul className="mt-2 text-sm font-light">
                                            <li className="px-3 mt-2">Nature</li>
                                            <li className="px-3 mt-2">Music</li>
                                            <li className="px-3 mt-2">Capital Markets</li>
                                        </ul>

                                    </div>
                                    { /* info */}
                                    <div className="w-4/6">
                                        <section>
                                            { /* about me */}
                                            <h2 className="text-2xl pb-1 border-b font-semibold">About</h2>
                                            <p className="mt-4 font-light text-md">
                                                I am a Front-End Developer. I graduated from Izmir University of Economics Computer Engineering in early 2022 with a bachelor's degree.
                                                In short, he is a computer engineer who likes to design, has a high business awareness, is responsible and tries to do his job in the best way.
                                            </p>

                                        </section>
                                        <section>
                                            { /* projects */}
                                            <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Projects</h2>
                                            <div className="text-center">
                                                <Link href="/portfolio">
                                                    <button className="bg-gradient-to-br from-red-600 to-indigo-800 px-6 text-gray-100 text-center text-base font-semibold py-2 rounded-3xl mt-6">
                                                        Show Portfolio for All Projects
                                                    </button>
                                                </Link>

                                            </div>

                                        </section>
                                        <section>
                                            { /* work experiences */}
                                            <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Work Experiences</h2>
                                            <ul className="mt-2">
                                                <li className="pt-2">
                                                    <div className="flex justify-between items-center text-md">
                                                        <p className="text-base items-center">Carbon Consulting</p>2021 - Now
                                                    </div>
                                                    <div className="flex justify-between font-light items-center text-sm mb-1">Front-End Developer<small>Remote</small></div>
                                                    <p className="text-justify text-xs font-light">
                                                        Creation of manifold AI products within the company, software solutions/software developments for Turkcell (I work as a consultant) and various companies.
                                                        Also I work on Glosa NLP which is the key subsidiary of Carbon Consulting concentrated on AI solutions.
                                                    </p>
                                                </li>
                                                <li className="pt-2">
                                                    <div className="flex justify-between items-center text-md">
                                                        <p className="text-base items-center">Oley.com</p>2020 - 2021
                                                    </div>
                                                    <div className="flex justify-between font-light items-center text-sm mb-1">Full-Stack Developer<small>Remote</small></div>
                                                    <p className="text-justify text-xs font-light">
                                                        Software solutions and improvements with Django & Angular.
                                                    </p>
                                                </li>
                                            </ul>
                                        </section>
                                        <section>
                                            { /* education */}
                                            <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">Education</h2>
                                            <ul className="mt-2">
                                                <li className="pt-2">
                                                    <div className="flex justify-between items-center text-md"><span className="text-base">İzmir University of Economics</span>2017 - 2021</div>
                                                    <div className="flex justify-between items-center text-sm font-light">Computer Engineering<small>Bachelor Degree</small></div>
                                                </li>
                                                <li className="pt-2">
                                                    <div className="flex justify-between items-center text-md"><span className="text-base">İzmir University of Economics</span>2014 - 2016</div>
                                                    <div className="flex justify-between items-center text-sm font-light">Computer Programming<small>Associate Degree</small></div>
                                                </li>
                                            </ul>
                                        </section>
                                    </div>
                                </main>
                                { /* short lines to introduce myself */}
                                <footer className="mt-6">
                                    <div className="bg-gradient-to-br from-red-600 to-indigo-800 rounded-b-3xl text-white text-center text-sm p-3">
                                        <p>If you don't have the heart to bring what's on your mind to life, your life will be spent gossiping about brave people.</p>
                                        <small className="text-center">- Socrates</small>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About
