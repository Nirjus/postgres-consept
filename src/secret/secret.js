import dotenv from "dotenv";

dotenv.config({
  path: "src/secret/.env",
});

export const serverPort = process.env.PORT || 8001;
export const dbURL = process.env.DATABASE_URL || "";
