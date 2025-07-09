import axios, { type InternalAxiosRequestConfig, type AxiosInstance } from "axios";
import { firebaseAuth } from "../configs/firebase";

export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, //10segundos
});

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const user = firebaseAuth.currentUser;

    if (user) {
      try {
        const token = await user.getIdToken();
        config.headers.set("authorization", `Bearer ${token}`);
      } catch (error) {
        console.error("Error al obtener el token de Firebase:", error);
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
