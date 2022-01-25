require('./models/db')
const express = require("express")
const bodyParser = require("body-parser")
const cron = require("node-cron")

const app = express();
const UserRouter = require('./routes/userRoutes')

app.use(bodyParser.json())
cron.schedule("* 0 * * *", function () {
    console.log("service is up and running ");
});

app.use('/user', UserRouter)
app.get('/', (req, res) => {
    res.send("hello darkness my old friend");
})
const port = 3002;
app.listen(port, () => {
    console.log("listening on port  " + port);
});