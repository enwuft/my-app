const PRODUCTION_URL = "https://dashboard.vecskill.co.th/";
const dev = process.env.NODE_ENV !== "production";
export const basePath = dev
  ? "http://localhost:3000"
  : process.env.PRODUCTION_URL;
