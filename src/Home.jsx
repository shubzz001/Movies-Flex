
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// import './Home.css';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import StarIcon from './assets/star.svg';
// import star from './assets/star.png';

// const Home = () => {
//     const [movies, setMovies] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedGenre, setSelectedGenre] = useState('All');
//     const [watchlist, setWatchlist] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 const response = await axios.get('https://www.freetestapi.com/api/v1/movies');
//                 setMovies(response.data);
//             } catch (error) {
//                 console.error('Error fetching movies:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMovies();

//         // Load the watchlist from local storage
//         const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
//         setWatchlist(storedWatchlist);
//     }, []);

//     const genres = Array.from(new Set(movies.flatMap((movie) => movie.genre)));

//     const filteredMovies =
//         selectedGenre === 'All'
//             ? movies
//             : movies.filter((movie) => movie.genre.includes(selectedGenre));

//     const addToWatchlist = (movie) => {
//         const updatedWatchlist = [...watchlist, movie];
//         setWatchlist(updatedWatchlist);
//         localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
//     };

//     const removeFromWatchlist = (movieId) => {
//         const updatedWatchlist = watchlist.filter((item) => item.id !== movieId);
//         setWatchlist(updatedWatchlist);
//         localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
//     };

//     const isInWatchlist = (movieId) => watchlist.some((item) => item.id === movieId);

//     if (loading) return <div className="loading">Loading...</div>;

//     return (
//         <>
//             <Header
//                 genres={genres}
//                 selectedGenre={selectedGenre}
//                 setSelectedGenre={setSelectedGenre}
//                 watchlistCount={watchlist.length}
//                 onWatchlistClick={() => navigate('/watchlist')}
//             />
//             <main className="movie-container">
//                 {filteredMovies.map((movie) => (
//                     <div
//                         className="movie-card"
//                         key={movie.id}
//                         onClick={() => navigate(`/movie/${movie.id}`)}
//                         style={{ cursor: 'pointer' }}
//                     >
//                         <img src={movie.poster} alt={`${movie.title} Poster`} className="movie-poster" />
//                         <div className="movie-details">
//                             <h2>{movie.title}</h2>
//                             <p><strong>Year:</strong> {movie.year}</p>
//                             <p><strong>Genre:</strong> {movie.genre.join(', ')}</p>
//                             <p><strong>Director:</strong> {movie.director}</p>
//                             <p>
//                                 <strong>Rating:</strong>
//                                 {movie.rating}
//                                 <img src={star} alt="star" style={{ width: '20px', height: '20px', marginLeft: '5px' }} />
//                             </p>
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation();
//                                     isInWatchlist(movie.id)
//                                         ? removeFromWatchlist(movie.id)
//                                         : addToWatchlist(movie);
//                                 }}
//                                 className="watchlist-btn"
//                             >
//                                 {isInWatchlist(movie.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </main>
//             <Footer />
//         </>
//     );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography, Button, CircularProgress, Badge, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { FaStar } from 'react-icons/fa'; // For the star icon
import { MdMovie } from 'react-icons/md'; // For the movie icon
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for the toast notifications


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [watchlist, setWatchlist] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://www.freetestapi.com/api/v1/movies');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();

        const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        setWatchlist(storedWatchlist);
    }, []);

    const genres = Array.from(new Set(movies.flatMap((movie) => movie.genre)));

    const filteredMovies =
        selectedGenre === 'All'
            ? movies
            : movies.filter((movie) => movie.genre.includes(selectedGenre));

    const addToWatchlist = (movie) => {
        const updatedWatchlist = [...watchlist, movie];
        setWatchlist(updatedWatchlist);
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));

        toast.success(`${movie.title} added to watchlist!`);
    };

    const removeFromWatchlist = (movieId) => {
        const updatedWatchlist = watchlist.filter((item) => item.id !== movieId);
        setWatchlist(updatedWatchlist);
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));

        toast.warning('Movie removed from watchlist.');
    };

    const isInWatchlist = (movieId) => watchlist.some((item) => item.id === movieId);

    if (loading) return <CircularProgress />;


    return (
        <>
            <ToastContainer position="top-center" autoClose={3000} closeOnClick pauseOnHover draggable pauseOnFocusLoss />
            <Header
                genres={genres}
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
                watchlistCount={watchlist.length}
                onWatchlistClick={() => navigate('/watchlist')}
            />
            <Container sx={{ marginTop: '2rem', paddingX: 3 }}>
                <FormControl fullWidth>
                    <InputLabel id="genre-select-label" sx={{ fontWeight: 'bold', color: '#4e5d6e' }}>Genre</InputLabel>
                    <Select
                        labelId="genre-select-label"
                        value={selectedGenre}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                        label="Genre"
                        sx={{
                            backgroundColor: '#f1f3f7',
                            borderRadius: '12px',
                            boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
                            '& .MuiSelect-icon': {
                                color: '#4e5d6e',
                            },
                        }}
                    >
                        <MenuItem value="All" sx={{ color: '#4e5d6e' }}>All</MenuItem>
                        {genres.map((genre) => (
                            <MenuItem key={genre} value={genre} sx={{ color: '#4e5d6e' }}>
                                {genre}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Grid container spacing={3} sx={{ marginTop: '2rem' }}>
                    {filteredMovies.map((movie) => (
                        <Grid item xs={12} sm={6} md={3} key={movie.id}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.3s ease-in-out',
                                    height: '100%', // Ensure the card stretches to fill the available height
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                                onClick={() => navigate(`/movie/${movie.id}`)}
                            >
                                <img
                                    src={movie.poster}
                                    alt={`${movie.title} Poster`}
                                    style={{
                                        width: '100%',
                                        borderTopLeftRadius: '12px',
                                        borderTopRightRadius: '12px',
                                        objectFit: 'cover',
                                        height: '200px', // Fixed height for smaller cards
                                    }}
                                />
                                <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, padding: '1rem' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fff' }}>
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#7a8b98', marginTop: '0.5rem' }}>
                                        <strong>Year:</strong> {movie.year}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#7a8b98' }}>
                                        <strong>Genre:</strong> {movie.genre.join(', ')}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#7a8b98' }}>
                                        <strong>Director:</strong> {movie.director}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#7a8b98' }}>
                                        <strong>Rating:</strong> {movie.rating}{' '}
                                        <FaStar style={{ width: 20, height: 20, marginLeft: 5, color: '#f4a261' }} />
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: isInWatchlist(movie.id) ? '#cc7a00' : '#ff9900',
                                            color: 'white',
                                            marginTop: 2,
                                            padding: '10px 20px',
                                            borderRadius: '8px',
                                            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
                                            '&:hover': {
                                                backgroundColor: isInWatchlist(movie.id) ? '#d98300' : '#ff7f00',
                                                boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.2)',
                                            },
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            isInWatchlist(movie.id)
                                                ? removeFromWatchlist(movie.id)
                                                : addToWatchlist(movie);
                                        }}
                                    >
                                        {isInWatchlist(movie.id) ? 'Remove from Watchlist' : 'Add to Watchlist'}
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </>



    );
};

export default Home;
