import { PiUsersThree } from 'react-icons/pi';
// image
import Image1 from '../assets/Icon.png';
import Image2  from '../assets/Icon2.png';



const System = () => {
  
  return (
    <section className='' id='system'>
     <div className='container mx-auto'>
      <div className="font-primary flex items-center justify-center text-center">
        <h1 className='lg:text-[44px] text-[20px] text-gray-600 font-bold leading-[1] mb-10'>
          Manage your entire community <br/>
          in a single system
        </h1>
      </div>

      <div className="animate my-4 gap-x-[3rem] gap-y-6 flex justify-center items-center lg:flex-row lg:py-4 flex-col">
         <ul className="shadow-md lg:px-4 lg:py-0 text-center rounded-md hover:shadow-2xl">
              <PiUsersThree className="text-black h-[3rem] w-56 my-4 mx-6"/>
              <h3
               className=" lg:text-[30px] text-[24px] text-gray-600 m-4 font-semibold" >
                Membership <br/> 
                Organisations
                </h3> 
                <p className="text-black/80 text-[14px] lg:text-[18px]">
                Our membership management <br/> software provides full automation of <br/> membership renewals and payments
                 </p>
         </ul>

         <ul className=' lg:px-2 lg:py-0 text-center rounded-md shadow-xl hover:shadow-2xl'>
         <img
          src={Image2}
          alt=""
          className="mx-28 w-[5rem] my-3 "/>
         <h3
       className="lg:text-[30px] text-[24px] mb-2 text-gray-600  font-semibold" >
       National <br /> Associations
            </h3> 
             <p className="text-black/80 text-[14px] lg:text-[18px]">
             Our membership management <br /> software provides full automation of <br /> membership renewals and <br /> payments
           </p> 
         </ul>

         
         <ul className='shadow-md  lg:px-2 lg:py-0 text-center rounded-md hover:shadow-2xl'>
         <img
          src={Image1}
          alt=""
          className="w-[5rem] my-4 mx-28 lg:mx-20"/>
         <h3
       className="lg:text-[30px] text-[24px] text-gray-600 m-4 font-semibold" >
            Clubs And <br /> Groups
            </h3> 
             <p className="text-black/80  text-[14px] lg:text-[18px]">
             Our membership management<br/> software provides full automation of <br/> membership renewals and payments
           </p> 
         </ul>
        </div>
     </div>
    </section>
  )
}

export default System;