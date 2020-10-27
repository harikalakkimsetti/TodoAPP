import React, { useState } from "react";
import {
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  Form,
} from "reactstrap";

import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please Add Your TODO");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    addTodos(todo);

    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="enter to do"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="success">Add To DO</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
