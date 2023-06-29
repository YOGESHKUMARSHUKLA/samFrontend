import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8080/student-assessment-tracker',
  headers: {
    'Content-type': 'application/json',
  }
});