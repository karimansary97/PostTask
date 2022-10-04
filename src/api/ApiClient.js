import axios from "axios";
import { BaseURL } from "../config/BASE_URL";

const apiClient = axios.create({
  baseURL: BaseURL,
});

export default apiClient;
