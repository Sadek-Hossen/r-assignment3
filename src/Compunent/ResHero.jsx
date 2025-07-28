import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

function ResHero() {
  return (
    <section>
    <div className='py-4 px-10'><p>Home / BellaItalia</p></div>
    <div className='bg-[url(img/Rhero.png)]  w-full    h-auto bg-no-repeat  '>
     
     <div className='text-white  w-[50%] py-10 bg-gradient-to-l from-gray-0 to-gray-600  pl-50  pr-7'>
          <h1 className='text-5xl font-bold py-5'>Bella italia</h1>
          <div className='flex gap-3  '>
            <img src="img/star.png" alt="" />
            <p>5.0 (834 reviews)</p>
          </div>
          <p className='py-6'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.
The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>

            <div className='flex gap-3 py-3'>
                <LocationOnIcon />
                <p>Singapour, Bishan-Ang Mo Kio Park </p>
            </div>
            <div className='flex gap-3'>
                <WatchLaterIcon />
                <p>7j/7, 08:00 - 22:00 </p>
            </div>
            
     </div>
     

    </div>
    </section>
  )
}

export default ResHero