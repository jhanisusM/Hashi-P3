import axios from "axios";

export default {
  // Gets all books
  getHorses: function() {
    return axios.get("/api/horses");
  },
  // Gets the book with the given id
  getHorse: function(id) {
    return axios.get("/api/horses/" + id);
  },
  getHorseByName: function(name) {
    return axios.get("/api/horses/name/" + name);
  },
  getHorseBySire: function(name) {
    return axios.get("/api/horses/name/" + sire);
  },
  getHorseByMare: function(name) {
    return axios.get("/api/horses/name/" + mare);
  },

  // Deletes the book with the given id
  deleteHorse: function(id) {
    return axios.delete("/api/horses/" + id);
  },
  // Saves a book to the database
  saveHorse: function(horseData) {
    return axios.post("/api/horses", horseData);
  }

};



