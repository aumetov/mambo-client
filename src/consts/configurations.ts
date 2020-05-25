export const configuration = Object.freeze(
    {
      remoteApi:  process.env.BACKEND_HOST ? process.env.BACKEND_HOST + '/api' : 'http://localhost:8081/api'
    }
  );