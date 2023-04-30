import React from "react";
import AddInfo from "../components/AddInfo";

const HomePage = (props) => {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   async function fetchSample() {
  //     const response = await fetch("/.netlify/functions/myFunctions");
  //     const data = await response.text();
  //     console.log(data);
  //     // setData(data);
  //   }

  //   fetchSample();
  // }, []);
  // const handleClick = () => {
  // //   const myParam = "hello";
  // //   const myParam2 = "hello2";
  // //   // const options = {
  // //   //   method: "POST",
  // //   //   headers: { "Content-Type": "application/json" },
  // //   //   body: JSON.stringify({ param: myParam }),
  // //   // };
  // //   fetch(`/.netlify/functions/test?myParam=${myParam}&myParam2=${myParam2}`)
  // //     .then((response) => response.text())
  // //     .then((data) => setData(JSON.parse(data)));
  // // };
  return (
    <>
      <div>
        <AddInfo />
        <div>data ={process.env.REACT_APP_DROPBOX_API_KEY}</div>
      </div>
    </>
  );
};

export default HomePage;
