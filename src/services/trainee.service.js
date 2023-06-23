import http from "../http-common";

class TraineeDataService {
  getAll() {
    return http.get("/trainees");
  }

  get(id) {
    return http.get(`/trainees/${id}`);
  }

  create(data) {
    return http.post("/trainees", data);
  }

  update(id, data) {
    return http.put(`/trainees/${id}`, data);
  }

  delete(id) {
    return http.delete(`/trainees/${id}`);
  }

  deleteAll() {
    return http.delete(`/trainees`);
  }

  findByfirstName(title) {
    return http.get(`/trainees?firstName=${title}`);
  }
}

export default new TraineeDataService();