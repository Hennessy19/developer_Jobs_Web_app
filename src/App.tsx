import { Route, createBrowserRouter, createRoutesFromElements , RouterProvider, Router } from "react-router-dom"
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, {jobLoader} from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";



const App = () =>{

  // Add job
  const addJob = async (newJob: any) => {
    // console.log(newJob);
    // alert("Job added successfully");
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  }

  // delete Job
   const deleteJob = async (id: string) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
   }

    // update Job
    const updateJob = async (job: any) => {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
      return;
    }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
        <Route path="jobs/:id" element={<JobPage deleteJob={ deleteJob }/>} loader={jobLoader} />
        <Route path="edit/jobs/:id" element={<EditJobPage updateJobOnSubmit={ updateJob }/>} loader={jobLoader} />
        <Route path="add-job" element={<AddJobPage addJobOnSubmit={addJob} />} />
        <Route path="*" element={<NotFound />} />
  
        {/* <Route path="job-listings" element={<JobListings />} /> */}
        {/* <Route path="view-all-jobs" element={<ViewAllJobs />} /> */}
      </Route>
   
  )
  );

    return <RouterProvider router={router}/>;
};

export default App;