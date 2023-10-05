import Logos from '../assets/Clients Logos.png'

const Clients = () => {
  return (
    <div className='py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col font-primary items-center'>
         {/* text */}
         <h2 className='lg:text-[44px] text-[24px] text-gray-600 font-bold'>
          Our Clients
         </h2>
         <p className='text-black/50 py-4 text-[14px]'>
         We have been working with some Fortune 500+ clients
         </p>
          <img src={Logos} alt='logos'/>
        </div>
      </div>
    </div>
  )
}

export default Clients