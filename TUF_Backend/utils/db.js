import dotenv from "dotenv";
dotenv.config({});

import mysql from "mysql2";

const urlDB = `mysql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`;

const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      urlDB,
    });

    // const connection = await mysql.createConnection(urlDB).promise();

    console.log("MySQL connected successfully");
    return connection;
  } catch (error) {
    console.log("MySQL connection failed: " + error.message);
    throw error;
  }
};

export default connectDB;
