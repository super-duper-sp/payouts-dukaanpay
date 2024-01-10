import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Payouts from './Payouts';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
     <Sidebar/>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
    <Header/>
        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-scroll bg-gray-200 p-4">
         
         <Payouts/>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;
