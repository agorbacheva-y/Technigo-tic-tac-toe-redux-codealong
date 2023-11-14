import React from 'react'
import { useSelector } from 'react-redux';
import { Square } from 'components/Square'

// get squuares from redux state then map over to render each square

export const Board = () => {
  // access redux store and grab squares
  const squares = useSelector((store) => (store.game.squares))

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}
