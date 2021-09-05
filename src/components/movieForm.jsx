import Joi from "joi-browser";
import React from "react";
import Form from "./common/form";
import { getGeners } from "./../services/fakeGenreService";
import { getMovie } from "../services/fakeMovieService";
import { saveMovie } from "./../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      stock: "",
      rate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    stock: Joi.number().min(0).max(100).required().label("Number in stock"),
    rate: Joi.number().min(0).max(10).required().label("Daily rental rate"),
  };

  componentDidMount() {
    const genres = getGeners();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      stock: movie.stock,
      rate: movie.rate,
    };
  };

  doSubmit = () => {
    saveMovie(this.state.data);
    // this.setState({ movies });
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Details</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genere", this.state.genres)}
          {this.renderInput("stock", "Number in stock", "number")}
          {this.renderInput("rate", "Daily Rental Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
