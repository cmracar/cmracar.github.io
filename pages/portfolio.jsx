import React from 'react'
import Link from 'next/link'

const Portfolio = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
            <div className="bg-white h-5/6 md:w-3/3 lg:w-9/12 p-3 border rounded-3xl shadow-lg">
                <div className="font-semibold text-center h-full overflow-auto  w-full p-20">
                    <h1 className="text-3xl text-gray-500 tracking-wide">Portfolio</h1>
                    <Link href='/'>
                        <button className='text-sm bg-black text-gray-100 rounded-3xl px-3 py-1 mt-3 '>
                            ← Back
                        </button>
                    </Link>
                    <div className="container my-5 mx-auto">
                        Projects will appear soon!
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Portfolio