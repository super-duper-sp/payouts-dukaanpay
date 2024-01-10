// Payouts.js
import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';
import Overview from '../components/Overview';
import TransactionList from '../components/TransactionList';

const Payouts = () => {


    const [activeComponent, setActiveComponent] = useState('Dashboard');

    const handleToggleComponent = (component) => {
      setActiveComponent(component);
    };
  
  

  return (


<div className='bg-[white] p-4'>
<Overview/>


<div >
  <TransactionList />
</div>



</div>
);
};

export default Payouts;
