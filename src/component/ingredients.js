import React from "react";
import "../component/ingredients.css";
import { Checkbox, ListItemButton, ListItemText, Card, CardContent, Grid } from "@mui/material";

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI
const Ingredients = ({ ingreds, deleteIngred }) => {
  const ingredList = ingreds.length ? (
    ingreds.map((ingred) => {
      return (
        <Grid key={ingred.id}>
          <Card 
            style={{marginTop:10, width:550, left:0}}>
            {/* Remember, we set the local state of this todo item when the user submits the form in 
            AddTodo.js. All we need to do is return the todo list item {todo.content} */}
            <ListItemButton component="a" href="#simple-list">
              <Checkbox style={{paddingLeft:0}} color="primary" onClick={() => deleteIngred(ingred.id)}>
              </Checkbox>
              <ListItemText primary={ingred.content} secondary={ingred.date}/><ListItemText primary={String(ingred.qty)+" "+ingred.measurement}/>
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>Time To Stock Your Pantry!</p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="ingredCollection" style={{ padding: "10px" }}>
      {ingredList}
    </div>
  );
};

export default Ingredients;
