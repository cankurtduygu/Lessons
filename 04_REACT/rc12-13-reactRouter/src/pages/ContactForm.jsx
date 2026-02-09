import React, { useState } from 'react'

const ContactForm = () => {

  const [info, setInfo] = useState({name: "", email: "", password: ""});

  const handleInfo = (e) => {
    setInfo({...info, [e.target.id]: e.target.value});
    console.log(info);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini işleme kodları buraya gelecek
    console.log("Form submitted:", info);
  }

  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h1>*********************************</h1>
        <h2>FORM EVENTS</h2>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name: 
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            required
            onChange={handleInfo}
          
          
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email: 
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            required
            onChange={handleInfo}
       
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: 
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            required
            onChange={handleInfo}
          
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm