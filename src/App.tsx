import { Route, createBrowserRouter, createRoutesFromElements , RouterProvider, Router } from "react-router-dom"
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      {/* <Route path="job-listings" element={<JobListings />} /> */}
      {/* <Route path="view-all-jobs" element={<ViewAllJobs />} /> */}
    </Route>
 
)
);


const App = () =>{
    return <RouterProvider router={router}/>;
};

export default App;