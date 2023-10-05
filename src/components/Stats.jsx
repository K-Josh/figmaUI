import { BiWallet } from "react-icons/bi";
import { PiUsersLight } from "react-icons/pi";
import { TbH3, TbHandMove } from "react-icons/tb";
import CountUp from "react-countup";
import {useInView} from 'react-intersection-observer';


const Stats = () => {
 const [ref, inView] =  useInView({threshold: 0.8});

  return (
    <section className='bg-[#f5f8f5] py-4' ref={ref}>
     <div className='container mx-auto  lg:space-x-[12rem]'>
        <div className="lg:flex mb-4 lg:mb-0 items-center justify-between">
          {/* text */}
          <div className="flex flex-col mb-5 lg:mb-3">
          <h1 className='lg:h3 text-[23px] lg:text-[44px] font-primary font-semibold text-gray-600'>
          Helping a Local <br />
          </h1>
          <p className='text-primary lg:-mt-3 lg:h3 text-[28px] lg:text-[3rem]'>business reinvent itself</p>
        
        <p className='text-black/90 text-[12px] lg:text-[24px] -my-2'>
        We reached here with our dedication and hardwork
        </p>
          </div>

          {/* count up */}
        <div className="lg:flex flex space-x-7 lg:space-x-12">
            <div className="font-semibold ">
             <div className="flex items-center space-x-4">
               <PiUsersLight className="text-4xl text-green-600"/>
              {inView ? <CountUp start={0} end={2245341} duration={10} className="'text-[40px] text-black text-3xl" /> : null}
             </div>
              <span className="text-gray-700 opacity-40 px-[3.5rem]">Members</span>
            </div>
            <div className="font-semibold ">
             <div className="flex items-center space-x-3">
               <TbH3 className="text-4xl text-green-600 "/>
              {inView ? <CountUp start={0} end={46328} duration={8} className="text-[40px] text-black text-3xl" /> : null}
             </div>
              <span className="text-gray-700 opacity-40 px-[3.5rem]">Clubs</span>
            </div>          
        </div> 
       </div>

       <div className="flex lg:px-[37rem] lg:space-x-7 items-center ">
         <div className="font-semibold">
             <div className="flex items-center space-x-3 lg:space-x-4">
               <TbHandMove className="text-4xl text-green-600"/>
              {inView ? <CountUp start={0} end={828867} duration={10} className="'text-[40px] text-black text-3xl" /> : null}
             </div>
              <span className="text-gray-700 opacity-40 px-[3rem] whitespace-nowrap">Event Bookings</span>
            </div>
            <div className="font-semibold">
             <div className="flex items-center space-x-3 lg:space-x-4">
               <BiWallet className="text-4xl text-green-600 outline-green-600"/>
              {inView ? <CountUp start={0} end={1926436} duration={8} className="'text-[40px] text-black text-3xl" /> : null}
             </div>
              <span className="text-gray-700 opacity-40 px-[3.5rem]">Clubs</span>
            </div>
       </div>
     </div>
    </section>
  )
}

export default Stats