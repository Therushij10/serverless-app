exports.handler = async (event) => {
  // Your Lambda function logic here
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
