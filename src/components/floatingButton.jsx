import {BsInfo} from "react-icons/bs";
import {AiOutlineHome} from "react-icons/ai"
import {BiSupport} from "react-icons/bi"
import {FaBoxOpen, FaQuestion} from "react-icons/fa";
import {RiUserStarLine} from "react-icons/ri";
import {Link} from "react-scroll";
import {CgMenuRound} from "react-icons/cg"

const FloatingButton = () => {
  return (
    <div className="group fixed bottom-20 right-24 p-2 items-end justify-end w-14 h-14">
     <div className="absolute rounded-full transition-all ">
     <div className="flex items center justify-center ">
      <CgMenuRound
        className="bg-green-400 w-12 h-12 rounded-full p-2 group-hover:rotate-90 transition-all duration-[0.6s] cursor-pointer "
      />
     </div>
    <div>
      <div 
       className="absolute rounded-full transition-all duration-[0.4s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-[2rem] group-hover:translate-y-[0.5rem] flex p-2 hover:p-3 hover:scale-100 scale-110">
      <Link
       to="banner" 
       className=" flex items-center">
       <AiOutlineHome className="text-black w-12 h-12 rounded-full p-2  cursor-pointer bg-[#F0FF42]">Home</AiOutlineHome> 
      </Link>
      </div>

     <div 
      className="absolute rounded-full transition-all duration-[0.4s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-[11rem] group-hover:translate-x-8  flex p-2 hover:p-3 scale-100 ">
      <Link to="system">
       <BiSupport className="bg-[#82CD47] w-12 h-12 rounded-full p-2  cursor-pointer" />
      </Link>
     </div>

     <div 
      className="absolute rounded-full transition-all duration-[0.4s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-[4rem] group-hover:-translate-x-[6rem] flex p-2 hover:p-3 scale-100">
     <Link to="system">
       <RiUserStarLine className="bg-[#54B435] w-12 h-12 rounded-full p-2  cursor-pointer" />
      </Link>
     </div>

     <div 
      className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-[3rem] group-hover:-translate-y-[9rem] flex p-2 hover:p-3 scale-100 ">
     <Link to="airpods">
       <FaBoxOpen className="bg-[#379237] w-12 h-12 rounded-full p-2  cursor-pointer" />
      </Link>
     </div>

     <div 
      className="absolute rounded-full transition-all duration-[0.4s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:translate-x-[5rem] group-hover:-translate-y-[6rem] flex p-2 hover:p-3 scale-100 ">
     <Link to="cards">
       <BsInfo className="bg-[#A149FA] w-12 h-12 rounded-full p-2  cursor-pointer" />
      </Link>
     </div> 

      <div 
      className="absolute rounded-full transition-all duration-[0.4s] ease-out scale-y-0 group-hover:scale-y-100 hover:scale-y-75 group-hover:translate-x-[4rem] group-hover:-translate-y-[1rem] flex p-2 hover:p-3 scale-100">
      <Link>
       <FaQuestion className="bg-[#3B44F6] w-12 h-12 rounded-full p-2 cursor-pointer" />
      </Link>
      </div>
        </div>

     
   </div>
 </div>
  )
}

export default FloatingButton
