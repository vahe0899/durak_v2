import { useState } from "react";

import { observer } from "mobx-react-lite";

import classes from "./Home.module.scss";
import "./Home.scss";

import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";

export const Home = observer(() => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={classes.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={(classes.logo, classes.react)}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={classes.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={classes["read-the-docs"]}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
});
