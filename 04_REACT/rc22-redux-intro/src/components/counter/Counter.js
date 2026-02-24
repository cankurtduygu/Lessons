import React from 'react'
import "./Counter.css";
import { useDispatch, useSelector } from 'react-redux';
import { arttir, sifirla, azalt } from '../../redux/actions/counterActions';

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
              //dispatch aslinda garsona para sikistirip istedigii yaptirmak gibi dusunulebilir. Biz de arttir fn ni garsona veriyoruz ve garson da counterReducer.jsx deki switch case lerin devreye girmesini sagliyor.
      >ARTTIR</button>
      {/* arttir fn */}
      <button className='counter-button'
              onClick={()=>dispatch1(sifirla())}
      >RESET</button>
      <button className='counter-button negative'
              onClick={()=>dispatch1(azalt())}
      >AZALT</button>
    </div>

    </div>
  )
}

export default Counter