import './Home.css'
import carlogo from "../img/carlogo.jpg"
import carjeep from "../img/jeephome.png"
import cus1 from "../img/cus1.jpeg"
import cus2 from "../img/cus2.jpeg"
import cus3 from "../img/cus3.jpeg"

import penzebg from "../cardata/penzebg.png"

import { CiSearch } from "react-icons/ci";
import { BsCalendarDate } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuBookCheck } from "react-icons/lu";
import appstore from "../img/appstoregg.png"
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { BsFuelPumpDiesel } from "react-icons/bs";

import { IoStar } from "react-icons/io5";
import { IoMdStarHalf } from "react-icons/io";

import carData from  "../data"

import { useNavigate } from 'react-router-dom';
import { useState } from 'react'



export const Home = ({cart,setCart}) => {




      const navigate = useNavigate();

      const SignupPage =() =>{
        navigate('/Signup')
      }


      const cartPage =() =>{
        navigate('/cart')
      }
 

      const addcard = (carData)=>{
        setCart([...cart, carData])
        cartPage();
      };


      // const removecard = (cartval)=>{
      //   setCart(cart.filter(c => c.id !== cartval.id))
      // };

      
    
        

  return (

  

    <>
    <div className='flex gap-50 mt-5'>
        <div>
            <img className='h-6 w-15 ml-6' src={carlogo} alt="" />
        </div>

        <div className='relative'>
        <CiSearch className='absolute mt-3 ml-4'/>
            <input type="text" className='pl-9 bg-gray-100 shadow-2xl w-80 h-10' placeholder='Search Dream Cars...' />
        </div>

        <div className='flex gap-8 font-sans text-lg cursor-pointer'>
            <p className='hover:text-amber-500'>Home</p>
            <p className='hover:text-amber-500'>Services</p>
            <p className='hover:text-amber-500'>Review</p>
            <p className='hover:text-amber-500'>About</p>
        </div>
        <div className='flex gap-3 mb-5 mr-30'>
            <button onClick={SignupPage} className='hover:text-orange-600 cursor-pointer'>SignUp</button>
            <button className='bg-blue-700 w-18 h-8 hover:bg-amber-500 cursor-pointer rounded text-white'>SignIn</button>
            <button onClick={cartPage}  className=' w-10 h-8 flex gap-1 cursor-pointer rounded '>Rented <span className='text-orange-500 font-bold scale-130'>{cart.length}</span></button>

        </div>
    </div>


    <div className='flex  bg-gray-100 shadow-2xl h-130  w-360 ml-10 rounded-b-xl'>
    <div className='mt-30 items-center flex flex-col ml-10 gap-2'>
            <p className='text-7xl font-weight: 700 font-extrabold w-100'><span className='text-orange-500'>Looking</span> to rent a car</p>
            <p className='mr-22 w-55'>Here the right place to rent a Dream Cars,In Affordable price</p>
           <div className='flex gap-1 flex-col text-center'>
            <img src={appstore} className='w-70 me-20' alt="" />
           <button className=' bg-orange-500 hover:bg-amber-400 w-40 h-10 rounded '>Download App</button>
           <p className='mr-49'>For better Experience</p>
           </div>
            
        </div>
        <div>
            <img className='w-250 h-130' src={carjeep} alt="" />
        </div>
        
    </div>


    <div className='bg-gray-200 w-290 h-25 mt-5 shadow-2xl rounded-xl ml-48 px-9'>
      <div className='flex flex-row gap-40 py-3'>
      <div>
            <p className='ml-15'>From</p>
            <input placeholder='Enter from place...' type="text" className=' w-60 h-10 pl-3 bg-white'/>
        </div>
        <div>
            <p className='ml-25'>To</p>
            <input placeholder='Enter from place...' type="text" className=' w-60 h-10 pl-3 bg-white'/>
        </div>
        <div>
            <p>Date</p>
            <BsCalendarDate />

        </div>
        <div>
            <button>GetRent</button>
            <FaCar />

        </div>


      </div>
     
       </div>
       
    

    
    <div className='w-fit h-80 bg- my-15 '>
        <p className='flex justify-center py-8 font-bold text-3xl '>Rent With 3 Easy Steps</p>
        <div className='flex flex-row w-350 ms-14 gap-5 text-center'>
            <div className='bg-amber-400 w-300 h-60 p-10 shadow-2xl rounded'>
                <FaLocationDot className='w-12 h-8  ms-40' />
                <p>CHOOSE A LOCATION</p>
                <p className='Ubuntu'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi debitis nulla atque corrupti ipsum aperiam ipsam odit omnis ut, ex, eius harum iusto! Illo totam nobis assumenda voluptates neque rerum.</p>
            </div>
            <div className='bg-black text-white w-300 h-60 p-10 shadow-2xl rounded'>
                <FaRegCalendarAlt className='w-12 h-8 text-orange-500 ms-40' />
                <p>PICK-UP DATE</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsum consequatur, placeat corrupti sequi, eaque vitae pariatur repellat nisi minus nulla facilis iusto neque nostrum. At natus asperiores dolor dolorem.</p>
            </div>
            <div className='bg-amber-400 w-300 h-60 p-10 shadow-2xl rounded'>
                <LuBookCheck className='w-12 h-8 ms-40'/>
                <p>#BOOK A CAR</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi officiis quidem perferendis cum eius debitis, consequuntur aperiam deserunt harum iusto ratione? Sed, velit exercitationem. Totam amet autem mollitia officiis nemo?</p>
            </div>
        </div>
    </div>


    <div className=''>
        <div className=' flex flex-col items-center'>
        <p>BEST SERVICES</p>
        <p className='font-bold text-2xl'>Explore Out Top Deals</p>
        <p className='text-1xl'>From Top Rated Dealers</p>
        </div>
        </div>


       
        <div className='ms-5 flex flex-row  w-370 gap-3 cursor-pointer  flex-wrap justify-center '>
                {
    
    carData.productData.map((carData, index) => (
        <div
          key={index}
          className="w-120 text-center overflow-hidden h-74 relative group transition-all duration-900"
        >
          <img
            className=" hover:blur-[3px] hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 h-77 w-130"
            src={carData.img}
            alt=""
          />

         
       

          <div className="absolute opacity-0   bg-gray-700  w-120 h-38 text-white text-[17px] top-0 group-hover:opacity-100 group-hover:top-30 transition-all duration-1000">
            <p>model: {carData.model}</p>
            <p>year: {carData.year}</p>
            <p>Engine: {carData.engine}</p>
            <p>TopSpeed: {carData.horsepower}mph</p>
            <button  onClick={()=>addcard(carData)} className="bg-orange-500 cursor-pointer hover:bg-orange-600 w-30 mt-1 h-9 rounded">
              Rent Now
            </button>
          </div>

          <div className='bottom-0 absolute text-white bg-gray-950 w-120 h-fit flex flex-row gap-10'>
          <div className='flex ms-2'>
          <MdAirlineSeatReclineNormal className='mt-2 text-xl '/>
          <span className='mt-1.5'>4 Seats</span>
          </div>
          <div className='mt-1.5 flex gap-1'>
          <BsFuelPumpDiesel className='mt-1'/> 
          <span className=''>diesel</span>

          </div>
          <p className='scale-100 mt-1.5'>Per Day: 120$</p>

          </div>
        </div>
      ))
      
           
                }
            </div>



           
            <div className=' h-110 mt-10 relative bg-gray-100'>
                <div className='flex flex-col items-center gap-1'>
                <h1 className='font-bold text-2xl'>Review</h1>
                <p className='mb-3 mt-1 text-2xl text-blue-900'>Happy Customers</p>
                </div>
                <div className='w-330   absolute mt-0 overflow h-70 flex justify-center gap-25 text-center ms-20 '>
                    <div className='mt-4 bg-white rounded-2xl  h-80 p-2 text-black'>
                    <img className='w-25 ms-35 h-25 rounded-[50px]' src={cus1} alt="" />
                    <div className='flex'>
                  <IoStar className='text-orange-500 ms-36'/>
                    <IoStar className='text-orange-500 '/>
                    <IoStar className='text-orange-500 '/>
                    <IoStar className='text-orange-500 '/>
                    <IoMdStarHalf className='text-orange-500 scale-125'/>

                  </div>
                    <p>"Renting a car was an incredibly smooth and convenient experience. The booking process was quick and user-friendly, with a variety of well-maintained vehicles to choose from. The car was clean, comfortable, and perfect for my trip. Customer service was responsive and helpful, making the entire rental process hassle-free."</p>
                    </div>
            

                    <div className='mt-4 bg-white rounded-2xl  h-80 p-4 text-black'>
                    <img className='w-25 ms-25 h-25 rounded-[50px]' src={cus2} alt="" />
                    <div className='flex'>
                  <IoStar className='text-orange-500 ms-29'/>
                    <IoStar className='text-orange-500 '/>
                    <IoStar className='text-orange-500 '/>
                    <IoMdStarHalf className='text-orange-500 scale-125'/>
                  </div>
                    <p>"My recent car rental experience was fantastic! The booking process was fast and easy, and the vehicle I rented was in excellent condition. The car was perfect for my needs, offering both comfort and reliability. The staff were friendly, and pick-up/drop-off was seamless."</p>
                    </div>

                    <div className='mt-4 bg-white rounded-2xl  h-80 p-4 text-black'>
                    <img className='w-25 ms-26 h-25 rounded-[50px]' src={cus3} alt="" />
                    <div className='flex'>
                  <IoStar className='text-orange-500 ms-29'/>
                    <IoStar className='text-orange-500 '/>
                    <IoStar className='text-orange-500 '/>
                    <IoStar className='text-orange-500 '/>
                    <IoMdStarHalf className='text-orange-500 scale-125'/>
                  </div>
                    <p>"The car rental experience was top-notch from start to finish. The vehicle was in pristine condition and drove smoothly throughout my trip. The booking process was quick, and I appreciated the transparency in pricing. Customer support was friendly."</p>
                    </div>
                  
    
                </div>   
            </div>
         



            <div className='flex'>
                <img className='w-200' src={penzebg} alt="" />
                <div className='mt-47 scale-120 ms-10'>
                    <p className='text-orange-600  text-4xl font-extrabold '>Here the Right Place to <br /> Rent a best Cheapest You like</p>
                    <p className='font-bold'>Rent a car today at unbeatable prices! Affordable rates,<br /> "no hidden fees!!!!"</p>
                </div>
            </div>
       
           <div className=' text-white bg-black w-full flex justify-between h-30'>
               <div className='p-3'>
               <p className='font-extrabold text-2xl ms-90'>let's collaborate on your <br />upcoming car rental venture</p>
               <p className='ms-40'>"Partner with us and earn by renting out your car! Join our platform for easy, reliable car rental opportunities."</p>
               </div>
               <div>
               <button className='text-black mt-10 me-10 w-35 h-10 bg-orange-400 hover:bg-orange-600'>Contact Us</button>

               </div>
           </div>


           







 



        
    
    
    
    </>
  )
}
