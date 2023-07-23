import axios from "axios"

export default axios.create({
  // baseURL: "http://localhost:8080/student-assessment-tracker",
  baseURL:
    "https://entitlementservice-ba3cryd7aq-uc.a.run.app/student-assessment-management",
  headers: {
    "Content-type": "application/json"
  }
})
