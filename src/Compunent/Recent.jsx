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
    
    <section className='flex juatify-center items-center'>
   <div className='flex  gap-5 '>
    {activitis.map((even,index)=>(
      <div key={index} className=' bg-[#F8F8F8]'>
        <div className='flex'>
            {even.user}
            <div >
                <p>{even.userName}</p>
                <p>{even.userLocation}</p>
            </div>
        </div>
        <div className='flex'>
            <img src={even.star} alt="" />
            <p>{even.date}</p>
        </div>
        <p>{even.pera1}</p>
        <p>{even.pera2}</p>
        <img src={even.img} alt="" />
        <u>{even.discover}</u>
      </div>
    ))}
   </div>
   <div> <ArrowForwardIcon /> </div>
    </section>

    </>
  )
}

export default Recent