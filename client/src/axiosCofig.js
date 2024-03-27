import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// instance.interceptors.request.use(function(config))

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("persist:auth");
    console.log(token);
    return config;
  },
  function (error) {
    console.log("error", error);
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(function(response){
  return response
},function(error){
  return Promise.reject(error)
})
export default instance;
