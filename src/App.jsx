import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  const api = async () => {
    const response = await fetch('https://dummyapi.online/api/movies');
    const result = await response.json();
    setMovies(result);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {movies.map((movie) => (
        <div key={movie.id} className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={movie.image}
              alt={`${movie.movie} Poster`}
              className="object-cover w-full h-64"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{movie.movie}</h2>
            <p>Rating: {movie.rating}</p>
            <div className="card-actions justify-end">
              <a
                href={movie.imdb_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
