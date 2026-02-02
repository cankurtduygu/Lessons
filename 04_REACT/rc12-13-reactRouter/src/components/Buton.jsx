import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'

const Buton = () => {

    const navigasyon=useNavigate()

  return (
    <div className="text-center">
      {/* <Link to="/login">
      
        <Button className="btn btn-danger p-4 m-2 w-25">LOGIN</Button>
      </Link> */}
      <Button
      onClick={()=>navigasyon("/login")}
       className="btn btn-danger p-4 m-2 w-25">LOGIN</Button>
      <Button className="btn btn-danger p-4 m-2 w-25">KAPA</Button>
      <Button className="btn btn-danger p-4 m-2 w-25">SİL</Button>
    </div>
  );
}

export default Buton