import http from "../http-google"
class GoogleService {
  getAll() {
    return http.get("/upload")
  }

  post(data) {
    return http.post("/upload", data)
  }
}

export default new GoogleService()
