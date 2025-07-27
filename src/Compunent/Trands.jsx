import React from 'react'

function Trands() {
    const cardDetails =[
    { img: 'img/carsol1 (1).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (2).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (3).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (4).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (5).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (6).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (7).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (1).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (2).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (3).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (4).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (5).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    
    ] 
  return (
    <>

 <section>
     <div className='p-4 '>
      <h1 className='text-xl font-bold p-3'>The latest trends</h1>    
      <div className='grid md:grid-cols-4 grid-cols-1 mx-auto justify-center items-center gap-6'>
       {cardDetails.map((event,index)=>(
           <div key={index} className='mx-auto bg-gray-200 rounded-3xl p-3'>
             <img className='w-full' src={event.img} alt="" />
             <h1 className='text-2xl font-bold'>{event.head}</h1>
             <p className='text-gray-500 py-3'>{event.details}</p>
             <div className='flex justify-between items-center'>
                <img src={event.star} alt="" />
                <p>{event.para}</p>
             </div>
           </div>
       ))}
      </div>

      <div className='mx-auto flex flex-col justify-center items-center py-20 '>
        <p className='py-6'>Discover more cool restaurants</p>
        <button className='bg-[#1677BD] text-white py-2 px-6 rounded-full opacity-100 hover:opacity-80'> 
            Show more 
        </button>
      </div>

      {/* MyFeedback */}
      <div className='w-full md:py-30 py-10 bg-[#F2F2F2]'>

       <div className='md:flex jutify-center items-center w-[80%] mx-auto gap-y-7  py-6'>
          <div className='1/2'>
            <h1 className='font-bold text-2xl md:text-4xl py-7'> MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business </h1>
            <p className=' text-gray-600 mb-10'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.  </p>
            <button className='text-white bg-black px-6 py-2 rounded-full opacity-100 hover:opacity-80 transition-all duration-300 mb-6'> Explore MyFeedback business </button>
          </div>
          <div className='1/2 w-full'>
        <img src="img/img.png" alt="" /> </div>
       </div>
      </div>


    </div> 
 </section>

    </>
  )
}

export default Trands