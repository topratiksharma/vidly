const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie Details: {match.params.id}</h1>
      <button className='btn btn-success' onClick={() => history.push('/movies')}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;
