const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//templates  
app.set("view engine", "ejs");
//routes
app.set("views", path.join(__dirname, "view"));
app.get('/', (req, res) => {
   res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    }
);