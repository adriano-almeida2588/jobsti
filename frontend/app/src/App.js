import React, { useState } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import JobsListPage from './pages/JobsListPage';
import DashboadPageCompany from './pages/DashboardPageCompany';
import JobPageForm from './pages/JobPageForm';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/company/dashboard" component={DashboadPageCompany} />
        <Route exact path="/jobs" component={JobsListPage} />
        <Route path="/jobs/novo" component={JobPageForm} />
      </div>
    </BrowserRouter>
  )  
}

export default App;
