import React, { useState } from "react";
import "./link.scss";

import { CopyToClipboard } from "react-copy-to-clipboard";

const Link = ({ originalLink, shortenedLink }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="link">
      <div className="link__original">
        <p>{originalLink}</p>
      </div>

      <div className="link__shortened">
        <p className="link__shortened-link">{shortenedLink}</p>

        <CopyToClipboard text={shortenedLink} onCopy={() => setClicked(true)}>
          <p
            style={{
              background: clicked ? "hsl(257, 27%, 26%)" : "hsl(180, 66%, 49%)",
            }}
            className="link__shortened-btn btn"
          >
            {clicked ? "Copied!" : "Copy"}
          </p>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Link;
