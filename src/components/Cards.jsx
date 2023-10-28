import Image6 from "../assets/woman.png";
import Image7 from "../assets/laptop.png";
import Image8 from "../assets/laptop2.png";
import {Link} from "react-scroll";
import {BsArrowRightShort} from "react-icons/bs";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";

const Cards = () => {
  return (
    <main className="lg:py-10 py-4 mb-[4rem]" id="cards">
     <div className="container mx-auto ">
         <div className="flex justify-center  items-center">
           <div className="flex flex-col  items-center">
           <h2 className="lg:h2 font-semibold text-2xl text-center text-black/75">Caring is the new marketing</h2>
             <p className="text-black/70 lg:w-[44rem] text-center">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&apos;s joining the community, read about how our community are increasing their membership income and lot&apos;s more.
             </p>
           </div>
       </div>
      <div className="lg:flex items-center justify-center space-y-12 space-x-4">
        <motion.div  
         variants={fadeIn('left', 0.3)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once: false, amount: 0.6}}
        className="flex flex-col group ">
        <div className="">
          <img src={Image7} className="w-[18rem] lg:w-[24rem] cursor-pointer lg:group-hover:scale-110 transition-all duration-500 "/>
        </div>
         <div className="bg-white/80 w-[18rem] shadow-lg rounded-md cursor-pointer mx-[0rem] lg:mx-11 -my-7 lg:group-hover:scale-110 transition-ease duration-700 lg:hover:translate-x-0 hover:translate-x-2">
           <h4 className="capitalize font-semibold text-center text-black p-4 ">creating streamlined <br/>safeguarding processes with <br/>oneRed</h4>
           <Link className="text-green-600 flex items-center justify-center">
            ReadMore
            <BsArrowRightShort className="space-x-3" />
           </Link> 
         </div>
        </motion.div>
        
        <motion.div  
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.6}}
         className="flex flex-col group">
         <div className="">
          <img src={Image6} className="w-[18rem] lg:w-[24rem] cursor-pointer lg:group-hover:scale-110 transition-all duration-500 z-40"/>
        </div>
         <div className="bg-white/80 w-[18rem] lg:w-[18rem] shadow-lg rounded-md cursor-pointer mx-[0rem] lg:mx-11 -my-7 lg:group-hover:scale-110 transition-ease duration-700 lg:hover:translate-x-0 hover:translate-x-2">
           <h4 className="capitalize font-semibold text-center text-black p-4 ">what are your safeguarding <br/>responsibilities and how can <br/>you manage them</h4>
           <Link className="text-green-600 flex items-center justify-center">
            ReadMore
            <BsArrowRightShort className="space-x-3" />
           </Link> 
         </div>
        </motion.div>

        <motion.div  
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.6}}
         className="flex flex-col group">
         <div className="">
          <img 
           src={Image8} className="w-[18rem] lg:w-[24rem] cursor-pointer lg:group-hover:scale-110 transition-all duration-500 z-40"/>
        </div>
         <div className="bg-white/80 w-[18rem] shadow-lg rounded-md cursor-pointer mx-[0rem] lg:mx-11 -my-7 lg:group-hover:scale-110 transition-ease duration-700 lg:hover:translate-x-0 hover:translate-x-2">
           <h4 className="capitalize font-semibold text-center text-black p-4 ">revamping the membership <br/>model with triathon <br/>Austria</h4>
           <Link className="text-green-600 flex items-center justify-center">
            ReadMore
            <BsArrowRightShort className="space-x-3" />
           </Link> 
         </div>
        </motion.div>
      
      </div>
     </div>
    </main>
  )
}

export default Cards;
