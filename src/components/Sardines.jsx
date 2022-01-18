import React from 'react'
import { Link } from 'react-router-dom'

function Sardines() {
    return (
      <div className="VendingMachine">
  
          <h2>
          Sardines
          </h2>
          <Link to='/'>Go Back</Link>
          <img src='./images/sardines.jpg' className="vending-machine" alt="vending machine" />
</div>
    );
  }
  
  export default Sardines;
  