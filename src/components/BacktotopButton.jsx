import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const BacktotopButton = () => {
  const [backtotopButton, SetbacktotopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let heightToHidden = 100;

      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHidden) {
        SetbacktotopButton(true);
      } else {
        SetbacktotopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scrollup">
      {backtotopButton && (
        <button className="top" onClick={scrollUp}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default BacktotopButton;
