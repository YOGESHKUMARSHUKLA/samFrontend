import http from "../http-training"
class TraineeDataService {
  getAll() {
    return http.get("/training-details/trainings/")
  }

  get(id) {
    return http.get(`/training-details/trainings/${id}`)
  }

  create(data) {
    return http.post("/training-details/trainings", data)
  }

  update(id, data) {
    return http.put(`/training-details/trainings/${id}`, data)
  }

  delete(id) {
    return http.delete(`/training-details/trainings/${id}`)
  }

  deleteAll() {
    return http.delete(`/training-details/trainings`)
  }

  findByfirstName(title) {
    return http.get(`/training-details/trainings?firstName=${title}`)
  }
}

export default new TraineeDataService()
