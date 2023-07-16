import React, { useEffect } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Carousel from "../components/Carousel";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Back from "../components/Back";

const Details = () => {
  const { id } = useParams();
  const theme = useSelector((state) => state.theme);
  const data = useSelector((state) => state.data);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className={`details app ${theme}`}>
      <Header data={"../."} />
      <Back />
      <Carousel dataCarousel={data.projects[id]} />
      <div className="details-title">
        <h1>{data.projects[id].name}</h1>
        <p>{data.projects[id].description}</p>
      </div>
      <div className="tags-container">
        <div className="div-tags">
          <h2>Technologies</h2>
          {data &&
            data.projects[id].techno.length > 0 &&
            data.projects[id].techno.map((e, index) => {
              return (
                <div className="contain-tags" key={index}>
                  <span className="tags tags-techno">{e}</span>
                </div>
              );
            })}
        </div>
        <div className="div-tags">
          <h2>Outils</h2>
          {data &&
            data.projects[id].outils.length > 0 &&
            data.projects[id].outils.map((e, index) => {
              return (
                <div className="contain-tags" key={index}>
                  <span className="tags tags-outils">{e}</span>
                </div>
              );
            })}
        </div>
        <div className="div-tags">
          <h2>Méthodologies</h2>
          {data &&
            data.projects[id].methodologies.length > 0 &&
            data.projects[id].methodologies.map((e, index) => {
              return (
                <div className="contain-tags" key={index}>
                  <span className="tags tags-metho">{e}</span>
                </div>
              );
            })}
        </div>
      </div>
      <div className="button-details">
        <a href={data.projects[id].code} target="_blank" rel="noreferrer">
          Voir le code
        </a>
        <a href={data.projects[id].url} target="_blank" rel="noreferrer">
          Voir le site
        </a>
      </div>
      <Footer data={"../."} />
    </div>
  );
};

export default Details;
