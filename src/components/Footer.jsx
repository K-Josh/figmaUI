import Logo2 from '../assets/Logo2.png'
import { PageSocials, bottomSocials, Support } from './Essentials';
import { FaTelegram } from 'react-icons/fa';

const Footer = () => {
  const now = new Date;
  const currentYear = now.getFullYear();
  return (
    <footer className="max-w-screen overflow-hidden">
      <div className="">
        <div 
          className="bg-[#263238] w-full lg:px-[2rem] lg:py-[0.5rem] font-primary lg:flex justify-between ">
         
          <div className='lg:flex '>    
           <div className='flex mx-3 lg:mx-0 '>
          <div className="h-[16rem] lg:h-[18rem] flex flex-col gap-y-5 lg:px-3 lg:py-12 py-5
            text-xl  text-white/75 px-[1rem]">
         <img className='lg:h-[20px] h:[12rem] w-[12rem] lg:w-[14rem] px-2 ' src={Logo2} alt="logo" />
          <div className='px-2 '>
          <p className='lg:text-[17px] text-[12px] lg:whitespace-nowrap lg:my-4 my-4'>
          copyright @ {currentYear} Nexcent ltd.</p>
          <p className='lg:text-[17px] text-[12px] lg:my-4 -my-6'>All rights reserved</p>
          </div>
         {/* socials */}
          <ul className='flex lg:gap-x-6 gap-x-3 lg:my-4 my-8 px-2'>
          {PageSocials.map((social) => {
            return (
              <li
               className=''
               key={social.id}>
                <a href="#" 
                 className=' bg-white/75'
                 >
                  {social.href}
                </a>
              </li>
            );
          })}
          </ul>
          </div>

          <div  className='lg:py-9 py-2 px-2 mx-4 lg:mx-3 space-x-[6rem]'>
         <p className='h3 px-[2rem] lg:mx-[2rem]'>
            Company
          </p>
          <ul className=''>
            {bottomSocials.map((link) => {
              return (
                <li 
                className='hover:text-green-500 lg:my-2 -mx-16 lg:-mx-7 text-[14px] lg:text-[17px] hover:translate-x-2 hover:transition-all hover:ease-in-out hover:duration-500'
                 key={link.id}>
                  <a href='#'>
                    {link.href}
                  </a>
                </li>
              );
            })}
          </ul>
          </div>
         </div>

         <div className='flex mx-3 lg:mx-0 space-x-[6rem]'>
          <div className='lg:py-9 py-2 mx-8 lg:space-x-[6rem]'>
          <p className='h3 lg:px-[5rem] lg:-mx-4'>
            Support
          </p>
          <ul>
            {Support.map((support) => {
              return (
                <li
                className='hover:text-green-500 lg:my-2 text-[14px] lg:text-[17px] lg:-mx-7 whitespace-nowrap hover:translate-x-2 hover:transition-all hover:ease-in-out hover:duration-300' 
                key={support.id}
                >
                  <a href='#'>
                    {support.href}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className='lg:py-9 py-4 lg:px-14 -mx-12'>
            <p className='h3 whitespace-nowrap font-bold lg:text-[18px] lg:-mx-[7rem] -mx-16 lg:-my-0 -my-3'>
            Stay up to date
            </p>
           <div className='flex items-center mx-2 -my-2 lg:my-0 lg:mx-[4rem]'>
           <input
             type='Email'
             placeholder='Your Email Here'
             className='rounded-md bg-[#717171] w-[10rem] lg:w-[12rem] lg:h-[40px] lg:-mx-44 -mx-[6rem] placeholder:px-2 lg:text-[14px] text-[10px] outline-none my-6'
             />
             <FaTelegram 
              className='lg:w-[2rem] lg:h-[1.5rem] w-[14px] lg:mx-32 mx-20'
             />
           </div>
        </div>
         </div>

          </div>

       </div>
      </div>
    </footer>
  )
}

export default Footer;
