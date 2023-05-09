export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const response = await data.json();
  return response.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = 'https://image.tmdb.org/t/p/original/';
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const response = await data.json();

  return (
    <div>
      <h2>{response.title}</h2>
      <h3>{response.overview}</h3>
      <img
        src={imagePath + response.poster_path}
        alt=""
        width="280px"
        height="280px"
      />
    </div>
  );
}
