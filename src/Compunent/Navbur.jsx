import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';  
import LanguageIcon from '@mui/icons-material/Language';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Restruents from './Restruents';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,


  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({

  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


function Navbur() {
  
  const [stat, setstat]= useState(false);

  const toggleBtn = ()=>{
    setstat(!stat)
  }
const navigate = useNavigate();
const handelar =()=>{
  navigate('/Restruents')
}


  return (

    <>
    <div className='bg-[#FFFFFF] '>


      <Box className='text-[#7A7A7A] w-full p-0 m-0'>
        <AppBar position="static"  color="transparent"  className=''>
        
            <Toolbar>
    <div className=" flex justify-btween items-center mx-auto gap-10 ">
    
                <div>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                <img src="img/Flogo.png" alt="Logo" />
              </Typography>

              </div>

              <div className='border rounded-full border-gray-600 hidden md:flex'>
                <Search>
                  <SearchIconWrapper>
                  
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="restruent hotel survice"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Search className='border-l'>
                
                  <StyledInputBase
                    placeholder="singapur"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                    <SearchIcon onClick={handelar}  className='text-black bg-gray-300 rounded-2xl '/>
                    
                </Search>
              </div>
          
          <div className='flex justify-around items-center gap-3'>
            

              <LanguageIcon />
                <button  className='bg-black text-white rounded-full p-2'>                
              MyFeedback for business
                </button>
            
              </div>
                </div>


                <div id='menoIcon' onClick={toggleBtn} className=' md:hidden'>
                <DensityMediumIcon />  
                </div>
              
            </Toolbar>

          
        </AppBar>
      </Box>

    
      <div>

      {stat && (
        <div className={` ${stat ? "flex": "hidden"} flex-col  w-[70%] mx-auto gap-y-3  mt-4 bg-blue-300 p-7 rounded`}>
                <Search className='border '>
                
                  <StyledInputBase
                    placeholder="restruent hotel survice"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Search className='border '>
                
                  <StyledInputBase
                    placeholder="singapur"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                        </Search>
                <button className='text-black opacity-80 hover:opacity-100 transition-all  hover rounded-2xl bg-[#1677BD] w-full p-2'> Search</button>          
              </div>
      )
      }
      </div>  

    </div>
    </>
  );
}

export default Navbur;