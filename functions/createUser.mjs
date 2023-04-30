import fetch from "node-fetch";

exports.handler = async (event) => {
  const { param1, param2 } = event.queryStringParameters;

  // construct the fetch options with the params
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ param1, param2 }),
  };

  // construct the fetch URL
  const url = `https://ui2gbppqug.execute-api.us-east-1.amazonaws.com/createUser/createuser`;

  // make the fetch request with options and return the response
  const response = await fetch(url, options);
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
