import React from 'react'
import Link from 'next/link'

const Portfolio = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
            <div className="bg-white h-5/6 md:w-3/3 lg:w-9/12 p-3 border rounded-3xl shadow-lg">
                <div className="font-semibold text-center h-full overflow-auto  w-full p-10">
                    <h1 className="text-3xl text-gray-700 tracking-wide">Portfolio</h1>
                    <Link href='/'>
                        <button className='text-sm bg-black text-gray-100 rounded-3xl px-3 py-1 mt-3 '>
                            ← Back
                        </button>
                    </Link>
                    <div className="container my-5 mx-auto">
                        <div className="flex flex-wrap -mx-1 lg:-mx-4">

                            { /* Column */}
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                { /* Article */}
                                <article className="overflow-hidden rounded-lg shadow-lg">

                                    <a href="#">
                                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                    </a>

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            <a className="no-underline hover:underline text-black" href="#">
                                                Project Name
                                            </a>
                                        </h1>
                                        <p className="text-grey-darker text-sm">
                                            18/02/22
                                        </p>
                                    </header>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                            <p className="ml-2 text-sm">
                                                Project Company
                                            </p>
                                        </a>
                                        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                            <span className="hidden">Like</span>
                                            <i className="fa fa-heart" />
                                        </a>
                                    </footer>

                                </article>
                                { /* END Article */}

                            </div>
                            { /* END Column */}

                            { /* Column */}
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                { /* Article */}
                                <article className="overflow-hidden rounded-lg shadow-lg">

                                    <a href="#">
                                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                    </a>

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            <a className="no-underline hover:underline text-black" href="#">
                                                Project Name
                                            </a>
                                        </h1>
                                        <p className="text-grey-darker text-sm">
                                            18/02/22
                                        </p>
                                    </header>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                            <p className="ml-2 text-sm">
                                                Project Company
                                            </p>
                                        </a>
                                        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                            <span className="hidden">Like</span>
                                            <i className="fa fa-heart" />
                                        </a>
                                    </footer>

                                </article>
                                { /* END Article */}

                            </div>
                            { /* END Column */}

                            { /* Column */}
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                { /* Article */}
                                <article className="overflow-hidden rounded-lg shadow-lg">

                                    <a href="#">
                                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                    </a>

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            <a className="no-underline hover:underline text-black" href="#">
                                                Project Name
                                            </a>
                                        </h1>
                                        <p className="text-grey-darker text-sm">
                                            18/02/22
                                        </p>
                                    </header>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                            <p className="ml-2 text-sm">
                                                Project Company
                                            </p>
                                        </a>
                                        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                            <span className="hidden">Like</span>
                                            <i className="fa fa-heart" />
                                        </a>
                                    </footer>

                                </article>
                                { /* END Article */}

                            </div>
                            { /* END Column */}

                            { /* Column */}
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                { /* Article */}
                                <article className="overflow-hidden rounded-lg shadow-lg">

                                    <a href="#">
                                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                    </a>

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            <a className="no-underline hover:underline text-black" href="#">
                                                Project Name
                                            </a>
                                        </h1>
                                        <p className="text-grey-darker text-sm">
                                            18/02/22
                                        </p>
                                    </header>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                            <p className="ml-2 text-sm">
                                                Project Company
                                            </p>
                                        </a>
                                        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                            <span className="hidden">Like</span>
                                            <i className="fa fa-heart" />
                                        </a>
                                    </footer>

                                </article>
                                { /* END Article */}

                            </div>
                            { /* END Column */}

                            { /* Column */}
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                { /* Article */}
                                <article className="overflow-hidden rounded-lg shadow-lg">

                                    <a href="#">
                                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                    </a>

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            <a className="no-underline hover:underline text-black" href="#">
                                                Project Name
                                            </a>
                                        </h1>
                                        <p className="text-grey-darker text-sm">
                                            18/02/22
                                        </p>
                                    </header>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                            <p className="ml-2 text-sm">
                                                Project Company
                                            </p>
                                        </a>
                                        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                            <span className="hidden">Like</span>
                                            <i className="fa fa-heart" />
                                        </a>
                                    </footer>

                                </article>
                                { /* END Article */}

                            </div>
                            { /* END Column */}

                            { /* Column */}
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                { /* Article */}
                                <article className="overflow-hidden rounded-lg shadow-lg">

                                    <a href="#">
                                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                    </a>

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            <a className="no-underline hover:underline text-black" href="#">
                                                Project Name
                                            </a>
                                        </h1>
                                        <p className="text-grey-darker text-sm">
                                            18/02/22
                                        </p>
                                    </header>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                            <p className="ml-2 text-sm">
                                                Project Company
                                            </p>
                                        </a>
                                        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                            <span className="hidden">Like</span>
                                            <i className="fa fa-heart" />
                                        </a>
                                    </footer>

                                </article>
                                { /* END Article */}

                            </div>
                            { /* END Column */}

                            { /* Column */}
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                { /* Article */}
                                <article className="overflow-hidden rounded-lg shadow-lg">

                                    <a href="#">
                                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                    </a>

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            <a className="no-underline hover:underline text-black" href="#">
                                                Project Name
                                            </a>
                                        </h1>
                                        <p className="text-grey-darker text-sm">
                                            18/02/22
                                        </p>
                                    </header>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                            <p className="ml-2 text-sm">
                                                Project Company
                                            </p>
                                        </a>
                                        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                            <span className="hidden">Like</span>
                                            <i className="fa fa-heart" />
                                        </a>
                                    </footer>

                                </article>
                                { /* END Article */}

                            </div>
                            { /* END Column */}

                            { /* Column */}
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                { /* Article */}
                                <article className="overflow-hidden rounded-lg shadow-lg">

                                    <a href="#">
                                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                    </a>

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            <a className="no-underline hover:underline text-black" href="#">
                                                Project Name
                                            </a>
                                        </h1>
                                        <p className="text-grey-darker text-sm">
                                            18/02/22
                                        </p>
                                    </header>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                            <p className="ml-2 text-sm">
                                                Project Company
                                            </p>
                                        </a>
                                        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                            <span className="hidden">Like</span>
                                            <i className="fa fa-heart" />
                                        </a>
                                    </footer>

                                </article>
                                { /* END Article */}

                            </div>
                            { /* END Column */}

                            { /* Column */}
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

                                { /* Article */}
                                <article className="overflow-hidden rounded-lg shadow-lg">

                                    <a href="#">
                                        <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                                    </a>

                                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                        <h1 className="text-lg">
                                            <a className="no-underline hover:underline text-black" href="#">
                                                Project Name
                                            </a>
                                        </h1>
                                        <p className="text-grey-darker text-sm">
                                            18/02/22
                                        </p>
                                    </header>

                                    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                        <a className="flex items-center no-underline hover:underline text-black" href="#">
                                            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                                            <p className="ml-2 text-sm">
                                                Project Company
                                            </p>
                                        </a>
                                        <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                                            <span className="hidden">Like</span>
                                            <i className="fa fa-heart" />
                                        </a>
                                    </footer>

                                </article>
                                { /* END Article */}

                            </div>
                            { /* END Column */}

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Portfolio