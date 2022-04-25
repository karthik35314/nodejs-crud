const express = require("express");

const cookieparser = require("cookie-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json()); 
app.use(cookieparser()) 

app.use(express.urlencoded({ extended: true }));   

const db = require("./app/models");
require('dotenv').config();
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


 app.get("/",(req, res) => {
  res.cookie("emp",false)
 res.json({ message: "Welcome " });
   });


require("./app/routes/movie.routes")(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
