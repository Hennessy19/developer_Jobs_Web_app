import { useState } from "react"; // useState is a hook that allows us to use state in a functional component
import {FaMapMarker } from "react-icons/fa"; //import the map marker icon
import { Link } from "react-router-dom";

// React hooks are functions that let you use state and other React features in functional components

const JobListing = ({job}:any) => {
    // console.log(job);

    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = job.description;  

    if (!showFullDescription) {
        description = description.substring(0, 90) + "...";
    }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button onClick={()=>setShowFullDescription((prevState)=>!prevState)}  className="text-indigo-500 mb-5 hover:text-indigo-600">{showFullDescription ? "Less": "More"}</button>
        {/* On clicking the button set the previous state to the opposite of what it was before */}

        <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            {/* <i className="fa-solid fa-location-dot text-lg"></i> */}
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.location}
          </div>
          <Link
            to={`/job/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
