import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uniqId from 'uniqid';
import { addJob, editJob } from '../features/jobs/jobsSlice';

const AddNewJobForm = () => {
  const navigate = useNavigate();
  const { edit, search, sort, status } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [salary, setSalary] = useState(0);
  const [deadline, setDeadline] = useState('');

  const resetForm = () => {
    setTitle('');
    setType('');
    setSalary(0);
    setDeadline('');
  };

  useEffect(() => {
    if (edit) {
      console.log(edit.salary);
      setTitle(edit.title);
      setType(edit.type);
      setSalary(Number(edit.salary));
      setDeadline(edit.deadline);
    }
  }, [edit]);

  const handleAddNewJob = (e) => {
    e.preventDefault();

    // new job to add
    const job = {
      title,
      type,
      salary: Number(salary),
      deadline,
    };

    if (edit) {
      dispatch(editJob({ ...job, id: edit.id }));
      resetForm();
      navigate('/');
    } else {
      dispatch(addJob({ ...job, id: uniqId() }));
      resetForm();
      navigate('/');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form className="space-y-6" onSubmit={handleAddNewJob}>
        <div className="fieldContainer">
          <label htmlFor="lwsJobTitle" className="text-sm font-medium text-slate-300">
            Job Title
          </label>
          <select
            id="lwsJobTitle"
            name="lwsJobTitle"
            autoComplete="lwsJobTitle"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          >
            <option value="" hidden selected>
              Select Job
            </option>
            <option>Software Engineer</option>
            <option>Software Developer</option>
            <option>Full Stack Developer</option>
            <option>MERN Stack Developer</option>
            <option>DevOps Engineer</option>
            <option>QA Engineer</option>
            <option>Product Manager</option>
            <option>Social Media Manager</option>
            <option>Senior Executive</option>
            <option>Junior Executive</option>
            <option>Android App Developer</option>
            <option>IOS App Developer</option>
            <option>Frontend Developer</option>
            <option>Frontend Engineer</option>
          </select>
        </div>
        <div className="fieldContainer">
          <label htmlFor="lwsJobType">Job Type</label>
          <select
            id="lwsJobType"
            name="lwsJobType"
            autoComplete="lwsJobType"
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="" hidden selected>
              Select Job Type
            </option>
            <option>Full Time</option>
            <option>Internship</option>
            <option>Remote</option>
          </select>
        </div>

        <div className="fieldContainer">
          <label htmlFor="lwsJobSalary">Salary</label>
          <div className="flex border rounded-md shadow-sm border-slate-600">
            <span className="input-tag">BDT</span>
            <input
              type="number"
              name="lwsJobSalary"
              id="lwsJobSalary"
              required
              className="!rounded-l-none !border-0"
              placeholder="20,00,000"
              value={Number(salary)}
              onChange={(e) => setSalary(Number(e.target.value))}
              min="1"
            />
          </div>
        </div>

        <div className="fieldContainer">
          <label htmlFor="lwsJobDeadline">Deadline</label>
          <input
            type="date"
            name="lwsJobDeadline"
            id="lwsJobDeadline"
            required
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div className="text-right">
          <input
            type="submit"
            value={edit ? 'Edit' : 'Save'}
            className="lws-submit cursor-pointer btn btn-primary w-fit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddNewJobForm;
