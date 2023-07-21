import { ACTIONS } from "./App";

export default function Execution({ execution, dispatch }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        margin: "auto",
      }}
    >
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
      <li
        style={{
          width: "70vw",
          fontSize: "37px",
          fontWeight: "bold",
          textAlign: "center",
          color: execution.done ? "navy" : "crimson",
          fontFamily: execution.done ? "Sofia" : "Tangerine",
        }}
      >
        {execution.enteredText}
      </li>
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
