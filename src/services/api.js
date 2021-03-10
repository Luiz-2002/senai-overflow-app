import axios from "axios";

const api = axios.create({
  baseURL: "http://10.107.134.46:3333/",
});

//https://senai-overflow-api-luiz.herokuapp.com/

// api.defaults.headers.common[
//   "Authorization"
// ] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiUmFmYWVsIFByb2YuIiwiaWF0IjoxNjE1NDAyMzk5LCJleHAiOjE2MTU0MDU5OTl9.rtHvXpL_oKIzqAAvo-ri-Ync4M2G1TflnSJynhycH8U`;

export { api };
