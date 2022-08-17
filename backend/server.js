const express = require("express"),
       app = express(),
       port = process.env.PORT || 5050,
       cors = require("cors");
const bodyParser = require('body-parser');
const fs = require("fs");

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
  res.send({ message: "Connected to Backend server!" });
  });

app.post("/add/item", addItem)

function addItem (request, response) {
  let id = request.body.jsonObject.id
  let ingredient = request.body.jsonObject.ingredient
  let curDate = request.body.jsonObject.currentDate
  let qty = request.body.jsonObject.qty
  var newItem = {
    ID: id,
    Ingredient: ingredient,
    Quantity: qty,
    Current_date: curDate
  }
  const jsonString = JSON.stringify(newItem)
  
  var data = fs.readFileSync('database.json');
  var json = JSON.parse(data);
  json.push(newItem);
  fs.writeFile("database.json", JSON.stringify(json), function(err, result) {
    if (err) { console.log('error', err) }
    else { console.log('Successfully wrote to file') }
  });
  response.send(200)
  }


app.get("/get/items", getItems)
//** week5, get all items from the json database*/
  function getItems (request, response) {
    var data = fs.readFileSync('database.json');
    return response.json(JSON.parse(data));
  } 

app.get("/get/searchitem",searchItems)
//**week 5, search items service */
  function searchItems (request, response) {
    //begin here
    var searchField = request.query.taskname;
    var json = JSON.parse (fs.readFileSync('database.json'));
    var returnData = json.filter(jsondata => jsondata.Item === searchField);
    return response.json(returnData);
  }
  