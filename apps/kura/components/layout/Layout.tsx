import { Box, CssBaseline } from '@mui/material';

import React from 'react';

import Header from './header/Header';

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Box>
      <CssBaseline />
      <Header />

      {/* main content */}
      <main>{props.children}</main>
    </Box>
  );
};

export default Layout;
