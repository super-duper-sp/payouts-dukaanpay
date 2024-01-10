import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { IoMdDownload } from 'react-icons/io';
import Transactioncard from './Transactioncard';

const TransactionList = () => {
  // Sample transaction data, replace with your actual data
  const transactions = [
    { Oid: '#281209', status: '7 July, 2023', Tid: '₹1,278.23', Rdate: '₹22', Oamount: '₹22' },
    // Add more transactions as needed
  ];

  const [sortDirection, setSortDirection] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');

 


  return (

   <div>
     <Transactioncard/>



{/* Transaction Details Table */}
<div className="mt-8 overflow-x-auto">
  <div className="flex justify-between mb-4">
    {/* Search Bar */}
    <input
      type="text"
      placeholder="Search..."
      className="px-4 py-2 border border-gray-700 rounded-md"
  
     
    />

    {/* Sort Icons */}
    <div className="flex items-center">
      <div className="cursor-pointer" >
        <img src='/sort.png'/>
      </div>

      {/* Download Icon */}
      <div className="ml-4 cursor-pointer" >
        <img src='/download.png'/>
      </div>
    </div>
  </div>

  {/* Transaction Table */}
  <table className="min-w-full bg-gray-800 text-white border border-gray-700 rounded-md">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">Order ID</th>
        <th className="py-2 px-4 border-b">Status</th>
        <th className="py-2 px-4 border-b">Transaction ID</th>
        <th className="py-2 px-4 border-b">Refund Date</th>
        <th className="py-2 px-4 border-b">Order amount</th>
      </tr>
    </thead>
    <tbody>
      {/* Replace with your transaction data rendering logic */}
      {transactions.map((transaction) => (
        <tr key={transaction.id}>
          <td className="py-2 px-4 border-b">{transaction.Oid}</td>
          <td className="py-2 px-4 border-b">{transaction.status}</td>
          <td className="py-2 px-4 border-b">{transaction.Tid}</td>
          <td className="py-2 px-4 border-b">{transaction.Rdate}</td>
          <td className="py-2 px-4 border-b ">{transaction.Oamount}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>

  );
};

export default TransactionList;
