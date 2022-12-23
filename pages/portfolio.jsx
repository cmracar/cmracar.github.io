import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>Cemre Acar - Portfolio</title>
                <meta name="description" content="Cemre Acar - Portfolio | Cemre Acar's all projects" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
                <div className="bg-white h-5/6 md:w-3/3 lg:w-9/12 p-3 border rounded-3xl shadow-lg">
                    <div className="font-semibold text-center h-full overflow-auto  w-full sm:p-3 md:p-20">
                        <h1 className="text-3xl text-gray-500 tracking-wide">Portfolio</h1>
                        <Link href='/'>
                            <button className='text-sm bg-black text-gray-100 rounded-3xl px-3 py-1 mt-3 '>
                                ← Back
                            </button>
                        </Link>
                        <div className="container my-5 mx-auto">


                            <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">

                                { /*Card*/}
                                <div className="rounded-b overflow-hidden shadow-lg border-t-2 border-t-black-500 mb-3">
                                    <img className="object-contain h-48 w-full" src="data:image/png;base64,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" alt="Turkcell" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">TBot Analytic Screens UI</div>
                                        <div className="font-semibold text-gray-500 text-sm mb-2">Turkcell</div>
                                        <p className="text-gray-800 text-sm font-light">
                                            Developing analytical screens in the TBot UI project during my consultancy to Turkcell
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">HTML</span>
                                        <span className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">CSS</span>
                                        <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">React</span>
                                        <span className="inline-block bg-red-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Highcharts</span>
                                    </div>
                                </div>
                                { /*Card*/}

                                { /*Card*/}
                                <div className="rounded-b overflow-hidden shadow-lg border-t-2 border-t-black-500 mb-3">
                                    <img className="object-contain h-48 w-full" src="https://glosa.ai/assets/G.png" alt="Glosa NLP" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">Glosa NLP UI</div>
                                        <div className="font-semibold text-gray-500 text-sm mb-2">Carbon Consulting</div>
                                        <p className="text-gray-800 text-sm font-light">
                                            Developing the UI of Glosa, a subsidiary of the company, during working at Carbon Consulting.
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">HTML</span>
                                        <span className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">CSS</span>
                                        <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">React</span>
                                        <span className="inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Context API</span>
                                    </div>
                                </div>
                                { /*Card*/}


                                { /*Card*/}
                                <div className="rounded-b overflow-hidden shadow-lg border-t-2 border-t-black-500 pt-2 px-2 mb-3">
                                    <img className="object-contain h-48 w-full" src="https://diasndt.com/public/upload/logo.png" alt="DiasNDT" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">DiasNDT Website</div>
                                        <div className="font-semibold text-gray-500 text-sm mb-2">DiasNDT</div>
                                        <p className="text-gray-800 text-sm font-light">
                                            Development of the DiasNDT website
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">HTML</span>
                                        <span className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">CSS</span>
                                        <span className="inline-block bg-green-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Django</span>
                                    </div>
                                </div>
                                { /*Card*/}


                                { /*Card*/}
                                <div className="rounded-b overflow-hidden shadow-lg border-t-2 border-t-black-500 pt-2 px-2 mb-3">
                                    <img className="object-contain h-48 w-full" src="https://aathukuk.com/static/images/aat-hukuk-logo1.png" alt="AAT Hukuk" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">AAT Hukuk Website</div>
                                        <div className="font-semibold text-gray-500 text-sm mb-2">AAT Hukuk</div>
                                        <p className="text-gray-800 text-sm font-light">
                                            Development of the AAT Hukuk website
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">HTML</span>
                                        <span className="inline-block bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">CSS</span>
                                        <span className="inline-block bg-green-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2">Django</span>
                                    </div>
                                </div>
                                { /*Card*/}

                            </div>



                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Portfolio