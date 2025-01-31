// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import MovieDetails from './MovieDetails';
// import Watchlist from './Watchlist';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movie/:id" element={<MovieDetails />} />
//         <Route path="/watchlist" element={<Watchlist />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider
import AppWrapper from './AppWrapper '; // Wrap in theme provider

import Home from './Home';
import MovieDetails from './MovieDetails';
import Watchlist from './Watchlist';
import Header from './Components/Header';

const App = () => {
  return (
    <ThemeProvider>
      <AppWrapper>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
