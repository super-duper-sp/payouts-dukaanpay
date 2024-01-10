import React from 'react'

const Transactioncard = () => {
  return (
   
    <div className="pt-8">
    <h1 className="text-xl font mb-6">Transactions | This Month</h1>
  
    {/* Transaction Summary */}
    <div className="flex flex-initial">
  
      {/* Payouts */}
      <div className="bg-[#E6E6E6] text-[#808080]  py-1 px-4 rounded-full mb-1 mx-2">
        Payouts (22)
      </div>
  
      {/* Refunds */}
      <div className="bg-[#146EB4] text-white  py-1 px-4 rounded-full mb-1 mx-2">
        Refunds (22)
      </div>
  
    </div>
  </div>
  
  );
}

export default Transactioncard