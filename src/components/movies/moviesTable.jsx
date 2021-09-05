import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from '../common/like';
import Table from '../common/table/table';

class MoviesTable extends Component {
  columns = [
    { path: 'title', label: 'Title', content: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link> },
    { path: 'genre.name', label: 'Genre' },
    { path: 'stock', label: 'Stock' },
    { path: 'rate', label: 'Rate' },
    { key: 'like', content: (movie) => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} /> },
    {
      key: 'action',
      content: (movie) => (
        <button onClick={() => this.props.onDelete(movie)} className='btn btn-danger btn-sm'>
          Delete <i className='fa fa-trash' aria-hidden='true'></i>
        </button>
      ),
    },
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;

    return <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} />;
  }
}

export default MoviesTable;
