const express = require('express');
const bodyparser = require('body-parser');
const date=require(__dirname+"/data.js")


const app = express();
app.use(bodyparser.urlencoded({ extended: true }));


app.use(express.static("public"));


app.set('view engine', 'ejs');

const items = ["Food lover", "Cokking", "Grill bread"];
const workItem = [];

app.get("/", function (req, res) {

    let day = date.getdate();
    res.render("list", { listTittle: day, adding: items });
});

app.post("/", function (req, res) {
    
    let item = req.body.Newitem;

    if (req.body.button==="Work"){
        workItem.push(item);
        res.redirect("/work")
    }else{
        
            items.push(item);
            res.redirect("/");
            }


});


app.get("/work", function (req, res) {
    res.render("list", { listTittle: "Work list", adding:workItem });
});

app.post("/work", function (req, res) {
    
     let item = req.body.Newitem;
     workItem.push(item);
     app.redirect("/work")
 });


app.listen(3000, function () {
    console.log("the server is running on the port 3000");
});
