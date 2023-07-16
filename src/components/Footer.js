import React, { useCallback, useEffect, useRef, useState } from "react";
import SocialMedia from "./SocialMedia";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = ({ data }) => {
  const [checked, isChecked] = useState(false);
  const Alldata = useSelector((state) => state.data.uniqueItems.All);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const TechnoCheckboxRef = useRef();
  const OutilsCheckboxRef = useRef();
  const MethoCheckboxRef = useRef();
  function handleToggleChange1() {
    setIsOpen1(!isOpen1);
  }
  function handleToggleChange2() {
    setIsOpen2(!isOpen2);
  }
  function handleToggleChange3() {
    setIsOpen3(!isOpen3);
  }
  function handleToggleChange() {
    isChecked(!checked);
  }
  const checkedCheck = document.querySelectorAll("input[type='checkbox']");
  checkedCheck.forEach((e) => {
    e.parentElement.addEventListener("click", () => {
      if (e.parentElement.children[0].checked) {
        e.parentElement.classList.add("checked");
        e.parentElement.classList.remove("unchecked");
      } else {
        e.parentElement.classList.add("unchecked");
        e.parentElement.classList.remove("checked");
      }
    });
  });
  const [admin, setAdmin] = useState("close");
  const [isAdmin, setIsAdmin] = useState(true);
  const { id } = useParams();
  const theme = useSelector((state) => state.theme);
  let url1;
  if (id >= 0) {
    if (theme === "dark") {
      url1 = "../images/dark/arrow-down-svgrepo-com.svg";
    } else {
      url1 = "../images/light/arrow-down-svgrepo-com.svg";
    }
  } else {
    if (theme === "dark") {
      url1 = "./images/dark/arrow-down-svgrepo-com.svg";
    } else {
      url1 = "./images/light/arrow-down-svgrepo-com.svg";
    }
  }
  useEffect(() => {
    const body = document.querySelector("body");
    if (admin === "open") {
      body.classList.add("block");
    } else {
      body.classList.remove("block");
    }
  }, [admin]);

  let url;

  if (id !== undefined) {
    if (theme === "dark") {
      url = "../images/dark/close-circle-svgrepo-com.svg";
    } else {
      url = "../images/light/close-circle-svgrepo-com.svg";
    }
  } else {
    if (theme === "dark") {
      url = "../images/dark/close-circle-svgrepo-com.svg";
    } else {
      url = "../images/light/close-circle-svgrepo-com.svg";
    }
  }

  const initialUserData = {
    name: "",
    url: "",
    code: "",
    description: "",
    coverPublic: "",
    carousel: [],
    techno: TechnoCheckboxRef.current,
    methodologies: MethoCheckboxRef.current,
    outils: OutilsCheckboxRef.current,
  };
  const [userData, setUserData] = useState(initialUserData);
  initialUserData.coverStyle = "." + initialUserData.coverPublic;
  const updateUserDataHandler = useCallback(
    (type) => (event) => {
      setUserData({ ...userData, [type]: event.target.value });
    },
    [userData]
  );
  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();
      console.log(TechnoCheckboxRef);
      console.log(MethoCheckboxRef.current);
      console.log(OutilsCheckboxRef.current);
      console.log(userData);
    },
    [userData]
  );
  return (
    <footer id="footer">
      <div className="text-footer">
        <NavLink to={"/legales"}>Mentions légales</NavLink>
        <NavLink to={"/licences"}>Licences</NavLink>
        <NavLink to={"/"}>Accueil</NavLink>
      </div>
      <div className="text-footer t2">
        <NavLink to={"/contact"}>Contactez-Nous</NavLink>
        <a href="https://google.com">Téléchargez mon CV</a>
        <p
          className="p"
          onClick={() => {
            setAdmin("open");
          }}
        >
          Admin
        </p>
        <div
          className={admin === "open" && isAdmin ? "admin admin-open" : "admin"}
        >
          <img
            width={20}
            onClick={() => {
              setAdmin("close");
            }}
            className="close"
            src={url}
          />

          <form onSubmit={formHandler()}>
            <label>
              <h3>Titre :</h3>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={updateUserDataHandler("name")}
              />
            </label>
            <div className="select-type">
              <div className="technos-check">
                <details>
                  <summary onClick={handleToggleChange1}>
                    <h3>
                      Techno
                      <img
                        src={url1}
                        width={20}
                        className={isOpen1 ? "turn" : "return"}
                      />
                    </h3>
                  </summary>
                  <div className="flex-label">
                    {Alldata.techno.map((e, key) => {
                      return (
                        <label key={key} className={"container unchecked"}>
                          {e}
                          <input
                            type="checkbox"
                            value={e}
                            ref={TechnoCheckboxRef}
                          />{" "}
                        </label>
                      );
                    })}
                  </div>
                </details>
              </div>

              <div className="outils-check">
                <details>
                  <summary onClick={handleToggleChange2}>
                    <h3>
                      Outils
                      <img
                        src={url1}
                        width={20}
                        className={isOpen2 ? "turn" : "return"}
                      />
                    </h3>
                  </summary>
                  <div className="flex-label">
                    {Alldata.outils.map((e, key) => {
                      return (
                        <label key={key} className={"container unchecked"}>
                          {e}
                          <input
                            type="checkbox"
                            value={e}
                            ref={OutilsCheckboxRef}
                          />{" "}
                        </label>
                      );
                    })}
                  </div>
                </details>
              </div>

              <div className="methodologies-check">
                <details>
                  <summary onClick={handleToggleChange3}>
                    <h3>
                      Methodologies
                      <img
                        src={url1}
                        width={20}
                        className={isOpen3 ? "turn" : "return"}
                      />
                    </h3>
                  </summary>
                  <div className="flex-label">
                    {Alldata.methodologies.map((e, key) => {
                      return (
                        <label key={key} className={"container unchecked"}>
                          {e}
                          <input
                            type="checkbox"
                            value={e}
                            ref={MethoCheckboxRef}
                          />{" "}
                        </label>
                      );
                    })}
                  </div>
                </details>
              </div>
            </div>
            <label>
              <h3>Descrition :</h3>
              <textarea
                name={"description"}
                value={userData.description}
                onChange={updateUserDataHandler("description")}
              ></textarea>
            </label>
            <label>
              <h3>Cover :</h3>
              <input
                type="file"
                value={userData.coverPublic}
                onChange={updateUserDataHandler("coverPublic")}
              />
            </label>
            <label>
              <h3>Carousel :</h3>
              <input
                type="file"
                multiple
                value={userData.carousel}
                onChange={updateUserDataHandler("carousel")}
              />
            </label>
            <label>
              <h3>Url :</h3>
              <input
                type="url"
                value={userData.url}
                onChange={updateUserDataHandler("url")}
              />
            </label>
            <label>
              <h3>Code :</h3>
              <input
                type="url"
                value={userData.code}
                onChange={updateUserDataHandler("code")}
              />
            </label>
            <input type="submit" />
          </form>
        </div>

        <div
          className={
            admin === "open" && !isAdmin ? "no-admin no-admin-open" : "no-admin"
          }
        >
          <img
            width={20}
            onClick={() => {
              setAdmin("close");
            }}
            className="close"
            src={url}
          />
          <h3>Vous n'êtes pas admin !</h3>
        </div>
        <div
          onClick={() => {
            setAdmin("close");
          }}
          className={admin === "open" ? "bg-admin bg-admin-open" : "bg-admin"}
        ></div>
      </div>
      <SocialMedia data={data} />
    </footer>
  );
};

export default Footer;
