import axiosInstance from '../../utils/Axios';

export const getJobs = async () => {
  const response = await axiosInstance.get('/jobs');
  return response.data;
};

export const removeJob = async (id) => {
  const response = await axiosInstance.delete(`/jobs/${id}`);
  return response.data;
};

export const createJob = async (job) => {
  const response = await axiosInstance.post('/jobs', job);
  return response.data;
};

export const updateJob = async (job) => {
  const response = await axiosInstance.put(`/jobs/${job.id}`, job);
  console.log(response.data);
  return response.data;
};

export const deleteJob = async (job) => {
  const response = await axiosInstance.delete(`/jobs/${job.id}`);
  return response.data;
};
