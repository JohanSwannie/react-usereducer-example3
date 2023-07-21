import { ACTIONS } from "./App";

const divStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
};

export default function Execution({ execution, dispatch }) {
  const listStyle = {
    width: "80vw",
    fontSize: "37px",
    fontWeight: "bold",
    textAlign: "center",
    color: execution.done ? "navy" : "crimson",
    fontFamily: execution.done ? "Sofia" : "Tangerine",
  };
  return (
    <div style={divStyle}>
      <button
        className="show"
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_EXECUTION,
            stack: { id: execution.id },
          })
        }
      >
        Toggle
      </button>
      <li style={listStyle}>{execution.enteredText}</li>
      <button
        className="show"
        onClick={() =>
          dispatch({
            type: ACTIONS.DELETE_EXECUTION,
            stack: { id: execution.id },
          })
        }
      >
        Delete
      </button>
    </div>
  );
}
