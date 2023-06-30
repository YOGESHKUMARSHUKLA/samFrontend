import http from "../http-placement"
class TraineeDataService {
  getAll() {
    return http.get("/placement-details/placements/")
  }

  get(id) {
    return http.get(`/placement-details/placements/${id}`)
  }

  create(data) {
    return http.post("/placement-details/placements", data)
  }

  update(id, data) {
    return http.put(`/placement-details/placements/${id}`, data)
  }

  delete(id) {
    return http.delete(`/placement-details/placements/${id}`)
  }

  deleteAll() {
    return http.delete(`/placement-details/placements`)
  }

  findByfirstName(title) {
    return http.get(`/placement-details/placements?firstName=${title}`)
  }
}

export default new TraineeDataService()
