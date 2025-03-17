import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import counterReducer from "./reducer";

const store = createStore(counterReducer);

const App = () => {
  return (
    <div>
      <h1>Unicafe Feedback</h1>
      <button onClick={() => store.dispatch({ type: "GOOD" })}>Good</button>
      <button onClick={() => store.dispatch({ type: "OK" })}>Ok</button>
      <button onClick={() => store.dispatch({ type: "BAD" })}>Bad</button>
      <button onClick={() => store.dispatch({ type: "ZERO" })}>Reset</button>

      <div>
        <h2>Feedback Counts:</h2>
        <p>Good: {store.getState().good}</p>
        <p>Ok: {store.getState().ok}</p>
        <p>Bad: {store.getState().bad}</p>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(<App />);
};

renderApp();
store.subscribe(renderApp);
