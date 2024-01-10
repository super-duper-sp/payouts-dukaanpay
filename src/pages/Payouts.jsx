// Payouts.js
import React from 'react';
import Header from '../components/Header';
import { useState } from 'react';
import Overview from '../components/Overview';

const Payouts = () => {


    const [activeComponent, setActiveComponent] = useState('Dashboard');

    const handleToggleComponent = (component) => {
      setActiveComponent(component);
    };
  
  

  return (

    <div>
        <Overview/>
    </div>
);
};

export default Payouts;
