import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom'; //this makes sure that the page does not refresh when we click on the link
import { NavLink } from 'react-router-dom'; //this works the same as Link but it adds a class of active to the link when it is active

const Navbar =() =>{

  const linkClass = ({isActive}: {isActive: boolean}) => (
    // this is a function that takes an object with a property isActive and returns a class based on the value of isActive
    isActive ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
  )

    return(
        <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div
              className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
            >
              {/* <!-- Logo --> */}
              <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                <img
                  className="h-10 w-auto"
                  src={ logo }
                  alt="React Jobs"
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                  >React Jobs</span
                >
              </a>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink
                    to="/"
                    // className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                    className={linkClass}
                    >Home</NavLink>
                  <NavLink
                    to="/jobs"
                    className={linkClass}
                    >Jobs</NavLink>
                  <NavLink
                    to="/add-job"
                    className={linkClass}
                    >Add Job</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;