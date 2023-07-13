import React from "react";
import { useSelector } from "react-redux";
import { howManyTimesUse } from "../data/projectData";
const use = howManyTimesUse;
const Skill = () => {
  const data = useSelector((state) => state.data);

  return (
    <div className="languages">
      {use &&
        use.map((e, key) => {
          return (
            <div key={key} className="language-card">
              <p>{e.split(' ').slice(0, -1).join(" ")}</p>
              <span>Utilisé dans <strong>{e.split(' ').slice(-1).join(" ")}</strong> {e.split(' ').slice(-1).join(" ") > 1 ? 'projets' : 'projet'}</span>
            </div>
          );
        })}
    </div>
  );
};

export default Skill;
