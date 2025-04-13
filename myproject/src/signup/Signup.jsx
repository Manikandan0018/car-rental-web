import React, { useState } from 'react'
import "./SignUp.css"

import blackbg from "../Container/img/blackbg.jpeg"

import { FaArrowRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


export const Signup = () => {
  const [visible ,setVisible] = useState(false);
  const [visibleIn,setVisibleIn] = useState(true)


  const ToggleVisibility = ()=>{
    setVisible(!visible);
    setVisibleIn(!visibleIn);
  };

  


  



  const navigate = useNavigate();

  const home =() =>{
    navigate('/')
  }

   
  return (
    <>
    <div className='blur-[4px] w-full absolute'>
      <img className='w-full h-120' src={blackbg} alt="" />
    </div>

    <div className='flex gap-8 ms-43 mt-2  font-sans text-[20px] absolute text-white cursor-pointer'>
            <p onClick={home} className=' transition duration-300 hover:text-orange-500 hover:translate-x-1'>Home</p>
            <p className='transition duration-300 hover:text-orange-500 hover:translate-x-1'>Services</p>
            <p className='transition duration-300 hover:text-orange-500 hover:translate-x-1'>Review</p>
            <p className='transition duration-300 hover:text-orange-500 hover:translate-x-1'>About</p>
        </div>

    <div className='w-290 h-100 absolute mt-16 ms-50'>
      <div className='flex flex-row gap-20 justify-around '>
        <div className='text-white flex flex-col items-center text-center mt-30'>
          <p className='text-4xl font-extrabold'>THE ROYAL ESSENCE OF JOURNEY</p>
          <p className='font-bold'>RELAXED JOURNEY EVER</p>
          <p>Looking for an affordable ride? Rent a car at a great price and enjoy the freedom of the open road.<br/> Make every journey memorable with a comfortable, budget-friendly vehicle!</p>
          <button className='bg-yellow-500 hover:bg-green-700 cursor-pointer w-35 h-10'>RENT CAR NOW</button>
        </div>
      <div className={`${visible ? "":"hidden"} flex flex-col text-white gap-1 mb-60 h-90` }>
            <p className=' font-bold text-2xl'>Register to Rent a Dream Car</p>
            <label htmlFor="">name</label>
            <input className='bg-gray-100 w-110 h-15  rounded ps-5' type="text" placeholder='Enter your name...'/>
            <label htmlFor="">Email</label>
            <input className='bg-gray-100 w-110 h-15  rounded ps-5' type="email" placeholder='enter your @gmail.com' />
            <label htmlFor="">Nickname</label>
            <input className='bg-gray-100 w-110 h-15  rounded ps-5' type="text" placeholder='Enter your nickName'/>
            <label htmlFor="">password</label>
            <input className='bg-gray-100 w-110 h-15  rounded ps-5' type="password" placeholder='Enter password'/>
            <button className='bg-orange-600 hover:bg-green-500 w-40 h-15 cursor-pointer rounded text-white'>SigUp</button>
            <p className='  text-red-500 hover:text-green-500 cursor-pointer' onClick={ToggleVisibility}>Or SigIn</p>

        </div>


        <div className={`${visible ? "hidden":""} flex flex-col text-white gap-1 mb-60 h-90`}>
        <p className=' font-bold text-2xl'>SigIn to Rent a Dream Car</p>
        <label htmlFor="">Email</label>
            <input className='bg-gray-100 w-110 h-9  rounded ps-5' type="email" placeholder='enter your @gmail.com' />
            <label htmlFor="">password</label>
            <input className='bg-gray-100 w-110 h-9  rounded ps-5' type="password" placeholder='Enter password'/>
            <button className='bg-orange-600 w-40 h-9 cursor-pointer hover:bg-green-500 rounded text-white'>SigIn</button>
            <p className='  text-red-500 cursor-pointer hover:text-green-500' onClick={ToggleVisibility}>New user Register here</p>

        </div>
      </div>    
    </div>

//
    <div className='relative mt-120w-full h-83 bg-black mt-110'>
      <div className='bg-gray-800 absolute mt-7  items-center ms-24 gap-30 text-white text-[17px]  justify-center w-340 h-70 flex flex-row rounded-4xl'>
        <div>
          <p className=' font-bold text-[25px] text-orange-500'>NOVARIDE</p>
          <p>Experience the ease and <br /> convenience of renting a car with <br /> Novaride.</p>
        </div>
        <div className='cursor-pointer'>
          <p className='font-bold text-[25px] text-orange-500 '>Legal Policy</p>
          <p className=' transition duration-300 hover:text-orange-500 hover:translate-x-1'>Term & COndition</p>
          <p className=' transition duration-300 hover:text-orange-500 hover:translate-x-1'>Privacy Policy</p>
          <p className=' transition duration-300 hover:text-orange-500 hover:translate-x-1'>Legal Notice</p>
          <p className=' transition duration-300 hover:text-orange-500 hover:translate-x-1'>Accessibility</p>
        </div>
        <div className=' cursor-pointer'>
          <p className='font-bold text-[25px] text-orange-500 '>Quick Link</p>
          <p className=' transition duration-300 hover:text-orange-500 hover:translate-x-1'>Home</p>
          <p className=' transition duration-300 hover:text-orange-500 hover:translate-x-1'>About Us</p>
          <p className=' transition duration-300 hover:text-orange-500 hover:translate-x-1'>Car Type</p>
          <p className=' transition duration-300 hover:text-orange-500 hover:translate-x-1 '>Service</p>
        </div>
        <div>
          <p className='font-bold text-[20px] text-white'>Subscribe To The Newsleeters</p>
          <input className='text-white bg-white rounded w-80 h-9 ps-3' type="email" placeholder='Email...' />
        </div>
        <div className='absolute mt-9 ms-310'>
          <button className=' bg-orange-400 text-white rounded-4xl '><FaArrowRight className='text-white  rounded-[18px] transition duration-500 hover:rotate-90 w-10 h-10 p-1'/></button>
          </div>

          <div className='flex flex-row justify-around absolute mt-50 gap-50'>
        <p className='text-white mt-3'>© 2024 Novaride. All rights reserved.</p>
        <div className='text-white flex gap-4 mt-3 text-3xl'>
        <FaYoutube className='transition duration-300 hover:text-orange-400 cursor-pointer hover:translate-y-1'/>
        <FaFacebook className='transition duration-300 hover:text-orange-400 cursor-pointer hover:translate-y-1'/>
        <FaInstagram className='transition duration-300 hover:text-orange-400 cursor-pointer hover:translate-y-1'/>
        <FaLinkedin className='transition duration-300 hover:text-orange-400 cursor-pointer hover:translate-y-1'/>
        <FaTwitter className='transition duration-300 hover:text-orange-400 cursor-pointer hover:translate-y-1'/>
        </div>
      </div>
      </div>



    </div>


    

    


    
    
    
    
    </>
  )
}
