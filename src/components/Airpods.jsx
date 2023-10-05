import Image4 from "../assets/airpodsPro.png";
import Image5 from "../assets/icon3.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import {Link} from "react-scroll";
import {BsArrowRightShort} from "react-icons/bs"

const AirPods = () => {
  return (
    <section className="lg:py-10 py-4 bg-gray-300/25" id="airpods">
      <div className="container mx-auto">
        <div className="lg:flex items-center gap-x-6 lg:gap-x-[5rem]">
        {/* image */}
          <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView={"show"}
          onViewportEnter={{once: false, amount: 0.6}}
          >
          <img 
            src={Image4}
            alt=""
            className=""
          />
          </motion.div>
        {/* text */}
        <div 
          className="lg:flex-1  flex-col items-center justify-between my-4 ">
         <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView={"show"}
            onViewportEnter={{once:false, amount: 0.3}}
          >
          <p className="text-black/75 lg:text-[17px] lg:w-[42rem]">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          </motion.div>
          <div className="">
          <span className="text-green-600 font-bold text-xl">Tim Smith</span>
          </div>
          <div className="mb-5">
          <span className="text-gray-600/60 font-bold text-xl">British Dragon Boat Racing Association</span>
          </div>
  {/* icons */}
          <div className="lg:flex  items-center space-x-10 mb-2">
            <motion.img 
              variants={fadeIn('left', 0.4)}
             initial="hidden"
             whileInView={"show"}
             onViewportEnter={{once: false, amount: 0.6}}
             src={Image5}
              className="lg:w-[24rem] mb-2"
             />
           <motion.div>
             <Link
               variants={fadeIn('right', 0.3)}
             initial="hidden"
             whileInView={"show"}
             onViewportEnter={{once: false, amount: 0.6}} 
               to="/" 
              className="text-green-500 cursor-pointer flex items-center space-x-8 lg:px-0 px-[8rem]">
             Meet all customers
             <BsArrowRightShort className="text-green-500 text-[24px] "/>
             </Link>
           </motion.div>
            
          </div>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default AirPods
