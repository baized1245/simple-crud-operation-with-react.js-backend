const express = require("express")

const mongoose = require("mongoose");

require("dotenv").config()

const routes = require("./routes/TaskRoute")

const cors = require("cors")

const app = express()
const PORT = process.env.PORT | 5000

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_url)
.then(() => {
    console.log("Mongodb connected");
})
.catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listing at ${PORT}`))

// sWeAokAjQD3y9Zeg
// mongodb+srv://mdbaizedhasans:<password>@cluster0.i7ep3l6.mongodb.net/?retryWrites=true&w=majority