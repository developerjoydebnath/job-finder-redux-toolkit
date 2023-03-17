import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { edit } from '../features/filter/filterSlice';

const SingleJob = ({ job = {} }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, type, salary, deadline } = job;

  // change the date format
  const dateObj = new Date(deadline);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString('en-US', options);

  const handleEditJob = () => {
    dispatch(edit(job));
    navigate(`/edit-job`);
  };

  return (
    <div className="job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
            <i
              className={`fa-solid fa-stop ${type === 'Full Time' && ' !text-[#FF8A00]'} ${
                type === 'Internship' && ' !text-[#FF5757]'
              } ${type === 'Remote' && ' !text-[#56E5C4]'} text-lg mr-1.5`}
            ></i>
            {type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {formattedDate}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button type="button" className="lws-edit btn btn-primary" onClick={handleEditJob}>
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
            Edit
          </button>
        </span>

        <span className="sm:ml-3">
          <button type="button" className="lws-delete btn btn-danger ">
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default SingleJob;
