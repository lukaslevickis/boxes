import './App.css';
import React from 'react';
import boxes from './boxes'
import Box from './Box';

function App(props) {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    //js es6 approach
    // setSquares(prevSquares => {
    //   const newSquares = [];
    //   for(let i = 0; i < prevSquares.length; i++) {
    //     const currentSquare = prevSquares[i];
    //     if(currentSquare.id == id) {
    //       const updatedSquare = {
    //         ...currentSquare,
    //         on: !currentSquare.on
    //       }
    //       newSquares.push(updatedSquare);
    //     } else {
    //       newSquares.push(currentSquare);
    //     }
    //   }
    //   return newSquares;
    // })

    //map
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  const squareElements = squares.map(square => (
    <Box on={square.on} key={square.id} id={square.id} toggle={toggle} />
    // <div style={styles} className='box' key={square.id}></div>
  ))

  return (
    squareElements
  );
}

export default App;
