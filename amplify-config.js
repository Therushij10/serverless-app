const amplifyConfig = {
  Auth: {
    identityPoolId: 'YOUR_IDENTITY_POOL_ID',
    region: 'YOUR_REGION'
  },
  API: {
    endpoints: [
      {
        name: "todos",
        endpoint: "YOUR_API_GATEWAY_URL",
        region: "YOUR_REGION"
      }
    ]
  }
};

export default amplifyConfig;
