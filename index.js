// Make express server
const express = require("express");
const app = express();
app.use(express.json())
const sequelize = require("./util/database");;
const port = process.env.PORT || 3000;

//check connection
sequelize.authenticate()
.then((res)=>console.log('Connection has been established successfully.'))
.catch ((error) => console.error('Unable to connect to the database:', error))


const userRoutes = require("./routes/routes");
app.use("/api", userRoutes);

app.get('/', (req, res) => {
    res.send("Welcome to Wholesaler-Retailer API")

  })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
