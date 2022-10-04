import axios from "axios";
import baseUrl from "./baseUrl";

const APiClient = axios.create({
  baseURL: baseUrl,
});

export default APiClient;
