import React, { useEffect, useState } from "react";
import "./shortenform.scss";

import axios from "axios";

const ShortenForm = ({ getOutput }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState({ original: "", shortened: "" });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!url) {
        setError("Please add a link");
      }

      setError(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [url]);

  const handleChange = (e) => {
    console.log(e.target);
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return setError("Please provide a link");

    setLoading(true);
    console.log("submitting...");

    try {
      const { data } = await axios.get(
        "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html"
      );

      console.log(data);
      setUrl("");

      getOutput({ original: url, shortened: data?.result?.full_short_link });

      setLoading(false);
      console.log("submited");
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError("Something went wrong!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__inner">
          <input
            name="url"
            value={url}
            onChange={handleChange}
            className={`form__inner-link ${error && "error"}`}
            type="text"
            placeholder="Shorten a link here..."
          />

          <input
            className="form__inner-btn"
            type="submit"
            value={`${loading ? "Loading..." : "Shorten it!"}`}
          />
        </div>

        {error && <p className="form__error">{error}</p>}

       
      </form>
    </>
  );
};

export default ShortenForm;
