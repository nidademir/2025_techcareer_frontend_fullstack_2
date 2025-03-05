console.log("server.ts");
// Import
import dotenv from "dotenv";
dotenv.config();

// Express is a web application framework for Node.js
const express = require("epress");

// Create an Express application
const app = express();

// Define a route handler for the Get / route
app.get("/blog", (request:any, response:any) => {

response.send("Blog Sayfası!");
}); // End off app.get

// Sunucu start
const PORT=1111;
app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});