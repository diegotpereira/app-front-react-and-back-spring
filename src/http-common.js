import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token", 
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,  
  }
});