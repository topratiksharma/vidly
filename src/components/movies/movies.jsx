import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getGeners } from "../../services/fakeGenreService";
import { getMovies } from "../../services/fakeMovieService";
import { paginate } from "../../utils/paginate";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import SearchBox from "../common/searchBox";
import MoviesTable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: { path: "title", order: "asc" },
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "" }, ...getGeners()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn,
      searchQuery,
    } = this.state;

    let filteredMovies = allMovies;

    if (searchQuery) {
      filteredMovies = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filteredMovies = allMovies.filter(
        (m) => m.genre._id === selectedGenre._id
      );
    }

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const movies = paginate(sortedMovies, currentPage, pageSize);
    return { totalCount: filteredMovies.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    if (count === 0) return <p>No Movies Present in the database</p>;
    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link
            className="btn btn-primary"
            to="/movies/new"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <p>
            Showing: <span className="badge badge-success">{totalCount}</span>
            movies <i className="fa fa-film" aria-hidden="true"></i> in the
            database
          </p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            currentPage={currentPage}
            itemsCount={totalCount}
            onPageChange={this.handlePageChange}
            pageSize={pageSize}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
