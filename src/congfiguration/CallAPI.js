const axios = require("axios");

export function getImagePath(data) {
  console.log("In Call image Path API", data);

  return axios({
    method: "POST",
    url: "http://localhost:3000/image",
    data: data
  });
}
export function Details(data){
    console.log("in searchBook Call API", data);

  return axios({
    method: "POST",
    url: "http://localhost:3000/details",
    data: data
  });
}

export function getUserDetails(){
  return axios({
    method: "get",
    url: "http://localhost:3000/get",
  })
}
export function login(data){
  console.log("in login method",data);
  
  return axios({
    method: "POST",
    url: "http://localhost:3000/login",
    data: data
  });
}

export function search(data) {
  console.log("in searchBook Call API", data);

  return axios({
    method: "POST",
    url: "http://localhost:3000/ebookstore/search",
    data: data
  });
}

  

