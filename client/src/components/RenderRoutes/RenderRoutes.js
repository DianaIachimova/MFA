import React from "react";

const RenderRoutes = (route) => {
  return <route.component routes={route.routes} />;
};

export default RenderRoutes;
