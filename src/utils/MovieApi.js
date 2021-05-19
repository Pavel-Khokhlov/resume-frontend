import { BASE_URL, BEATFILM_URL } from "./config";
class MovieApi {
  constructor(config) {
    this.url = config.url;
  }

  getSavedMovies(token) {
    return fetch(`${this.url}/movies`, {
      headers: { 
        'Content-Type': 'application/json',
        "Authorization": `${token}`, 
      },
    }).then(this._checkPromise);
  }

  saveMovie({ movieForSave }, token) {
    return fetch(`${this.url}/movies`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `${token}`,
      },
      body: JSON.stringify({
        country: movieForSave.country,
        director: movieForSave.director,
        duration: movieForSave.duration,
        year: movieForSave.year,
        description: movieForSave.description,
        image: `${BEATFILM_URL}${movieForSave.image ? movieForSave.image.url : ""}`,
        trailer: movieForSave.trailerLink,
        thumbnail: `${BEATFILM_URL}${movieForSave.image ? movieForSave.image.formats.thumbnail.url : ""}`,
        movieId: movieForSave.id,
        nameRU: movieForSave.nameRU,
        nameEN: `${movieForSave.nameEN ? movieForSave.nameEN : "No EN Title"}`,
      }),
    }).then(this._checkPromise);
  }

  deleteMovie({ movieForDelete }, token) {
    const path = movieForDelete._id;
    return fetch(`${this.url}/movies/${path}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `${token}`,
      },
    }).then(this._checkPromise);
  }

  _checkPromise(res) {
    return res.ok ? res.json() : Promise.reject(`Файл не найден!`);
  }
}

const movieApi = new MovieApi({
  url: `${BASE_URL}`,
});

export default movieApi;
