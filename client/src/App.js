import { Route, Routes, useLocation } from "react-router-dom";
import ModalPreviewProduct from "./components/Products/ModalPreviewProduct";
import RenderRoutes from "./components/RenderRoutes/RenderRoutes";
import Layout from "./elements/Layout";
import routes from "./routes";

const App = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <Layout>
      <Routes location={state?.backgroundLocation || location}>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              key={route.path}
              element={<RenderRoutes {...route} />}
            />
          );
        })}
      </Routes>

      {/* Show the modal when a `backgroundLocation` is set */}
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path="/:locale/products/:productId"
            element={<ModalPreviewProduct />}
          />
        </Routes>
      )}
    </Layout>
  );
};

export default App;
