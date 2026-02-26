import React, { useState } from 'react'
import uuid from "react-uuid"
const AddPatient = ({hastalar,setHastalar,doktorlar}) => {
const[hastaAdi,setAd]=useState("")
const[tarih,setTarih]=useState("")

const handleSubmit=(e)=>{
  e.preventDefault()

// console.log(uuid());
  setHastalar([...hastalar,{
    id:uuid(),
    patientName:hastaAdi, 
    day:tarih, 
    isDone:false,
     myDoctor:doktorlar[0].doctorName}])
}


  return (
    <form  onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name"> Patient Information</label>
        <input
          id="name"
          type="text"
          onChange={(e)=>setAd(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor=""> Day & Time</label>
        <input
          type="datetime-local"
       onChange={(e)=>setTarih(e.target.value)}
        />
      </div>

      <div>
        <button className="doc" type="submit">
          <span style={{color:"red"}}>{doktorlar[0].doctorName} </span> için kayıt oluştur
        </button>
      </div>
    </form>
  );
}

export default AddPatient