import React, { use } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Teacher = () => {
  const navigation = useNavigate();

  const [people, setPeople] = useState([]);

  const getir = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    setPeople(res.data);
  };

  useEffect(() => {
    getir();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {people.map((a) => (
          <div key={a.id} className="col-12 col-sm-6 col-md-4 col-lg-3 m-3">
            <img
              // onClick={()=>navigation(`/teacher/${a.id}`)}
              onClick={() => navigation(`/teacher/${a.id}`, { state: { a } })}
              style={{ cursor: 'pointer' }}
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${a.id}`}
              alt=""
            />
            <h5 className="text-danger">{a.username}</h5>
            <h6 className="text-warning">{a.email}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacher;
