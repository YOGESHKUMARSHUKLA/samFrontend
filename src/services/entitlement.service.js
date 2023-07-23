import http from "../http-entitlement"
class EntitlementDataService {
  getAll() {
    return http.get("/entitlement-service/entitlements/")
  }

  get(id) {
    return http.get(`/entitlement-service/entitlements/${id}`)
  }

  create(data) {
    return http.post("/entitlement-service/entitlements", data)
  }

  update(data) {
    return http.put(`/entitlement-service/entitlements`, data)
  }

  delete(id) {
    return http.delete(`/entitlement-service/entitlements/${id}`)
  }

  deleteAll() {
    return http.delete(`/entitlement-service/entitlements`)
  }
}

export default new EntitlementDataService()
