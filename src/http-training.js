import axios from "axios"

export default axios.create({
  //   baseURL: "http://localhost:8080/student-assessment-tracker",
  baseURL:
    "https://trainingdetails-ba3cryd7aq-df.a.run.app/student-assessment-management",
  headers: {
    "Content-type": "application/json"
  }
})
