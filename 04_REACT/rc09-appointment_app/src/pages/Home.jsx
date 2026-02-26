import React, { useState } from "react";

import { doctorData, hastaData } from "../helper/Data";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";

const Home = () => {
  const [tikla, setTikla] = useState(true);
  let [doktorlar, setDoktorlar] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);

  const doctorClick = (abc) => {
//     setTikla(!tikla);
//   //  2 tane state var ve bunlar birbirine bağlıysa düzgün yani sıralı çalışmayabilir, o yüzden 2. state i tıkla ya bağlı değil dizinin length ine bağlı güncelledim

// doktorlar.length!==1 ? setDoktorlar( doktorlar.filter((a) => a.id === abc)): setDoktorlar(doctorData)

setTikla(false)


doktorlar = doktorlar.filter((a) => a.id === abc);

setDoktorlar(doktorlar)
setHastalar(hastalar.filter((a) => a.myDoctor === doktorlar[0].doctorName));


  };

  // const geridon = () => {
  //   // tıklayıda döndür
  //   setHastalar(hastaData);
  //   setDoktorlar(doctorData);
  // };
  return (
    <div
      style={{
        display: tikla ? "block" : "flex",
        justifyContent: "space-around",
      }}
    >
      <div>
        <header className="header">
          <h1>HOSPITAL</h1>

          <div className="dr">
            {doktorlar.map((doc) => (
              <div key={doc.id}>
                <img
                  className="btn"
                  src={doc.doctorImg}
                  alt=""
                  width="180px"
                  height="150px"
                  style={{ background: tikla ? "aqua" : "lightgreen" }}
                  onClick={() => doctorClick(doc.id)}
                />
                <h4
                  style={{
                    background: tikla ? "aqua" : "lightgreen",
                    borderLeft: `10px solid ${tikla ? "blue" : "green"}`,
                  }}
                >
                  {doc.doctorName}{" "}
                </h4>
              </div>
            ))}
          </div>
        </header>

        {!tikla && <AddPatient hastalar={hastalar} setHastalar={setHastalar} 
doktorlar={doktorlar}

        />}
      </div>

      <PatientList hastalar={hastalar} setHastalar={setHastalar} />
    </div>
  );
};

export default Home;
