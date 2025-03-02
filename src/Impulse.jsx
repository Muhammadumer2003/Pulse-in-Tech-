import React from 'react'
import bground from "./assets/bg.png"

import bg2 from "./assets/_Image_ (6).png"
import bg3 from "./assets/_Group_ (5).png"
import bg4 from "./assets/dffk.png"
import bg5 from "./assets/trrk.png"
import bg1 from "./assets/_Image_ (7).png"

import bshape from "./assets/pngegg.png"

const Impulse = () => {

    const packet=[{
        title: 'Custom Design and Development',
        content: `We create unique, engaging, and user-centric 
        digital experiences that captivate customers and drive growth.`,
        image: bg1


    },{
        title: 'Marketing and SEO',
        content: 'We help businesses build strong online presence, drive traffic, and improve their search engine rankings.',
        image: bg2
    },

    {
        title: 'Customer Support and Maintenance',
        content: 'We offer ongoing maintenance and support to help businesses stay on top of their digital challenges.',
        image: bg3,
    },
    {
        title: 'Branding and Identity',
        content: 'We help businesses create memorable and recognizable branding materials, including logos, visuals, and marketing materials.',
        image: bg4,
    },
    {
        title: 'Data Analysis and Insights',
        content: 'We help businesses gain valuable insights into their performance, customer behavior, and market trends.',
        image: bg5,
    }
]
  return (
    <div className='w-full h-full'>

        <div className='min-h-24 sm:min-h-32 w-full bg-black'>
            <div className='flex justify-center items-center py-3 sm:py-4 gap-2 sm:gap-5'>
                <img src={bshape} alt="" className='h-12 sm:h-16 md:h-20' />
                <h1 className='text-xl sm:text-2xl md:text-3xl text-white py-3 sm:py-6'> THE SOLUTION</h1>
            </div>
        </div>

        <div className='min-h-56 bg-white'>
            <div className='relative px-4 sm:px-6 md:px-8'>
                <h1 className='text-center py-4 text-2xl sm:text-3xl font-bold'>Our Expertise<br/> 
                    <span className='text-yellow-400'>Our Success</span>
                </h1>
                <img src="src\assets\im.png" alt="" className='h-12 sm:h-16 md:h-20 absolute bottom-0 left-2 sm:left-5 hidden sm:block' />
            </div>

            <div className='flex flex-col items-center'>
                {
                    packet.map((e, index) => {
                        if(index % 2 === 0) {
                            return(
                                <div key={index} className='p-4 sm:p-8 md:p-16 flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-10'>
                                    <div
                                        className="border border-transparent p-3 sm:p-4 bg-gray-100 rounded-lg w-full md:w-auto"
                                        style={{ backgroundImage: `url(${bground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                    >
                                        <h1 className="font-bold text-lg sm:text-xl mb-2">{e.title}</h1>
                                        <p className="text-sm sm:text-base">
                                            {e.content}
                                        </p>
                                    </div>
                                    <img 
                                        src={e.image} 
                                        alt={e.title} 
                                        className='h-24 sm:h-28 md:h-36 mt-4 md:mt-0'
                                    />
                                </div>
                            )
                        } else {
                            return(
                                <div key={index} className='p-4 sm:p-8 md:p-16 flex flex-col-reverse md:flex-row items-center gap-4 sm:gap-6 md:gap-10'>
                                    <img 
                                        src={e.image} 
                                        alt={e.title} 
                                        className='h-24 sm:h-28 md:h-36 mt-4 md:mt-0'
                                    />
                                    <div
                                        className="border border-solid border-yellow-500/100 p-3 sm:p-4 bg-gray-100 rounded-lg bg-white w-full md:w-auto"
                                    >
                                        <h1 className="font-bold text-lg sm:text-xl mb-2">{e.title}</h1>
                                        <p className="text-sm sm:text-base">
                                            {e.content}
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Impulse