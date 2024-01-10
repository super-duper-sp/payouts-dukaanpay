import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { IoMdDownload } from 'react-icons/io';
import Transactioncard from './Transactioncard';

const TransactionList = () => {
  // Sample transaction data, replace with your actual data
  const transactions = [
    { Oid: '#281209', status: 'Successful', Tid: '131634495747', Rdate: 'Today, 08:45 PM', Oamount: '₹1,125.00' },
    { Oid: '#281210', status: 'Successful', Tid: '131634495748', Rdate: 'Today, 09:15 PM', Oamount: '₹500.00' },
    { Oid: '#281211', status: 'Processing', Tid: '131634495749', Rdate: 'Tomorrow, 10:30 AM', Oamount: '₹2,000.00' },
    { Oid: '#281212', status: 'Successful', Tid: '131634495750', Rdate: 'Yesterday, 02:00 PM', Oamount: '₹800.00' },
    { Oid: '#281213', status: 'Successful', Tid: '131634495751', Rdate: 'Tomorrow, 11:45 AM', Oamount: '₹1,750.00' },
    { Oid: '#281214', status: 'Successful', Tid: '131634495752', Rdate: 'Yesterday, 05:30 PM', Oamount: '₹300.00' },
    { Oid: '#281215', status: 'Successful', Tid: '131634495753', Rdate: 'Today, 03:20 PM', Oamount: '₹1,300.00' },
    { Oid: '#281216', status: 'Processing', Tid: '131634495754', Rdate: 'Tomorrow, 09:00 AM', Oamount: '₹900.00' },
    // Add more transactions as needed
  ];
  

 


  return (

   <div>
   <div className='mb-4'>
   <Transactioncard/>
   </div>



{/* Transaction Details Table */}
<div className="p-4 rounded bg-[white] shadow-md">
<div className="flex justify-between mb-4">
  {/* Search Bar */}
  <div className="rounded bg-[#F2F2F2] flex items-center border border-[#D9D9D9] p-2 gap-2 rounded-md text-[#999999]   border-[#D9D9D9]">
    <img
      className="w-3.5 h-3.5 object-cover"
      alt=""
      src="/search.png"
    />

    <div className="flex-1 leading-[20px]">
      Order ID or transaction ID
    </div>
  </div>

  <div className="flex items-center">
    <div className="cursor-pointer flex items-center border border-[#D9D9D9] p-1 rounded-md">
      <span className="mr-2 pr-2">Sort</span>
      <img src='/sort.png' alt='Sort Icon' />
    </div>

    {/* Download Icon */}
    <div className="ml-4 cursor-pointer flex items-center">
      <img src='/download.png' alt='Download Icon' />
    </div>
  </div>
</div>


  {/* Transaction Table */}

  <table className="min-w-full bg-white text-[#4D4D4D] rounded-md">
  <thead>
    <tr>
      <th className="py-2 px-4 border-b bg-[#F2F2F2] text-left">Order ID</th>
      <th className="py-2 px-4 border-b bg-[#F2F2F2] text-left">Status</th>
      <th className="py-2 px-4 border-b bg-[#F2F2F2] text-left">Transaction ID</th>
      <th className="py-2 px-4 border-b bg-[#F2F2F2] text-left">Refund Date</th>
      <th className="py-2 px-4 border-b bg-[#F2F2F2] text-left">Order amount</th>
    </tr>
  </thead>
  <tbody>
    {transactions.map((transaction) => (
      <tr key={transaction.id} className="bg-white">
        <td className="py-2 px-4 border-b text-[#146EB4] text-left">{transaction.Oid}</td>
        <td className="py-2 px-4 border-b text-[#4D4D4D] text-left">
          {/* Display status icon based on the transaction status */}
          {transaction.status === 'Successful' ? (
            <img src='/successful.png' alt="Successful" className="inline-block mr-2" />
          ) : (
            <img src='processing.png' alt="Processing" className="inline-block mr-2" />
          )}
          {transaction.status}
        </td>
        <td className="py-2 px-4 border-b text-[#4D4D4D] text-left">{transaction.Tid}</td>
        <td className="py-2 px-4 border-b text-[#4D4D4D] text-left">{transaction.Rdate}</td>
        <td className="py-2 px-4 border-b text-[#4D4D4D] text-left">{transaction.Oamount}</td>
      </tr>
    ))}
  </tbody>
</table>


</div>
</div>

  );
};

export default TransactionList;
