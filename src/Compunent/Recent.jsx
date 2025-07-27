import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Recent() {

    const activitis =[
        {
            userName:"Leslie sakho",
            userLocation:"Canada, toronto",
            user:<PersonIcon />,
            star:"img/star.png",
            date:"09/11/2023",
            pera1:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            pera2:"The lorem ipsum is, in printing, a series of meaningless words    used temporarily to calibrate a layout.",
            img:"img/recent (1).png",
            discover:"Discover"

        },
        {
            userName:"Chris macari",
            userLocation:"Singapur",
            user:<PersonIcon />,
            star:"img/star.png",
            date:"14/09/2023",
            pera1:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            pera2:"The lorem ipsum is, in printing, a series of meaningless words    used temporarily to calibrate a layout.",
            img:"img/recent (2).png",
            discover:"Discover"

        },
        {
            userName:"Jojo alba",
            userLocation:"Kuala lumpur",
            user:<PersonIcon />,
            star:"img/star.png",
            date:"28/09/2023",
            pera1:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            pera2:"The lorem ipsum is, in printing, a series of meaningless words    used temporarily to calibrate a layout.",
            img:"img/recent (3).png",
            discover:"Discover"

        },
    ]
  return (
    <>
    
    <section className='md:flex juatify-center items-center'>
   <div className='md:flex  gap-5 '>
    {activitis.map((even,index)=>(
      <div key={index} className=' bg-[#F8F8F8] rounded-2xl p-4 py-6'>
        <div className='flex gap-10 p-2'>
                <span className='bg-white p-3 rounded-full'>  {even.user} </span>
            <div>
                <p className='font-bold'>{even.userName}</p>
                <p className='text-gray-400'>{even.userLocation}</p>
            </div>
        </div>
        <div className='flex gap-4 py-5'>
            <img src={even.star} alt="" />
            <p className='text-gray-600'>{even.date}</p>
        </div>
        <p className='text-gray-600 py-5'>{even.pera1}</p>
        <p className='text-gray-600'>{even.pera2}</p>
        <img className=' py-8' src={even.img} alt="" />
        <u className='font-bold'>{even.discover}</u>
      </div>
    ))}
   </div>
   <div className='flex justify-center items-center'> <button className='p-4 bg-gray-400 rounded-full  opacity-100 hover:opacity-80 transition-colors cursor-pointer'> <ArrowForwardIcon /> </button> </div>
    </section>

    </>
  )
}

export default Recent