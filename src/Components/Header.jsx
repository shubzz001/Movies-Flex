
// import React from "react";
// import "./header.css";

// const Header = ({ genres, selectedGenre, setSelectedGenre, watchlistCount, onWatchlistClick }) => {
//   if (!genres || genres.length === 0) return null;

//   return (
//     <header className="header">
//       <div className="navbar-logo">
//         <h1>Movie-Flex</h1>
//       </div>

//       <div className="navbar-actions">

//         <div className="navbar-watchlist">
//           <button
//             className="watchlist-icon"
//             onClick={onWatchlistClick}
//           >
//             <span className="icon">🌟</span>
//             <span className="badge">{watchlistCount}</span>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, FormControl, Select, MenuItem } from '@mui/material';
import { FaStar } from 'react-icons/fa';
import { RiMovie2AiLine } from 'react-icons/ri';
import { useThemeContext } from '../ThemeContext'; // Import theme context
import { MdDarkMode, MdLightMode } from 'react-icons/md'; // Import dark/light icons

const Header = ({ genres, selectedGenre, setSelectedGenre, watchlistCount, onWatchlistClick }) => {
  const { darkMode, toggleTheme } = useThemeContext(); // Use the theme context

  if (!genres || genres.length === 0) return null;

  return (
    <AppBar position="static" sx={{ background: darkMode ? '#333' : '#fbbf24', boxShadow: 3 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

        {/* Logo Section */}
        <div className="navbar-logo">
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: darkMode ? '#fbbf24' : '#333' }}>
            <RiMovie2AiLine style={{ marginRight: '0.5rem' }} />
            Movie-Flex
          </Typography>
        </div>

        {/* Watchlist Section */}
        <div className="navbar-watchlist">
          <IconButton color="inherit" onClick={onWatchlistClick}>
            <Badge badgeContent={watchlistCount} color="error">
              <FaStar />
            </Badge>
          </IconButton>
        </div>

        {/* Theme Toggle Button */}
        <IconButton color="inherit" onClick={toggleTheme}>
          {darkMode ? <MdLightMode /> : <MdDarkMode />}  {/* Toggle between icons */}
        </IconButton>

        {/* Genre Dropdown */}
        {/* <div className="navbar-dropdown">
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <Select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              label="Genre"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: darkMode ? '#fff' : '#e5e7eb' },
                  '&:hover fieldset': { borderColor: darkMode ? '#fbbf24' : '#fbbf24' },
                  '&.Mui-focused fieldset': { borderColor: darkMode ? '#fbbf24' : '#fbbf24' },
                },
              }}
            >
              {genres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
