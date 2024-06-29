import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DimensionThreePage from '../pages/dimension-three.page';
import { ModelProvider } from '../contexts';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModelProvider><DimensionThreePage /></ModelProvider>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
