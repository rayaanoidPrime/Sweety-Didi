import dotenv from "dotenv";

dotenv.config();
let port = 3000;
let host = "http://localhost:3000";
let postgresBaseHost = "0.0.0.0";

if (process.env.NODE_ENV === "production") {
  postgresBaseHost = process.env.DATABASE_HOST!;
  port = 80;
  host = process.env.HOST!;
}

export const config = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  host: host,
  postgresBaseHost,
  JwtPayloadKey: "jwtPayload",
};
