import React, { useState } from "react";
import AddInfo from "../components/AddInfo";
import DisplayFiles from "../components/DisplayFiles";
import "../styles/theme.css";
const Content = () => {
  const [submit, setSubmit] = useState(0);
  return (
    <>
      <div>
        <AddInfo submit={submit} setSubmit={setSubmit} />
        <DisplayFiles submit={submit} />
      </div>
    </>
  );
};

export default Content;
