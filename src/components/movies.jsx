import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import { getGeners } from '../services/fakeGenereService';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    generes: [],
    sortColumn: { path: 'title', order: 'asc' },
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  componentDidMount() {
    const generes = [{ name: 'All Generes', _id: '' }, ...getGeners()];
    this.setState({ movies: getMovies(), generes });
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

  handleGenereSelect = (genere) => {
    this.setState({ selectedGenere: genere, currentPage: 1 });
  };

  getPageData = () => {
    const { pageSize, currentPage, movies: allMovies, selectedGenere, sortColumn } = this.state;
    const filteredMovies = selectedGenere && selectedGenere._id ? allMovies.filter((m) => m.genere._id === selectedGenere._id) : allMovies;
    const sortedMovies = _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sortedMovies, currentPage, pageSize);
    return { totalCount: filteredMovies.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, sortColumn } = this.state;
    if (count === 0) return <p>No Movies Present in the database</p>;
    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className='row'>
        <div className='col-3'>
          <ListGroup items={this.state.generes} selectedItem={this.state.selectedGenere} onItemSelect={this.handleGenereSelect} />
        </div>
        <div className='col'>
          Showing: <span className='badge badge-success'>{totalCount}</span> movies <i className='fa fa-film' aria-hidden='true'></i> in the database
          <MoviesTable movies={movies} onLike={this.handleLike} onDelete={this.handleDelete} sortColumn={sortColumn} onSort={this.handleSort} />
          <Pagination currentPage={currentPage} itemsCount={totalCount} onPageChange={this.handlePageChange} pageSize={pageSize} />
        </div>
      </div>
    );
  }
}

export default Movies;
