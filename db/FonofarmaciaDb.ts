import oracledb from 'oracledb';
import dotenv from 'dotenv';

dotenv.config();

async function connectToDB() {
  try {
    await oracledb.createPool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    });
    console.log('Connection to Oracle DB was successful!');
  } catch (err) {
    console.error('Connection error', err);
    throw err;
  }
}

// Initialize the connection pool when this module is loaded
connectToDB().catch(err => {
  console.error('Error initializing connection pool', err);
});


export default oracledb;