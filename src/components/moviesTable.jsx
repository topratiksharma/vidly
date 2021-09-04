import React, { Component } from 'react';
import Like from './common/like';

class MoviesTable extends Component {
  
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onDelete, onLike } = this.props;
    
    return (
      <table className='table'>
        <thead>
          <tr>
            <th onClick={() => this.raiseSort('title')}>Title</th>
            <th onClick={() => this.raiseSort('genere')}>Genere</th>
            <th onClick={() => this.raiseSort('stock')}>Stock</th>
            <th onClick={() => this.raiseSort('rate')}>Rate</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genere.name}</td>
              <td>{movie.stock}</td>
              <td>{movie.rate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button onClick={() => onDelete(movie)} className='btn btn-danger btn-sm'>
                  Delete <i className='fa fa-trash' aria-hidden='true'></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
