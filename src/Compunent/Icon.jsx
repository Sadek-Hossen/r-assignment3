import React from 'react'
import WindowIcon from '@mui/icons-material/Window';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import DeblurIcon from '@mui/icons-material/Deblur';
import ParkIcon from '@mui/icons-material/Park';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import AreaChartIcon from '@mui/icons-material/AreaChart';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

function IconSection() {
const iconDetails =[
    {icon :< WindowIcon />  , titel:"All"},
    {icon :<LocalDiningIcon />  , titel:"Restorent"},
    {icon :<BedroomParentIcon />  , titel:"Hotels"},
    {icon :<HomeIcon />  , titel:"Home"},
    {icon :<ShoppingBasketIcon />   , titel:"Shoping"},
    {icon :<DirectionsCarFilledIcon />   , titel:"Car location"},
    {icon :<AreaChartIcon />   , titel:"car wash"},
    {icon :<DeleteSweepIcon />   , titel:"Bars"},
    {icon :<FitnessCenterIcon />   , titel:"Gyms"},
]
    
  return (
    <>
  <div className='hidden md:flex w-full px-4 mt-3 text-gray-400'>
     <div className='flex   h-[40px] col-span-4 md:col-span-12 md:w-full justify-around gap-20 items-center  mx-auto mr-0 ml-0 '>
        {iconDetails.map((even,index)=>(
           <div key={index} className=''>
            <span>{even.icon}</span>
            <p>{even.titel}</p>
           </div>
        ))}
     </div>
  </div>
    </>
  )
}

export default IconSection