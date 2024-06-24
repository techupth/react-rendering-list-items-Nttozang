import movies from '../data/movies';
import "../App.css"

function MovieLists() {
    return (
        <div>
            {movies.map((item, index) => (
                <div key={index} className='item-list'>
                    <div>
                        <img src={item.image} alt="image" className='image'/>
                    </div>
                    <div className='detail'>Titel : {item.title} </div>
                    <div className='detail'>Year : {item.year} </div>
                    <div className='detail'>Runtime : {item.runtime} </div>
                    <div className='detail'>Genres :
                        {item.genres.map((genre, i) => (
                            <span key={i} className='genress-type'>{genre}</span>
                        ))}
                    </div>
                    <div className='detail'>IMDB Rating: {item.imdbRating} </div>
                    <div className='detail'>IMDB Votes: {item.imdbVotes} </div>
                </div>
            ))}
        </div>
    );
}



export default MovieLists