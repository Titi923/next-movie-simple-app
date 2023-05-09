export default function Movie({title, id, poster_path}) {
const imagePath = 'https://image.tmdb.org/t/p/original/'
  return (
    <div>
        <h1>{title}</h1>
        <a href={`/${id}`}><img src={imagePath+poster_path} alt="" width="280px" height="280px" /></a>
    </div>
  );
}
