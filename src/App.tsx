import React from 'react';
import { EditorRoutes } from './routers/EditorRoutesModel';
import RouteComponents from './routers/RouteComponents';

const App = () => (
    <>
      <RouteComponents
        routeModels={EditorRoutes}
      />
    </>
);

export default App;