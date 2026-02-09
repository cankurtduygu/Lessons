import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import data from '../data';

const CardDetail = () => {

    const {name} = useParams(); //AppRouter dan gelen dinamik yol bilgisini useParams ile yakalıyoruz
    const navigate = useNavigate();

  return (
    <div>
        {data.map((a)=>
        a.name===name  && (
            <div key={a.id} className="text-center mt-4">
                <h2>{a.name}</h2>
                <img src={a.img} alt={a.name} width="330px" />
                <p>{a.text}</p>
                {/* <button className='btn btn-danger' onClick={()=>window.history.back()}>GO BACK</button> */}
                <button className='btn btn-danger' onClick={()=>navigate(-1)}>GO BACK</button>
            </div>
        ) 
        )}
    </div>
  )
}

export default CardDetail