import Image3 from "../assets/pana.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Instruction = () => {
  return (
    <section className="lg:py-10 py-4">
      <div className="container mx-auto">
        <div className="lg:flex  items-center gap-x-6 lg:gap-x-[15rem]">
          <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView={"show"}
          onViewportEnter={{once: false, amount: 0.6}}
          >
          <img 
            src={Image3}
            alt=""
            className="lg:gap-x-[1rem]"
          />
          </motion.div>
        
        <div className="lg:flex-1  flex-col items-center justify-between my-4 ">
        <motion.h1 
            variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView={"show"}
          onViewportEnter={{once:false, amount: 0.6}}
          className="lg:text-[30px] text-[20px] font-primary  font-semibold text-gray-800/90 lg:w-[32rem] leading-9">
          How to design your site footer like we did
          </motion.h1>
          <p className="text-black/75 lg:text-[17px] lg:w-[40rem] mb-2">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
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

export default Instruction
