

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");



const app = express();

const newItems = ["Buy Food","Cook Food"];
const workItems=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));
app.set('view engine', 'ejs');


app.get("/",function(req,res){

//here

const day = date.getDate();
  res.render("list", {listTitle: day, NEWELEMENTS: newItems });
});

app.post("/",function(req,res){

 console.log(req.body);
const newItem=req.body.newListItem;

    if(req.body.list === "Work"){
      workItems.push(newItem);
      res.redirect("/work");
    } else {
      newItems.push(newItem);

    res.redirect("/");
}

});

app.get("/about",function(req,res){

  res.render("about");
})


app.get("/work",function(req,res){

  res.render("list",{listTitle: "Work List", NEWELEMENTS: workItems})
});

app.post("/work",function(req,res){
  let newItem=req.body.newListItem;
  workItems.push(newItem);

  res.redirect("/work");

});


app.listen(3000, function(){

  console.log("Server is up on Port 3000");
});
