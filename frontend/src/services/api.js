import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});


export const getDestinations = async () => {
  const res = await API.get("/destinations");
  return res.data;
};

export const getTopSellingPackages = async () => {
  const res = await API.get("/packages/top-selling");
  return res.data;
};
