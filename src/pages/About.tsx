import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-[50vh] md:h-[60vh]">
      <img src="../public/about.png" alt="van adventure" className="w-full h-full object-cover"/>
      </div>
      <div className="bg-white px-6 py-10 text-center max-w-3xl mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl mb-4">Don't squeeze in a sedan when you could relax in a van</h1>
        <p className="text-gray-700 leading-relaxed">Our mission is to enliven your road trip with the perfect travel van rental. 
          Our vans are recertified before each trip to ensure your travel plans 
          can go off without a hitch. (Hitch costs extra 😏)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic 
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="bg-amber-100 px-6 py-10 text-center"> 
        <h2 className="font-bold text-xl md:text-2xl mb-2">
          Your destination is waiting.
        </h2>
        <p className="font-bold text-xl md:text-2xl mb-6">
          Your van is ready.
        </p>
        <Link to='/vans'><button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800">
          Explore our vans
        </button></Link>
      </div>
      <Footer />
    </>
  )
}

export default About