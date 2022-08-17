import React, { Component } from "react";
import { Button, TextField} from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Axios from "axios";

class AddIngredient extends Component {
  // Create a local react state of the this component with a content property set to nothing.
  constructor() {
    super();
    this.state = {
      content: "",
      date: "",
      qty: "",
      measurement: ""
    };
  }
  // The handleChange function updates the react state with the new input value provided from the user.
  // "event" is the defined action a user takes. In this case, the event is triggered when the user types something
  // into the text field.
  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      date: Date().toLocaleString('en-US', {
        dateStyle: "short",
        timeStyle: "short"
      })
    });
  };

  handleQty = (event) => {
    this.setState({
      qty: event.target.value
    });
  };

  handleMeasure = (event) => {
    this.setState({
      measurement: event.target.value
    });
  };

  // The handleSubmit function collects the forms input and puts it into the react state.
  // event.preventDefault() is called to prevents default event behavior like refreshing the browser.
  // this.props.addTodo(this.state) passes the current state (or user input) into the addTodo function defined
  // in the Home.js file which then adds the input into the list.
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      const jsonObject = {
        id: this.state.id,
        ingredient: this.state.content,
        qty: this.state.qty+' '+this.state.measurement,
        currentDate: this.state.date
     };
     Axios({
      method: "POST",
      url: "http://localhost:5050/add/item",
      data: {jsonObject},
      headers: {
         "Content-Type": "application/json"
      }
   }).then(res => {
      console.log(res.data.message);
   });
      this.props.addIngredient(this.state);
      this.setState({
        content: "",
        date: "",
        qty: "",
        measurement: ""
      });
    }
  };
  render() {
    return (
      // 1. When rendering a component, you can render as many elements as you like as long as it is wrapped inside
      // one div element.
      // 2. The return statement should include a text field input with the handleChange function from above that
      // is passed into an onChange event.
      // 3. The return should also include a button with the handleSubmit function from above that is passed into
      // an OnClick event.
      // 4. The value of the text field also should reflect the local state of this component.
      <div>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <TextField
        label="Quantity"
        variant="outlined"
        onChange={this.handleQty}
        value={this.state.qty}
      />
        <Select
          value={this.state.measurement}
          label="Measurement"
          onChange={this.handleMeasure}
        >
          <MenuItem value={"cups"}>cups</MenuItem>
          <MenuItem value={"tsp"}>teaspoon</MenuItem>
          <MenuItem value={"tbsp"}>tablespoon</MenuItem>
          <MenuItem value={"mg"}>mg</MenuItem>
          <MenuItem value={"g"}>grams</MenuItem>
          <MenuItem value={"kg"}>kilograms</MenuItem>
          <MenuItem value={"oz"}>ounces</MenuItem>
          <MenuItem value={"fl oz"}>fluid ounces</MenuItem>
          <MenuItem value={"lbs"}>pounds</MenuItem>
          

        </Select>  
          
        <Button
          style={{ marginLeft: "10px" }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
    );
  }
}

export default AddIngredient;
