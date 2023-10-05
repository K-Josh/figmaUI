import { HiArrowSmRight } from 'react-icons/hi'

const Demo = () => {
  return (
    <section className='bg-[#E8F5E9] py-9 '>
     <div className="container mx-auto">
      <div className="flex flex-col items-center text-center mx-auto">
        <h2 className="text-black lg:h2 text-[24px] font-primary font-bold">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h2>
      </div>
      <div className="flex items-center justify-center my-4">
        <button className="btn3 lg:btn-lg btn-sm flex items-center">
          Get a Demo
          <HiArrowSmRight className="mx-2" />
        </button>
        </div>
     </div>
    </section>
  )
}

export default Demo;