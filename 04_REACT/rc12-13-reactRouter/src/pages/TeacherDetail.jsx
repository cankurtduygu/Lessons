import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const TeacherDetail = () => {
  //!1.yol navigate yolladığı path e id yi gömerek yolladı, burada da useParams la no yu çektik*******

  //  const { no } = useParams();
  // path ile yollanan id yi useParams hook uyla yakaladık
  //   const [person, setPerson] = useState({});

  //   useEffect(() => {
  //     axios
  //       .get(`https://jsonplaceholder.typicode.com/users/${no}`)
  //       .then((res) => setPerson(res.data))
  //   }, [no]);

  //!2.yol
  //! useLocation.//  navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz

  const {state:{a}} = useLocation(); // Teacher sayfasindan gelen state i useLocation ile yakaladık 

  return <div className='text-center mt-4'>
    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${a.id}`} alt="" />
    <h3>{a.name}</h3>
    <p>Username: {a.username}</p>
    <p>Email: {a.email}</p>
    <p>Phone: {a.phone}</p>
  </div>;
};

export default TeacherDetail;
