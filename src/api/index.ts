import axios from "axios";

const SERVER_BASE = process.env.NEXT_PUBLIC_SERVER_HOME;

const client = axios.create({
  baseURL: SERVER_BASE,
});

export default client;
