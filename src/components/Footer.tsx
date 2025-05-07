import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export const Footer: React.FC = () => (
  <Box component="footer" sx={{ py: 2, mt: 4, bgcolor: 'grey.200', textAlign: 'center' }}>
    <Typography variant="body2">© 2025 MyShop. All rights reserved.</Typography>
    <Typography variant="body2">
      Contact us: <Link href="mailto:info@myshop.example">info@myshop.example</Link>
    </Typography>
  </Box>
);
