import { Layout } from "~/app/layout";
import { StoresProvider, stores } from "~/app/providers/store";
import { Table } from "~/pages/Table";
import { Route, Routes } from "react-router-dom";

import { withProviders } from "./providers";

const App = () => {
  return (
    <div className="app">
      <StoresProvider value={stores}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Table />} />
          </Route>
        </Routes>
      </StoresProvider>
    </div>
  );
};

export default withProviders(App);
