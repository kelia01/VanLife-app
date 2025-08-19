import { Link } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <div className="relative w-full h-[90vh]">
        <img
          src="../public/home.png"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        <div className="text-white z-10 relative top-0 bottom-0 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="font-bold text-4xl text-center md:text-5xl">
            You got the travel plans, we got the travel vans.
          </h1>
          <p className="mt-4 max-w-[21rem] text-white">
            Add adventure to your life by joining #vanlife.
            Rent the perfect van to make perfect trip
          </p>
        </div>
        <Link to='/about'><button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md mt-8 px-8 py-3">
          Find your van
        </button></Link>
      </div>
    </div>
  );
};

export default App;
