import "./App.css";
import MovieLists from "./components/Movie";


function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1 className="header">Movie List Section</h1>
        <MovieLists />
      </section>
    </div>
  );
}

export default App;
