import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosStar } from "react-icons/io";
import { FaStarHalf } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";



import revData from "../reviewData"

export const Cart = ({cart,setCart}) => {
    const navigate = useNavigate();
    const [deshide,setDeshide]=useState(false)
    const [rate,setRate] = useState(70);
    const [days,setDays] = useState(1);
  
    const [reviews, setReviews] = useState(() => {
        const savedReviews = localStorage.getItem('reviews');
        return savedReviews ? JSON.parse(savedReviews) : [];
      });
    
      useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviews));
      }, [reviews]);
    
      const deleteReview = (indexToDelete) => {
        const updatedReviews = reviews.filter((_, index) => index !== indexToDelete);
        setReviews(updatedReviews);
      };
    
      const addReview = (review) => {
        setReviews((prevReviews) => [...prevReviews, review]);
      };



   

  


  

    const inrate = ()=>{
        setRate(rate+70)
        setDays(days+1)
        
    }
    const derate = ()=>{
        setRate(rate-70)
        setDays(days-1)
        if(days === 1){
            setDays(1)
        }
        if(rate === 70){
            setRate(70)
        }
    }


    const SignupPage =() =>{
        navigate('/Signup')
      }

      
  const home =() =>{
    navigate('/')
  }

 useEffect(()=>{
    if(cart.length===0){
        setDeshide(true)
    }
 }, [cart])
    
 
    

  return (
    <>
     <div className='flex gap-50 mt-3 justify-center'>
       
        <div className='flex gap-8 font-sans text-lg cursor-pointer'>
            <p onClick={home} className='hover:text-amber-500'>Home</p>
            <p className='hover:text-amber-500'>Services</p>
            <p className='hover:text-amber-500'>Review</p>
            <p className='hover:text-amber-500'>About</p>
        </div>
        <div className='flex gap-3 mb-5 mr-30'>
            <button onClick={SignupPage} className='hover:text-orange-600 cursor-pointer'>SignUp</button>
            <button className='bg-blue-700 w-18 h-8 hover:bg-amber-500 cursor-pointer rounded text-white'>SignIn</button>

        </div>
    </div>


    <div className='text-black flex gap-20'>
        {
            cart.map((items,index)=>(

                <div key={index}  className='ms-5 w-200  flex-col'>
                    <img src={items.img} className='rounded-[15px] w-220 h-120' alt="" />
                    <p className='font-bold text-[30px]'>MAZDA CX-5 2021</p>
                    <p className='flex '><IoIosStar className='mt-0.5 text-orange-500'/><span>4.8 (2,434 reviews) post code:BTS0000614
                        </span> <span className='ms-75 text-2xl'>Days: {days} <button onClick={inrate} className='bg-gray-200 w-6 scale-85 rounded'>+</button> <button onClick={derate} className='bg-gray-200 w-6 scale-85 rounded'>-</button> </span></p>
                    <div className='flex relative flex-wrap gap-5 text-[15px]'>
                        <div  className='border-2  gap-3 flex p-2 border-gray-200 w-50 rounded-2xl'>
                            <p className='mt-2 text-[25px]'><MdAirlineSeatReclineExtra /> </p>
                            <p className='flex flex-col'>Seats <br /><span className='font-bold'>7 Seats</span></p>
                        </div>
                        <div className='border-2 gap-3  flex p-2 border-gray-200 w-50 rounded-2xl'>
                            <p className='mt-2 text-[25px]'><GiGearStickPattern /></p>
                            <p className='flex flex-col'>Car gearbox <br /><span className='font-bold'>Auto</span></p>
                        </div>
                        <div className='border-2  gap-3 flex p-2 border-gray-200 w-50 rounded-2xl'>
                            <p className='mt-2 text-[22px]'><BsFillFuelPumpFill /> </p>
                            <p className='flex flex-col'>Fuel <span className='font-bold'>Gas</span></p>
                        </div>
                        <div className='border-2  gap-3 flex p-2 border-gray-200 w-50 rounded-2xl'>
                            <p className='mt-2 text-[22px]'><BsFillFuelPumpFill /> </p>
                            <p className='flex flex-col'>Car brand <span className='font-bold'>kia</span></p>
                        </div>
                        <div className='border-2 gap-3 flex p-2 border-gray-200 w-50 rounded-2xl'>
                            <p className='mt-2 text-[22px]'><BsFillFuelPumpFill /> </p>
                            <p className='flex flex-col'>Type car <span className='font-bold'>Carnival</span></p>
                        </div>
                        <div className='border-2 gap-3  flex p-2 border-gray-200 w-50 rounded-2xl'>
                            <p className='mt-2 text-[22px]'><BsFillFuelPumpFill /> </p>
                            <p className='flex flex-col'>Mileage<span className='font-bold'>20,340 KM</span></p>
                        </div>
                       <div className='absolute ms-165  w-53 h-37'>
                        <div className='flex justify-around mt-5 '>
                        <p className='text-[25px] text-gray-400'>Price</p>
                        <p className='text-[35px] font-bold '>${rate}</p>
                        </div>
                          <div className=''>
                            <button className='bg-amber-600 text-[20px] ms-2 mt-5 h-14 w-50'>Pay</button>
                          </div>
                       </div>
                    </div>
                 
           
                   
                </div>
            ))

        }
        <div >
            <p className='font-normal text-xl'>Customer reviews (24 reviews)</p>
            {
                revData.reviwItem.map((reviewData)=>(
                    <div className=' w-150'>
                        <div className='flex bg-gray-100 rounded-[20px]'>
                            <div className='flex '>
                                 <img className='rounded-[50px] w-10 h-10' src={reviewData.img} alt="" />
                                 <p className='scale-75'>{reviewData.name} <br/><span className='flex flex-row text-xl  text-orange-400'><IoIosStar /><IoIosStar /><IoIosStar /><FaStarHalf />
                                 </span> </p>
                            </div>
                            <div className='flex ms-87'>
                                <span className='mt-2'><CiCalendarDate /></span>
                                <p className='scale-70 absolute mt-1 ms-1'>{reviewData.date}</p>

                            </div>
                            
                            
                        </div>

                        <div className='bg-gray-150'>
                            <p className='scale-77'>{reviewData.about}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
   
    <div className=' text-white bg-black w-full flex justify-between mt-15 h-30'>
               <div className='p-3'>
               <p className='font-extrabold text-2xl ms-90'>let's collaborate on your <br />upcoming car rental venture</p>
               <p className='ms-40'>"Partner with us and earn by renting out your car! Join our platform for easy, reliable car rental opportunities."</p>
               </div>
               <div>
               <button className='text-black mt-10 me-10 w-35 h-10 bg-orange-400 hover:bg-orange-600'>Contact Us</button>

               </div>
           </div>

           

    <div className={`${deshide ? 'hidden' : ''}`}>
    </div>

    <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Leave a Review</h1>

      <textarea
        placeholder="Write your review here..."
        rows="4"
        className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            addReview(e.target.value);
            e.target.value = ''; 
          }
        }}
      />
      

      <div className="mt-6">
        <h2 className="text-xl font-semibold">User Reviews</h2>
        <div className="space-y-4 mt-4">
          {reviews.map((review, index) => (
            <div key={index} className="p-4  bg-gray-100 rounded-lg shadow-sm flex justify-between items-center">             
              <p>{review}</p>
              <button
                onClick={() => deleteReview(index)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>


   
    
    
 
    </>
  )
}

