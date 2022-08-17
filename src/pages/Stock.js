import React, { Component } from "react";
import AddIngredient from "../component/AddIngredient";
import "../pages/Stock.css";
import Ingredients from "../component/ingredients";

class Stock extends Component {
  // Create a default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      ingreds: [],
    };
  }
  // the addTodo function simply creates a new array that includes the user submitted todo item and then
  // updates the state with the new list.
  addIngredient = (ingred) => {
    const exists = this.state.ingreds.find(i => i.content === ingred.content);
    if (exists){ return }
    // In React, keys or ids in a list help identify which items have changed, been added or removed. Keys
    // should not share duplicate values.
    // To avoid having dup values, we use the Math.random() function to generate a random value for a todo id.
    // This solution works for a small application but a more complex hashing function should be used when
    // dealing with a larger data sensitive project.
    ingred.id = Math.random();
    // Create a array that contains the current array and the new todo item
    let checker = false;
    this.state.ingreds.forEach(element => {
      checker = (ingred.content == element.content)||(checker);
    }); 
    if (!checker){
      let new_list = [...this.state.ingreds, ingred];
    // Update the local state with the new array.
      this.setState({
        ingreds: new_list,
      });
    }
  };

  deleteIngred = (id) => {
    const ingreds = this.state.ingreds.filter((ingred) => {
      return ingred.id !== id;
    });
    this.setState({
      ingreds: ingreds,
    });
};

  render() {
    return (
      <div className="split left">
        <h1> Add Ingredients </h1>
        {/* When passing the AddTodo component, addTodo is a prop that is used in the 
        AddTodo.js file when handling the submit */}
        <div className="add">
          <AddIngredient addIngredient={this.addIngredient} />
          </div>
        
        {/* When returning the Todos component, todos is a prop passed to the todos.js file
         to format and render the current todo list state */}
      <div className="split right">
        <h1 className="current">Current Stock</h1>
        <Ingredients ingreds={this.state.ingreds} deleteIngred={this.deleteIngred}/>
        </div>
      </div>

    );
  }
}

export default Stock;
