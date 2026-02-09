import React from 'react'

const AddTutorial = ({postTutorial}) => {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit işlemi burada yapılacak
    // console.log("Title:", title);
    // console.log("Description:", desc);

    postTutorial({title: title, description: desc});
    

    
    // Form gönderildikten sonra alanları temizleyelim
    setTitle("");
    setDesc("");
  };
  return (
    <div className='container text-center mt-4'>
    <h1 className='display-6 text-danger mt-4'>AddTutorial</h1>

    <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            required
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </div>
        <button type="submit" className="btn btn-danger mb-4">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddTutorial