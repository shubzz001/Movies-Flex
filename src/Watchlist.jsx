import React, { useEffect, useState } from 'react';
import './Watchlist.css';

const Watchlist = () => {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        setWatchlist(storedWatchlist);
    }, []);

    const removeFromWatchlist = (movieId) => {
        const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
        setWatchlist(updatedWatchlist);
        localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
    };

    if (watchlist.length === 0) {
        return <div className="empty-watchlist">Your watchlist is empty.</div>;
    }

    return (
        <div className="watchlist-container">
            {watchlist.map((movie) => (
                <div className="watchlist-card" key={movie.id}>
                    <img src={movie.poster} alt={`${movie.title} Poster`} />
                    <div className="watchlist-details">
                        <h2>{movie.title}</h2>
                        <p><strong>Year:</strong> {movie.year}</p>
                        <p><strong>Genre:</strong> {movie.genre.join(', ')}</p>
                        <button
                            onClick={() => removeFromWatchlist(movie.id)}
                            className="remove-btn"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Watchlist;
