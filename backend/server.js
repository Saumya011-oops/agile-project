require("dotenv").config();
const con = require("./db");
const express = require('express')
const app = express()
const port = 3005
const userRoutes = require("./routes/userRoutes");

const cors = require("cors");

con();
// app.get("/api/v1/login", (req, res) => {
//   res.send("login")                                      
  
// }); 

// // app.use(express.json());

// // app.use("/api/users", userRoutes);
// app.get("/", (req, res) => {
//   res.send("Test Working");
// });
app.use(cors());
app.use(express.json());
app.use('/api/userRoutes',require('./routes/userRoutes'));
app.use('/api/ode', require('./routes/ode'));
app.use("/api/payment",require("./routes/payment"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
