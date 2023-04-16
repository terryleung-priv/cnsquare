const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");

const database = require("./database");

/**
 * An instance of express server created by json-server
 */
const app = jsonServer.create();

/**
 * Dummy data generated by Faker
 */
const data = database.createData();
const router = jsonServer.router(data);

// Bind the JSON Server router db

app.db = router.db;

// Configure the express server

app.use(cors());
app.use(auth);

// Use the middlewares

app.use(jsonServer.defaults());

// Start the server and listen to port 3000

app.use(router);

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`JSON Server is listening at port ${port}`);
});
