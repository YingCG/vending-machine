import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Chips() {
  const [eatenChipsCount, setEatenChipsCount] = useState(0)
  const [chipsBagsCount, setChipsBagsCount] = useState(1)

  const [chips, setChips] = useState({
    src: './images/duckchips.jpg',
    height: '300px',
    width: 'auto'
  })

  function handleChips(){
    setChipsBagsCount(chipsBagsCount + 1)
  }

  function handleClick(){
    setEatenChipsCount(eatenChipsCount + 1)
  }

  function range(number) {
    const result = [];

    for (let i = 0; i < number; i++) {
      result.push(i + 1);
    }

    return result;
  }

    return (
      <div className="VendingMachine">
  
          <h2>
          {eatenChipsCount} of Chips have been eaten.
          </h2>
          {
            range(chipsBagsCount).map(key => <img key={key} src='./images/duckchips.jpg' className="vending-machine" alt="vending machine" onClick={handleChips} style={{'width': '200px', 'height' : 'auto'}}/>)
          }
          <button onClick={handleClick} value={eatenChipsCount} >nom nom nom</button>

          <Link to='/'>Go Back</Link>
      </div>
    );
  }
  
  export default Chips;
  