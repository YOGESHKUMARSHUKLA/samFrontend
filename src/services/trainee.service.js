import http from "../http-common"
class TraineeDataService {
  getAll() {
    return http.get("/trainee-details/trainees/")
  }

  get(id) {
    return http.get(`//trainee-details/trainees/${id}`)
  }

  create(data) {
    return http.post("/trainee-details/trainees", data)
  }

  update(id, data) {
    return http.put(`/trainee-details/trainees/${id}`, data)
  }

  delete(id) {
    return http.delete(`/trainee-details/trainees/${id}`)
  }

  deleteAll() {
    return http.delete(`/trainee-details/trainees`)
  }

  findByfirstName(title) {
    return http.get(`/trainee-details/trainees?firstName=${title}`)
  }
}

export default new TraineeDataService()
