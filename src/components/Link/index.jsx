import React, { useState } from "react";
import "./link.scss";

const Link = ({ originalLink, shortenedLink }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="link">
      <div className="link__original">
        <p>{originalLink}</p>
      </div>

      <div className="link__shortened">
        <p className="link__shortened-link">{shortenedLink}</p>
        <p
          onClick={() => setClicked(true)}
          style={{
            background: clicked ? "hsl(257, 27%, 26%)" : "hsl(180, 66%, 49%)",
          }}
          className="link__shortened-btn btn"
        >
          {clicked ? "Copied!" : "Copy"}
        </p>
      </div>
    </div>
  );
};

export default Link;
