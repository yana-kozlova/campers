import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import theme from './themes/theme';
import Home from './pages/home/Home.tsx';
import { Layout } from './components/layouts';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
};

export default App;
