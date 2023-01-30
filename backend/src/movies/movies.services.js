const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");

addCritics = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preferred_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
  created_at: "critic.created_at",
  updated_at: "critic.updated_at",
});

function list(is_showing) {

  if (is_showing === "true") {
    return listShowingTrue();
  }
  return listAll();
}
function listAll() {
  return knex("movies").select("*");
}
function listShowingTrue() {

  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select("m.movie_id", "m.title")
    .groupBy("m.movie_id")
    .where({ is_showing: true });
}

function read(movieId) {
  return knex("movies").select("*").where({ movie_id: movieId }).first();
}

function listTheatersByMovieId(movieId) {
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .select("*")
    .where({ "mt.movie_id": movieId });
}

// function reviewsByMovieId(movieId) {
//     return knex("reviews as r")
//     .join("critics as c", "r.critic_id", "c.critic_id")
//     .where({ "r.movie_id": movieId, })
//     .select(
//         "c.*",
//         "r.*",
//         "c.critic_id as critic.critic_id",
//         "c.preferred_name as critic.preferred_name",
//         "c.surname as critic.surname",
//         "c.organization_name as critic.organization_name"
//     )
//     // .then(addCritic)
//     // .then(() => console.log("addCritic", addCritic))

//     // .then((data) => data.map((item) => (console.log(item) )))
//     .then((data) => data.map((item) => addCritic({critic_id: 'c.critic_id',
//     preferred_name: 'c.preferred_name',
//     surname: 'c.surname',
//     organization_name: 'c.organization_name',
//     created_at: 'c.created_at',
//     updated_at: 'c.updated_at',})))

// }

function reviewsByMovieId(movieId) {
  return knex("movies")
    .select(
      "reviews.review_id",
      "reviews.content",
      "reviews.score",
      "movies.movie_id",
      "critics.critic_id",
      "critics.preferred_name",
      "critics.surname",
      "critics.organization_name",
      "critics.created_at",
      "critics.updated_at"
    )
    .join("reviews", "reviews.movie_id", "movies.movie_id")
    .join("critics", "reviews.critic_id", "critics.critic_id")
    .where({ "movies.movie_id": movieId })
    .then((data) => data.map((i) => addCritics(i)));
}

module.exports = {
  list,
  read,
  listTheatersByMovieId,
  reviewsByMovieId,
};
