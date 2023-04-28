// const fetch = require("node-fetch");
import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");

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
