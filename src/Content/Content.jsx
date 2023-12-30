import React, { useEffect, useState } from "react";
import Search from "./Search";
// import trackData from "../response.json";
import { hrTrck } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuilding,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(hrTrck);
  }, []);
  return (
    <div>
      <div className="content-data">
        <Search />
        <div className="card-container">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="card">
                {/* <div className="card-item">{item.vacancycode}</div>
                <div className="card-item">{item.vacancycreated}</div> */}
                <div className="card-item position">{item.position}</div>
                <div className="card-item department">{item.department}</div>
                <div className="card-item education">
                  <span className="education-icon">
                    <FontAwesomeIcon icon={faBuilding} />
                  </span>
                  {item.education}
                </div>
                <div className="card-item experience">
                  <span className="experience-icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  {item.experience}
                </div>
                <div className="card-item location">
                  <span className="location-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  {item.location}
                </div>
                {/* <div className="card-item skils">{item.skils}</div>
                <div className="card-item status">{item.status}</div>
                <div className="card-item offerstatus">{item.offerstatus}</div> */}
                <a href="https://suprajit.com/" target="_blank">
                  {" "}
                  <img src={item.image} alt="" className="card-img" />
                </a>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
