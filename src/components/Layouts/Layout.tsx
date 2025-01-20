import React from 'react';

import { Box } from '@mui/material';

import { Navigation } from '../Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Box sx={{ maxHeight: 'calc(100vh - 72px)' }}>{children}</Box>
    </>
  );
};
