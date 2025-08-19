import { Link, Outlet } from "react-router-dom"
const HostLayout = () => {
  return (
    <>
     <ul className="text-gray-500 font-semibold flex space-x-8">
        <li className="hover:underline hover:text-black"><Link to='/Host'>Dashboard</Link></li>
        <li className="hover:underline hover:text-black"><Link to='/Host/Income'>Income</Link></li>
        <li className="hover:underline hover:text-black"><Link to='/Host/Reviews'>Reviews</Link></li>
      </ul>
      <Outlet />
    </>
  )
}

export default HostLayout