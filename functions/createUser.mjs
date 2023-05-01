import fetch from "node-fetch";

exports.handler = async (event) => {
  const { username, password, privKey } = event.queryStringParameters;
  // construct the fetch URL
  const url = `https://p4wkt1y6b8.execute-api.us-east-1.amazonaws.com/usr/createuser?username=${username}&password=${password}&privatekey=${privKey}`;
  // make the fetch request with options and return the response
  const response = await fetch(url);
  if (!response.ok) {
    // Handle any errors from the API
    return {
      statusCode: response.status,
      body: response.statusText,
    };
  }
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
