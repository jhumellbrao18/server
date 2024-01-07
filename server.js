const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());
app.get("/Territories/All", async (req, res) => {
    try {
        const response = await axios.get("https://netzwelt-devtest.azurewebsites.net/Territories/All");
        const data = response.data; 
        // const names = data.map(item => item.name);

        // res.json({ names });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});