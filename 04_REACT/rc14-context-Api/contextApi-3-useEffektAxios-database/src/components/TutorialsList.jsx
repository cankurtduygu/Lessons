import React, { useEffect, useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditTutorials from './EditTutorials';

const TutorialsList = ({tutorials, deleteTutorial, putTutorial}) => {



  const [edit, setEdit] = useState("");

  

  return (
    <div className='container mt-4'>
    <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col" className='text-center'>Edit</th>
    </tr>
  </thead>
  <tbody>
  { tutorials && tutorials.map( (tut) => (
    
    <tr key={tut.id}>
    <th >{tut.id}</th>
      <td>{tut.title}</td>
      <td>{tut.description}</td>
      <td className='d-flex'>
        <AiFillDelete 
          type='button'
          style={{cursor:"pointer"}} 
          className='text-danger cursor-pointer fs-4 mx-auto d-block'
          onClick={() => deleteTutorial(tut.id)}
          />
        <FaEdit 
          style={{cursor:"pointer"}} 
          className='text-warning fs-4 mx-auto d-block' 
          data-bs-toggle="modal" 
          data-bs-target="#editModal"
          onClick={()=>setEdit(tut)}
          />

      </td>
    </tr>
    )) }
  </tbody>
</table>

<EditTutorials edit={edit} setEdit={setEdit} putTutorial={putTutorial} />
    </div>
  )
}

export default TutorialsList