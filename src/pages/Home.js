import React from 'react';
import AllJobs from '../components/AllJobs';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
      <div className="lg:pl-[14rem]  mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <Header />
          <AllJobs />
        </main>
      </div>
    </div>
  );
};

export default Home;
