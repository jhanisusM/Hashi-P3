import axios from "axios";

export default {
  // Gets all horses
  getHorses: function() {
    return axios.get("/api/horses");
  },
  // Gets the horse with the given id
  getHorse: function(id) {
    return axios.get("/api/horses/" + id);
  },
  // Deletes the horse with the given id
  deleteHorse: function(id) {
    return axios.delete("/api/horses/" + id);
  },
  // Saves a horse to the database
  saveHorse: function(horseData) {
    return axios.post("/api/horses", horseData);
  }
};
