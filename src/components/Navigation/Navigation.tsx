import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { AppBar, Toolbar, Box } from '@mui/material';

import logo from '../../assets/logo.svg';
import { eColors } from '../../utils/eColors.ts';

const NavLinkStyled: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            style={({ isActive }) => ({
                textDecoration: 'none',
                fontWeight: 500,
                color: isActive ? eColors.PRIMARY_LIGHT : eColors.PRIMARY_TEXT,
            })}
        >
            {children}
        </NavLink>
    );
};

export const Navigation: React.FC = () => {
    const navigate = useNavigate();
    
    const navigateToHome = () => {
        navigate('/');
    }
    
    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <img src={logo} alt="Logo" onClick={navigateToHome} style={{height: 16, paddingLeft: '44px', cursor: 'pointer'}}/>
                <Box sx={{display: 'flex', gap: '20px', flexGrow: 1, justifyContent: 'center' }}>
                    <NavLinkStyled to="/">Home</NavLinkStyled>
                    <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
