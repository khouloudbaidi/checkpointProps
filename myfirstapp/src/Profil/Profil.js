import React from "react";
import imge from "../../src/khouloudbaidi.jpg";
const Profil = ({ fullName, Bio, Profession, handleName }) => {
  return (
    <div>
      <img src={imge} alt="KB" />
      <h1>{fullName}</h1>
      <h2>{Bio}</h2>
      <h3>{Profession}</h3>
      <button onClick={() => handleName("Khouloud")}>Click Me</button>
    </div>
  );
};

export default Profil;
