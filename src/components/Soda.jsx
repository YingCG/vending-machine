import React from 'react'
import { Link } from 'react-router-dom'

function Soda() {
    return (
      <div className="VendingMachine">
  
          <h2>
           Soda
          </h2>
        <Link to='/'>Go Back</Link>
          <img src='./images/soda-can-aluminium.jpg' className="vending-machine" alt="vending machine" />
      </div>
    );
  }
  
  export default Soda;
  