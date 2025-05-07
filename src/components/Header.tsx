import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/?search=${encodeURIComponent(q)}`);
  };

  return (
    <AppBar position="sticky">
      <Toolbar component="form" onSubmit={onSearch}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}
        >
          MyShop
        </Typography>
        <Box
          sx={{
            position: 'relative',
            borderRadius: 1,
            backgroundColor: 'rgba(255,255,255,0.15)',
            px: 1,
            mr: 2,
          }}
        >
          <InputBase
            placeholder="Search…"
            value={q}
            onChange={e => setQ(e.target.value)}
            sx={{ color: 'inherit', width: '200px' }}
          />
          <IconButton
            type="submit"
            size="small"
            sx={{ position: 'absolute', right: 0, top: 0, color: 'inherit' }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
