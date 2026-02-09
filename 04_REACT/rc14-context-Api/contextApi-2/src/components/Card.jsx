import React from 'react'

const Card = ({ name }) => {
  return (
    <div>
      <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${name}`} alt=""
      width="200px" />
    </div>
  )
}

export default Card