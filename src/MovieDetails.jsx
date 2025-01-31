

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import ReactPlayer from 'react-player';
// import './moviesdetails.css';

// const MovieDetails = () => {
//     const [movie, setMovie] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const { id } = useParams();

//     useEffect(() => {
//         const fetchMovieDetails = async () => {
//             try {
//                 const response = await axios.get('https://www.freetestapi.com/api/v1/movies');
//                 const selectedMovie = response.data.find(m => m.id === parseInt(id));
//                 setMovie(selectedMovie);
//             } catch (error) {
//                 console.error('Error fetching movie details:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchMovieDetails();
//     }, [id]);

//     if (loading) return <div className="loading">Loading...</div>;
//     if (!movie) return <div>Movie not found</div>;

//     return (
//         <div className="movie-details-container">
//             <div className="movie-details-header">
//                 <div style={{ display: "flex" }}>
//                     <img
//                         src={movie.poster}
//                         alt={`${movie.title} Poster`}
//                         className="movie-poster-large"
//                     />
//                     <div className="video-player-container">
//                         <ReactPlayer
//                             url={movie.trailer}
//                             controls={true} // Enables built-in controls
//                             playing={false} // Video doesn't auto-play
//                             width="320px"
//                             height="180px"
//                             className="movie-trailer-player"
//                         />
//                     </div>
//                 </div>
//                 <div className="movie-header-info">
//                     <h1>{movie.title}</h1>
//                     <p><strong>Year:</strong> {movie.year}</p>
//                     <p><strong>Director:</strong> {movie.director}</p>
//                     <p><strong>Rating:</strong> {movie.rating}/10</p>
//                     <p><strong>Genre:</strong> {movie.genre.join(', ')}</p>
//                 </div>
//             </div>

//             <div className="movie-additional-details">
//                 <h2>Movie Information</h2>
//                 <div className="details-grid">
//                     <div>
//                         <strong>Runtime:</strong> {movie.runtime} minutes
//                     </div>
//                     <div>
//                         <strong>Country:</strong> {movie.country}
//                     </div>
//                     <div>
//                         <strong>Language:</strong> {movie.language}
//                     </div>
//                     <div>
//                         <strong>Box Office:</strong> {movie.boxOffice}
//                     </div>
//                     <div>
//                         <strong>Production:</strong> {movie.production}
//                     </div>
//                     <div>
//                         <strong>Awards:</strong> {movie.awards}
//                     </div>
//                 </div>

//                 <h2>Plot</h2>
//                 <p>{movie.plot}</p>

//                 <h2>Actors</h2>
//                 <div className="actors-list">
//                     {movie.actors.map((actor, index) => (
//                         <span key={index} className="actor-chip">{actor}</span>
//                     ))}
//                 </div>

//                 <div className="external-links">
//                     <a
//                         href={movie.website}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="website-link"
//                     >
//                         Official Website
//                     </a>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MovieDetails;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Box, Typography, Grid, Card, CardContent, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import './moviesdetails.css';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get('https://www.freetestapi.com/api/v1/movies');
                const selectedMovie = response.data.find(m => m.id === parseInt(id));
                setMovie(selectedMovie);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) return <div className="loading">Loading...</div>;
    if (!movie) return <div>Movie not found</div>;

    return (
        <Box className="movie-details-container" sx={{ padding: 3 }}>
            <Box className="movie-details-header" sx={{ display: 'flex', gap: 4, mb: 4 }}>
                <img
                    src={movie.poster}
                    alt={`${movie.title} Poster`}
                    className="movie-poster-large"
                    style={{ maxWidth: 300, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" component="h1" sx={{ color: '#333' }}>
                        {movie.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', mb: 1 }}>
                        <strong>Year:</strong> {movie.year}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', mb: 1 }}>
                        <strong>Director:</strong> {movie.director}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', mb: 1 }}>
                        <strong>Rating:</strong> {movie.rating}/10
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666' }}>
                        <strong>Genre:</strong> {movie.genre.join(', ')}
                    </Typography>
                </Box>
            </Box>

            <Box className="movie-additional-details" sx={{ backgroundColor: '#fff', borderRadius: 2, boxShadow: 2, p: 3 }}>
                <Typography variant="h5" sx={{ color: '#333', mb: 2 }}>Movie Information</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: '#555' }}>
                            <strong>Runtime:</strong> {movie.runtime} minutes
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: '#555' }}>
                            <strong>Country:</strong> {movie.country}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: '#555' }}>
                            <strong>Language:</strong> {movie.language}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: '#555' }}>
                            <strong>Box Office:</strong> {movie.boxOffice}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: '#555' }}>
                            <strong>Production:</strong> {movie.production}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: '#555' }}>
                            <strong>Awards:</strong> {movie.awards}
                        </Typography>
                    </Grid>
                </Grid>

                <Typography variant="h5" sx={{ color: '#333', my: 2 }}>Plot</Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>{movie.plot}</Typography>

                <Typography variant="h5" sx={{ color: '#333', mb: 2 }}>Actors</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {movie.actors.map((actor, index) => (
                        <Avatar key={index} sx={{ bgcolor: '#e0e0e0', padding: 0.5, fontSize: '0.9rem' }}>
                            {actor[0]}
                        </Avatar>
                    ))}
                </Box>

                <Box sx={{ mt: 4 }}>
                    <ReactPlayer
                        url={movie.trailer}
                        controls={true}
                        playing={false}
                        width="100%"
                        height="360px"
                        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
                    />
                </Box>

                <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                    <Button variant="contained" color="primary" sx={{ padding: '10px 20px', borderRadius: '8px' }}>
                        <Link to={movie.website} target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                            Official Website
                        </Link>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default MovieDetails;
