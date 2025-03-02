import React from 'react'
import bground from "./assets/bg.png"

import bg2 from "./assets/_Image_ (6).png"
import bg3 from "./assets/_Group_ (5).png"
import bg4 from "./assets/dffk.png"
import bg5 from "./assets/trrk.png"
import bg1 from "./assets/_Image_ (7).png"

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


        <div className='min-h-32 w-full bg-black'>

            <div className='flex justify-center items-center py-4 gap-5'>
                <img src="src\assets\pngegg.png" alt="" className='h-20 '/>
                <h1 className='text-3xl text-white  py-6'> THE SOLUTION</h1>
            </div>
           

        </div>

        <div className='min-h-56 bg-white'>

            <div className='relative'>
                <h1 className='text-center py-4 text-3xl font-bold'>Our Expertise<br/> 
                    <span className='text-yellow-400'>Our Success</span></h1>

                    <img src="src\assets\im.png" alt="" srcset=""  className='h-20 absolute bottom-0 left-5'/>
            </div>



            <div className=' flex flex-col items-center'>

                {
                    packet.map((e,index)=>{
                       if(index%2===0){
                        return(
                            <div className='p-16 flex  gap-10  '>
                    
                            <div
                            className="border border-transparent p-4 bg-gray-100 rounded-lg"
                            style={{ backgroundImage: `url(${bground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                            <h1>{e.title}</h1>
                            <p>
                                {e.content }
                            </p>
                            </div>
            
            
                                <img src={e.image} alt="" srcset=""  className='h-36'/>
                            </div>

                        )
                       }

                       else{
                       return( <div className='p-16 flex  gap-10'>
                        <img src={e.image} alt="laptop image" srcset=""  className='h-36'/>
                            
                        <div
                        className="border border-solid  border-yellow-500/100 p-4 bg-gray-100 rounded-lg bg-white"
                        // style={{ backgroundImage: `url(${bground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                        <h1>{e.title}</h1>
                        <p>
                            {e.content}
                        </p>
                        </div>
        
        
                           
                        </div>)

                       }
                    })
                }
                {/* <div className='p-16 flex  gap-10  '>
                    
                <div
                className="border border-transparent p-4 bg-gray-100 rounded-lg"
                style={{ backgroundImage: `url(${bground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                <h1>Custom Design and Development</h1>
                <p>
                    We create unique, engaging, and user-centric <br /> digital experiences that captivate customers and drive growth.
                </p>
                </div>


                    <img src="src\assets\_Image_ (7).png" alt="laptop image" srcset=""  className='h-36'/>
                </div>


                <div className='p-16 flex  gap-10'>
                <img src="src\assets\_Image_ (6).png" alt="laptop image" srcset=""  className='h-36'/>
                    
                <div
                className="border border-solid  border-yellow-500/100 p-4 bg-gray-100 rounded-lg bg-white"
                // style={{ backgroundImage: `url(${bground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                <h1>Custom Design and Development</h1>
                <p>
                    We create unique, engaging, and user-centric <br /> digital experiences that captivate customers and drive growth.
                </p>
                </div>


                   
                </div> */}



            </div>
             
        </div>
      
    </div>
  )
}

export default Impulse
