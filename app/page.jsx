import Movie from './components/Movie';

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );

  const response = await data.json();
  console.log(response);

  return (
    <main className='grid gap-16 grid-cols-fluid p-4 text-center'>
      {response.results.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </main>
  );
}
