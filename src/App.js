import { useState, useReducer } from "react";
import Execution from "./Execution";

export const ACTIONS = {
  ADD_EXECUTION: "add_execution",
  TOGGLE_EXECUTION: "toggle_execution",
  DELETE_EXECUTION: "delete_execution",
};

function reducer(executions, action) {
  switch (action.type) {
    case ACTIONS.ADD_EXECUTION:
      return [...executions, newExecution(action.stack.enteredText)];
    case ACTIONS.TOGGLE_EXECUTION:
      return executions.map((execution) => {
        if (execution.id === action.stack.id) {
          return { ...execution, done: !execution.done };
        }
        return execution;
      });
    case ACTIONS.DELETE_EXECUTION:
      return executions.filter((execution) => execution.id !== action.stack.id);
    default:
      return { ...executions };
  }
}

function newExecution(enteredText) {
  return { id: Date.now(), enteredText: enteredText, done: false };
}

export default function App() {
  const [executions, dispatch] = useReducer(reducer, []);
  const [enteredText, setEnteredText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({
      type: ACTIONS.ADD_EXECUTION,
      stack: { enteredText: enteredText },
    });
    setEnteredText("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={enteredText}
          placeholder="Enter Text"
          onChange={(event) => setEnteredText(event.target.value)}
        />
      </form>
      {executions.map((execution) => {
        return (
          <Execution
            key={execution.id}
            execution={execution}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
}
