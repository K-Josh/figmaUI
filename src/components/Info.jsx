import Image2 from "../assets/Frame 35.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <section className="lg:py-10 section py-4" id="info">
      <div className="container mx-auto">
        <div className="lg:flex  items-center gap-x-6 lg:gap-x-[15rem]">
          <motion.div
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView={"show"}
          onViewportEnter={{once: false, amount: 0.6}}
          >
          <img 
            src={Image2}
            alt=""
            className="lg:gap-x-[1rem]"
          />
          </motion.div>
        
        <div 
          className="lg:flex-1  flex-col items-center justify-between my-4 ">
        <motion.h1 
            variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView={"show"}
          onViewportEnter={{once:false, amount: 0.6}}
         className="lg:text-[30px] lg:whitespace-wrap text-[20px] font-primary  font-semibold text-gray-800/80 lg:w-[32rem] lg:tracking-wide">
          The unseen of spending three years at Pixelgrade
          </motion.h1>
          <p className="text-black/75 lg:text-[17px] lg:w-[40rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br/> accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br/> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br/> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <div className="flex flex-1">
          <button className="btn btn-sm">Learn More</button>
          </div>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default Info
