import fetch from "node-fetch";

exports.handler = async (event, context) => {
  const { key, nonce, header, ciphertext, tag } = event.queryStringParameters;
  // construct the fetch URL with the id parameter
  const url = `https://rexaswq.pythonanywhere.com/decrypt?key=${key}&nonce=${nonce}&header=${header}&ciphertext=${ciphertext}&tag=${tag}`;
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
  //     message_decoded: "",
  //   }
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
