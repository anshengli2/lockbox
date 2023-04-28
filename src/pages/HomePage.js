import React, { useState, useEffect } from "react";
import AddInfo from "../components/AddInfo";

const HomePage = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchSample() {
      const response = await fetch("/.netlify/functions/test");
      const data = await response.text();
      console.log(data);
      setData(data);
    }

    fetchSample();
  }, []);
  const handleClick = () => {
    fetch("/.netlify/functions/test")
      .then((response) => response.text())
      .then((data) => setData(JSON.parse(data)));
  };
  return (
    <>
      <div>
        <AddInfo />
        <button onClick={handleClick}>Click</button>
        <div>
          data = {data && <p>{data.joke}</p>} {!data && <p>no data</p>}
        </div>
      </div>
    </>
  );
};

export default HomePage;
