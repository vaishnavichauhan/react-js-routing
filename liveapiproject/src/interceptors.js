import axios from "axios";

const authFetch = axios.create( {
baseURL : "http://localhost:4000"
     
})



  
  authFetch.interceptors.request.use(
    (request) => {
      request.headers.common['Accept'] = 'application/json';
     // request.headers.common['Authorization'] = "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Mjc5NTY0OTcyMjIyNDBmNzA1NWVmNTAiLCJpZCI6IjYyNzk1NjQ5NzIyMjI0MGY3MDU1ZWY1MCIsImlhdCI6MTY1MjExOTIzNywiZXhwIjoxNjUyMTIwMTM3fQ.1bRF6K4iEABtjj2d4Hu1Jdx11vSGtOCTXkEPA6Bb3cE"
      
      request.headers.common['Authorization'] = `bearer ${JSON.parse(localStorage.getItem("token")).jwtToken}`;

      console.log(JSON.parse(localStorage.getItem("token")).jwtToken);
     
      console.log('request sent ');
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  authFetch.interceptors.response.use(
    (response) => {
      console.log('got response');
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 404) {
        // do something
        console.log('NOT FOUND');
      }
      if (error.response.status === 401) {
        // do something
        console.log('NOT FOUND');
      }
      return Promise.reject(error);
    }
  );
  

export default authFetch;