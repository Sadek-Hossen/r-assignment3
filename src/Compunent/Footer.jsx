import React from 'react'

function Footer(){
    const FooterData =[
        {heading:"About",
         pera1:"About MyFeedback",
         pera2:"Investor Relations"
        },
        {heading:"MyFeedback",
         pera1:"MyFeedback for business",
         pera2:"Collections",
         pera3:"Collections",
         pera4:"Events",
         pera5:"MyFeedback blog",
         pera6:"Support",
         pera7:"Developers"
        }

    ]

 return(
    <div>
    
    <section className='md:flex w-[60%] py-8  mx-auto text-center gap-20'>
       <div className='flex justify-between gap-10'>
        {FooterData.map((event,index)=>(
            <div key={index} className='flex flex-col items-start'>
                <h1 className='font-bold '> {event.heading} </h1>
                <p className='text-gray-500 py-1'> {event.pera1} </p>
                <p className='text-gray-500 py-1'> {event.pera2} </p>
                <p className='text-gray-500 py-1'> {event.pera3} </p>
                <p className='text-gray-500 py-1'> {event.pera4} </p>
                <p className='text-gray-500 py-1'> {event.pera5} </p>
                <p className='text-gray-500 py-1'> {event.pera6} </p>
                <p className='text-gray-500 py-1'> {event.pera7} </p>
            </div>

            
        ))}
       </div>
        <div className='md:mt-0 mt-10'>
           <h1 className='font-bold text-xl p-2'>Language</h1>
           <p className='text-gray-500'>English</p>
           <h1 className='font-bold text-xl p-2'>Countries</h1>
           <p  className='text-gray-500'>Singapur</p>
                
            </div>
    </section>
    
    </div>

 )

}

export default Footer