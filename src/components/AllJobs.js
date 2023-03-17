import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../features/jobs/jobsSlice';
import Loading from '../utils/Loading';
import SingleJob from './SingleJob';

const AllJobs = () => {
  const { jobs, isLoading, isError, error } = useSelector((state) => state.jobs);
  const { search, sort, status } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && jobs.length === 0) content = <div className="col-span-12">No jobs found.</div>;
  if (!isLoading && !isError && jobs.length > 0)
    content = jobs
      .filter((job) => job.title.toLowerCase().includes(search.toLowerCase()))
      .filter((job) => {
        switch (status) {
          case 'All':
            return job.type !== 'All';
          case 'Internship':
            return job.type === 'Internship';
          case 'Full Time':
            return job.type === 'Full Time';
          case 'Remote':
            return job.type === 'Remote';
          default:
            return jobs;
        }
      })
      .sort((a, b) => {
        switch (sort) {
          case 'Default':
            return jobs;
          case 'Salary (High to Low)':
            return b.salary - a.salary;
          case 'Salary (Low to High)':
            return a.salary - b.salary;
          default:
            break;
        }
      })
      .map((job) => <SingleJob key={job.id} job={job} />);

  return <div className="jobs-list ">{content}</div>;
};

export default AllJobs;
