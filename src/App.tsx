import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { Layout } from "./components/Layouts";

import Home from "./pages/home/Home.tsx";
import Catalog from "./pages/catalog/Catalog.tsx";
import { Camper } from './pages/camper/Camper.tsx';

import theme from "./themes/theme";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:id" element={<Camper />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
