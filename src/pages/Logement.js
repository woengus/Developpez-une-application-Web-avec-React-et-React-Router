import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Stars from "../components/Stars";
import logements from "../logements.json";
import Gallery from "../components/Gallery";

const Logement = () => {
  const { id } = useParams(); //returns an object of key/value pairs of URL parameters.
  const navigate = useNavigate(); //returns a function that lets you navigate programmatically.

  const logement = logements.find((element) => {
    return element.id === id;
  });
  useEffect(() => {
    //this hook allows you to perform side effects in your components.
    const logementFounded = logements.find((element) => {
      return element.id === id;
    });
    if (logementFounded === undefined) {
      navigate("/404");
    }
  });

  const equipements = logement ? logement.equipments : [];
  //map des equipements
  const equipementHtml = equipements.map((data) => {
    return <li key={data}>{data}</li>;
  });
  const tags = logement ? logement.tags : [];
  //const [curentIndex, setCurentIndex] = useState(0); //The React useState Hook allows us to track state in a function component.

  //flèche de droite
  /*const handleRotationRight = () => {
    const totalLength = logement.pictures.length;
    if (curentIndex + 1 === totalLength) {
      //on vérifie si l'index dépasse le total, si oui on retourne à 0, première image
      setCurentIndex(0);

      return;
    }
    const newIndex = curentIndex + 1;

    setCurentIndex(newIndex);
  };
  //flèche de gauche
  const handleRotationLeft = () => {
    const totalLength = logement.pictures.length;
    if (curentIndex === 0) {
      setCurentIndex(totalLength - 1);
      return;
    }
    const newIndex = curentIndex - 1;
    setCurentIndex(newIndex);
  };*/
  if (logement) {
    return (
      <div className="logement">
        <div className="background-logement">
          <div className="background-flex">
            <div className="background-img">
              <Gallery pictures={logement?.pictures} />
            </div>
          </div>

          <div className="flex-information-logement">
            <div className="flex-title-town">
              <div className="title-logement">{logement?.title}</div>
              <div className="town-logement">{logement?.location}</div>
              <div className="flex-tags">
                {tags.map((data) => {
                  return (
                    <div className="tags" key={data}>
                      {data}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="host-flex">
              <div className="content-picture-name">
                <div className="host-name">{logement?.host.name}</div>
                <div className="host-picture">
                  <img src={logement?.host.picture} alt={logement?.host.name} />
                </div>
              </div>

              <div className="flex-logement-town-stars">
                <Stars rating={logement?.rating} />
              </div>
            </div>
          </div>

          <div className="flex-logement">
            <div className="description-full">
              <Dropdown title={"Description"} text={logement?.description} />
            </div>
            <div className="equipements-full">
              <div className="equipements-full">
                <Dropdown title="Equipements" text={equipementHtml} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Logement;
