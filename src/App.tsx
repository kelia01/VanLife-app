import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='relative w-full h-[90vh]'>
      <img src="../public/home.png" alt="" 
      className="absolute top-0 left-0 w-full h-full object-cover"/>
<div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>

      <div className='text-white z-10 relative top-0 bottom-0 flex flex-col justify-center items-center h-full text-center px-4'>
        <h1 className='font-bold text-4xl text-center '>You got the travel plans, we got the travel vans.</h1>
        <p className='mb-1 block '>Add adventure to your life by joining #vanlife</p>
        <p>Rent the perfect van to make perfect trip</p>
      </div>
      <button className='bg-yellow-600 text-center py-3 text-white'>Find your van</button>
      </div>

      <Footer />
    </div>
  )
}

export default App