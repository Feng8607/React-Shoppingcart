import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faLine,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <h2>
          DIGITAL MONSTER
          <span>
            <FontAwesomeIcon
              style={{
                cursor: "pointer",
                margin: "0 1rem",
                fontSize: "1.5rem",
              }}
              icon={faInstagram}
            />
            <FontAwesomeIcon
              style={{
                cursor: "pointer",
                margin: "0 1rem",
                fontSize: "1.5rem",
              }}
              icon={faGithub}
            />
            <FontAwesomeIcon
              style={{
                cursor: "pointer",
                margin: "0 1rem",
                fontSize: "1.5rem",
              }}
              icon={faLine}
            />
            <FontAwesomeIcon
              style={{
                cursor: "pointer",
                margin: "0 1rem",
                fontSize: "1.5rem",
              }}
              icon={faSquareFacebook}
            />
          </span>
        </h2>
        <hr />
        <p>
          <FontAwesomeIcon
            style={{
              cursor: "pointer",
              margin: "0 1rem",
              fontSize: "1.5rem",
            }}
            icon={faPhone}
          />
          0928489379
        </p>
        <div className="footerbottom">
          <p>
            <FontAwesomeIcon
              style={{
                cursor: "pointer",
                margin: "0 1rem",
                fontSize: "1.5rem",
              }}
              icon={faEnvelope}
            />
            abkkd5524@gmail.com
          </p>
          <span>2022©HSIH SHENG FENG</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
