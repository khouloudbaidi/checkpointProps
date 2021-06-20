// import logo from "./logo.svg";
import "./App.css";
import Profil from "./Profil/Profil";
const handleName = (name) => {
  alert(`Hello ${name}`);
};

function App() {
  return (
    <div className="App">
      <Profil
      
        fullName=" BAIDI Khouloud"
        Bio="Portez votre confiance comme une couronne"
        Profession="Licence appliquée en Systeme Embarqués et Mobiles"
        handleName={handleName}
      />
    </div>
  );
}

Profil.defaultProps = {
  fullName: "Inconu",
  Bio: "Nothing",
  Profession: "Nothing",
};

export default App;
