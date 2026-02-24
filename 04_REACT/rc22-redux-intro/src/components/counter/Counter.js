import React from 'react'
import "./Counter.css";
import { useDispatch, useSelector } from 'react-redux';
import { arttir } from '../../redux/actions/counterActions';

const Counter = () => {

  // degiskenler useSeletor hook uyla cekilir

  const {sayac, text} = useSelector((state) => state.counterReducer)
  // useDispatch hook u ise dispatch1 adinda bir degiskene atandi. Dispatch1 ile butonlara tiklandiginda counterActions.jsx deki arttir fn nin devreye girmesi saglanacak.
  const dispatch1 = useDispatch();

  return (
    <div className='app'>
    <h2 className='counter-header'>Counter with Redux</h2>
    <h1>{sayac}</h1>
    {/* sayac */}

    <h2></h2>
    {/* text */}

    <div>
      <button className='counter-button positive'
              onClick={() => dispatch1(arttir())}
      >ARTTIR</button>
      {/* arttir fn */}
      <button className='counter-button'>RESET</button>
      <button className='counter-button negative'>AZALT</button>
    </div>

    </div>
  )
}

export default Counter