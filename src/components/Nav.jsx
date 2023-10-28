
import {Link} from "react-scroll";
import Logo from '../assets/Logo.png';
import {TfiMenuAlt} from "react-icons/tfi";
import {TiLockClosedOutline} from "react-icons/ti";
import { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className=" py-4 w-full shadow-md z-99 ">
      <div className='container mx-auto lg:pb-0 pb-8 lg:pl-0 pl-8'>
          <div className='flex justify-between flex-col lg:flex-row gap-y-5 transition-all duration-500 relative '>
            <img src={Logo} alt='head logo' 
             className='lg:h-[18px] h:[24px] w-[86px] mb-7' 
            />
             {/* menu icons */}
             <div
               onClick={()=>setOpen(!open)} 
               className="absolute right-8 top-1 cursor-pointer lg:hidden ">
                {open ? <TiLockClosedOutline className="text-3xl lg:hidden text-green-600"/> :<TfiMenuAlt className="text-3xl lg:hidden text-green-600"/>}
              </div>
             <div className={`lg:flex-row flex flex-col bg-white lg:mx-[12rem] w-full lg:static lg:space-x-4 transition-all duration-500 ease-in ${open ? 'mx-[1rem] lg:mx-0' : 'hidden lg:my-0 '} pl-6`}>  
            <Link 
              to="banner"
              activeClass='active'
              smooth={true}
              spy={true} 
              className="text-green-500 hover:text-green-500 cursor-pointer text-[20px]"
            >Home</Link>
            <Link 
              to="system"
              activeClass='active'
              smooth={true}
              spy={true} 
              className="text-black hover:text-green-500 cursor-pointer text-[20px] "
            >Service</Link>
             <Link 
              to="info"
              activeClass='active'
              smooth={true}
              spy={true} 
              className="text-black hover:text-green-500 cursor-pointer text-[20px] "
            >Feature</Link>
             <Link 
              to="airpods"
              activeClass='active'
              smooth={true}
              spy={true} 
              className="text-black hover:text-green-500 cursor-pointer text-[20px] "
            >Product</Link>
                <Link 
              to="cards"
              activeClass='active'
              smooth={true}
              spy={true} 
              className="text-black hover:text-green-500 cursor-pointer text-[20px] "
            >Testimonials</Link>
              <Link 
              to="banner"
              activeClass='active'
              smooth={true}
              spy={true} 
              className="text-black hover:text-green-500 cursor-pointer text-[20px] "
            >FAQ</Link>
            </div> 
          

           <div className={`max-w-[10rem] gap-y-4 flex lg:flex-row gap gap-x-4 lg:mx-[62rem] transition-all duration-700 ease-in absolute ${open ? 'mx-[8rem] lg:mx-0' : '-my-[16rem] lg:my-0'}`}>
           <button className="btn btn-sm whitespace-nowrap">Sign up</button>
            <button className="btn2 btn-sm hover:text-white text-green-600">Login</button>
           </div>
          </div>
        </div>
    </nav>
   
    
  )
}

export default Navbar;