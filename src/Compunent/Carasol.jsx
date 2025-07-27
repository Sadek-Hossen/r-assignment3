import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Carasol() {
  const carasolData = [
    { img: 'img/carsol1 (1).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (2).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (3).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (4).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (5).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (6).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
    { img: 'img/carsol1 (7).png', head: 'Bottega', details: 'The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.', star: 'img/star.png', para: '5.0 (876 reviews)' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleItems = carasolData.slice(currentIndex, currentIndex + 4);

  const next = () => {
    if (currentIndex < carasolData.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="p-4 flex justify-center items-center rounded bg-[#1677BD] m-4">
          <div className="  mt-6">
        <button
          onClick={next}
          disabled={currentIndex >= carasolData.length - 4}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
        <ArrowBackIosIcon />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {visibleItems.map((item, index) => (
          <div key={index} className=" p-3 rounded shadow bg-white">
            <img src={item.img} alt={item.head} className="w-full h-auto mb-2" />
            <h1 className="font-bold text-lg">{item.head}</h1>
            <p className="text-sm text-gray-500">{item.details}</p>
            <div className="flex items-center gap-2 mt-2">
              <img src={item.star} alt="star" className="" />
              <p className="text-sm">{item.para}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="   mt-6">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
        <  ArrowForwardIosIcon />
        </button>
      </div>
  
    </section>
  );
}

export default Carasol;
