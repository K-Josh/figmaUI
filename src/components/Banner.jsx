import Image from '../assets/Illustration.png';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="bg-[#f5f8f5] lg:py-12 py-6" id="banner">
      <div className="container mx-auto">
        <div 
        className="flex items-center gap-x-6 lg:gap-x-[10rem]">
          {/* text */}
          <div className="flex flex-col">
          <h1 className='lg:h2 text-[24px] font-primary whitespace-nowrap font-semibold text-gray-800'>
          Lessons and Insights <br />
          <span className='text-secondary'>from 8 years</span>
        </h1>
        <p className='text-black/90'>
        Where to grow your business as a photographer: site or social media?
        </p>
         <div className='my-2'>
          <button className='btn btn-lg'>
          Register
         </button>
          </div>
          </div>
          <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          >
          <img 
          className='w-[14rem] lg:w-[24rem]'
          src={Image} />
          </motion.div>
        </div>

       <div className='flex items-center justify-center gap-x-2'>
       <div className='w-3 h-3 bg-gray-400 rounded-full'></div>
        <div className='w-3 h-3 bg-gray-200 rounded-full'></div>
        <div className='w-3 h-3 bg-gray-200 rounded-full'></div>
       </div>
      </div>
    </section>
  )
}

export default Banner;
