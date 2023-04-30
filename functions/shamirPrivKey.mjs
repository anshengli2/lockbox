import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const { key1, key2 } = event.queryStringParameters;
  // construct the fetch URL with the id parameter
  const url = `https://rexaswq.pythonanywhere.com/combineShamir?key1=${key1}&key2=${key2}`;
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
  //   {
  //     data: "",
  // }
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
