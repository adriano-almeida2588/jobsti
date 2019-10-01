import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import './JobsListPage.css';
import axios from 'axios';

const JobsListPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const listJobs = await axios.get('http://localhost:5000/api/v1/jobs', {headers: {Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NTcxNzIxMTEsInN1YiI6MX0.neKk1s-rxFTmWz0v8TBC2GIVfz_bZAJMR9Zxp4PS4rA"}});
    setJobs(listJobs.data);
    setLoading(false);
  }, jobs)

  return (
    <div>
      <div class="container">
        <div className="spinner">
          {loading ? <Loader type="Puff" height="300" color="#00BFFF" width="300" /> : ''}
        </div>
        {jobs.map(job =>
          <div class="col s12 m7">
            <div class="card-panel">
              <div class="row valign-wrapper">
                <div class="card-image">
                  <img src="https://res.cloudinary.com/programathor/image/upload/c_fit,h_100,w_100/v1532954112/znyh7nofbyecnaraobxh.jpg" alt="" width="150" height="150" class="responsive-img"/>
                </div>
                <div class="col s10 card-content">
                  <h5><a href="#/">{job.title} <span class="badge">06/04/2019</span></a></h5>
                  <h6 class="truncate grey-text text-darken-1">{job.description}</h6>
                  {/* <h6 class="grey-text text-darken-2">{job.local} | {job.salary} | {job.contract_type} | {job.remote}</h6> */}
                  <h6><span class="grey-text text-darken-1 span-local">{job.local}</span> <span class="grey-text text-darken-2 span-local">{job.salary}</span> <span class="grey-text text-darken-2 span-local">{job.contract_type}</span> <span class="grey-text text-darken-2 span-local">Remoto</span></h6>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
    </div>
  )
}

export default JobsListPage
