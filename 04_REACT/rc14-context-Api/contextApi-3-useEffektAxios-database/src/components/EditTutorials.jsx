import React, { useState } from 'react'

const EditTutorials = ({edit, setEdit, putTutorial}) => {

  // console.log(edit);
 

  return (
    <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Modal
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">

            <div className="mb-3">
              <label htmlFor="title" className='form-label'>Title</label>
              <input type="text" className="form-control" id="title" 
              value={edit.title || ""} 
              onChange={(e)=> setEdit({...edit, title: e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className='form-label'>Description</label>
              <input type="text" className="form-control" id="description" 
              value={edit.description || ""}
              onChange={(e)=> setEdit({...edit, description: e.target.value})}
               />
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" 
              data-bs-dismiss="modal"
              onClick={() => putTutorial(edit)}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default EditTutorials