import { Layout } from "~/app/layout";
import { StoresProvider, stores } from "~/app/providers/store";
import { Home } from "~/pages/Home";
import { Route, Routes } from "react-router-dom";

import { withProviders } from "./providers";

const App = () => {
  return (
    <div className="app">
      <StoresProvider value={stores}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </StoresProvider>
    </div>
  );
};

export default withProviders(App);
