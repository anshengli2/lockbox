// const fetch = require("node-fetch");
import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const { myParam, myParam2 } = event.queryStringParameters;
  // construct the fetch URL with the id parameter
  const url = `https://datasain2.pythonanywhere.com/?input=${myParam}&input2=${myParam2}`;
  const response = await fetch(url);

  if (!response.ok) {
    // Handle any errors from the API
    return {
      statusCode: response.status,
      body: response.statusText,
    };
  }

  // Parse the JSON response from the API
  const data = await response.json();

  // Return the response to the client
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
