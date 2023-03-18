import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createJob, getJobs, removeJob, updateJob } from './jobsAPI';

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: '',
};

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const jobs = await getJobs();
  return jobs;
});

export const deleteJobs = createAsyncThunk('jobs/deleteJobs', async (id) => {
  const deletedJob = await removeJob(id);
  return deletedJob;
});

export const addJob = createAsyncThunk('jobs/addJob', async (job) => {
  const addedJob = await createJob(job);
  return addedJob;
});

export const editJob = createAsyncThunk('jobs/editJob', async (job) => {
  const updatedJob = await updateJob(job);
  return updatedJob;
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  extraReducers: (builder) => {
    builder
      // fetch all job
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = '';
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.jobs = [];
      })
      // add a new job
      .addCase(addJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(addJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = '';
        state.jobs.push(action.payload);
      })
      .addCase(addJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      // edit and update a job
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(editJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = '';
        const matchedJob = state.jobs.findIndex((job) => job.id === action.payload?.id);
        state.jobs[matchedJob] = action.payload;
      })
      .addCase(editJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      // delete a job
      .addCase(deleteJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(deleteJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = '';
        const matchedJob = state.jobs.findIndex((job) => job.id === action.payload?.id);
        state.jobs.splice(matchedJob, 1);
      })
      .addCase(deleteJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobsSlice.reducer;
