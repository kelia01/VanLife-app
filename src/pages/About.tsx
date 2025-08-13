import Navbar from "../components/Navbar"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="">
      <img src="../public/about.png" alt="" className=" top-0 left-0 w-full h-full object-cover"/>
      </div>
      <div className="bg-amber-100 mt-3 p-2.5 ">
        <h1 className="font-bold text-2xl">Don't squeeze in a sedan when you could relax in a van</h1>
        <p className="max-w-[20rem]">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified 
        before each trip
        </p>
      </div>
    </>
  )
}

export default About