require('./models/db')
const express = require("express")
const bodyParser = require("body-parser")


const app = express();
const UserRouter = require('./routes/userRoutes')

app.use(bodyParser.json())

app.use('/user', UserRouter)
app.get('/', (req, res) => {
    console.log("hello darkness my old friend");
})
const port = 3002;
app.listen(port, () => {
    console.log("listening on port  " + port);
});