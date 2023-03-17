/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { status } from '../features/filter/filterSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleStatusChange = (jobStatus) => {
    dispatch(status(jobStatus));
  };
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="main-menu menu-active lws-allJob" onClick={() => handleStatusChange('All')}>
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </Link>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <Link to="/" className="sub-menu" href="#" onClick={() => handleStatusChange('Internship')}>
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  Internship
                </Link>
              </li>
              <li>
                <Link to="/" className="sub-menu" href="#" onClick={() => handleStatusChange('Full Time')}>
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  Full Time
                </Link>
              </li>
              <li>
                <Link to="/" className="sub-menu" href="#" onClick={() => handleStatusChange('Remote')}>
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  Remote
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/add-job" className="main-menu lws-AddJob">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
