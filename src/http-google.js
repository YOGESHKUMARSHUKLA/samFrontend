import axios from "axios"

export default axios.create({
  baseURL: "https://samnodebackend-ba3cryd7aq-df.a.run.app/",
  headers: {
    "Content-type": "application/json",
    Accept: "image/jpeg, image/png, text/csv, application/vnd.ms-excel"
  }
})
