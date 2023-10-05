
// components
import Navbar from './components/Nav'
import Banner from './components/Banner';
import Clients from './components/Clients';
import System from './components/System';
import Info from './components/Info';
import Stats from './components/Stats';
import Instruction from './components/Instruction';
import AirPods from './components/Airpods';
import Cards from './components/Cards';
import Demo from './components/Demo';
import Footer from './components/Footer';
import FloatingButton from './components/floatingButton'


function App() {
  return (

    <div className=''>
    <FloatingButton />
     <Navbar />
      <Banner />
      <Clients />
      <System />
      <Info />
      <Stats />
      <Instruction />
      <AirPods />
      <Cards />
      <Demo />
      <Footer />
      
    </div>
    
  )
}

export default App
