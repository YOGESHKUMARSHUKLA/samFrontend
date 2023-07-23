import React, { Component } from "react"
import axios from "axios"
import { CFormInput, CInputGroup, CInputGroupText } from "@coreui/react"
import "./dashboard.css"
import GoogleDataService from "../../services/google.service"
import { useEffect } from "react"
import { useState } from "react"
import { CNavLink } from "@coreui/react"
// import React from "react"
import { CListGroupItem, CListGroup } from "@coreui/react"
export default class AddTrainee extends Component {
  state = {
    file: null,
    uploading: false,
    uploadProgress: 0,
    uploadedFileUrl: null
  }
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const response = await GoogleDataService.getAll()
      console.log(response.data[0][0].id)
      const images = response.data[0]
        .filter(item => item.id.includes("jpeg"))
        .map(item => ({
          id: item.id,
          url: `https://storage.googleapis.com/storagesam/${item.id}` // Replace with the actual URL format for your images
        }))
      const csvs = response.data[0]
        .filter(item => item.id.includes("csv"))
        .map(item => ({
          id: item.id,
          url: `https://storage.googleapis.com/storagesam/${item.id}` // Replace with the actual URL format for your images
        }))

      this.setState({ images })
      this.setState({ csvs })
    } catch (error) {
      console.error(error)
    }
  }
  // upload = async() => {
  //   if (!file) {
  //     alert("Please select a file.");
  //     return;
  //   }
  //   try {
  //     setUploading(true);
  //     setUploadProgress(0);

  //     const response = GoogleDataService.post(file)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    )
  }
  handleFileUpload = async () => {
    const file = this.state.file
    if (!file) {
      alert("Please select a file.")
      return
    }
    const url = `https://samnodebackend-ba3cryd7aq-df.a.run.app/upload`
    const headers = {
      "Content-Type": "multipart/form-data",
      // "Content-type": "application/json",
      Accept: "image/jpeg, image/png, text/csv, application/vnd.ms-excel"
    }

    try {
      this.setState({ uploading: true, uploadProgress: 0 })
      // let formData = new FormData()
      // formData.append("imgfile", file)
      let postid = this.uuidv4()
      let filez = this.state.file
      console.log(filez)
      // Create new file so we can rename the file
      let blob = filez.slice(0, filez.size, "image/jpeg")
      const newFile = new File([blob], `${postid}_post.jpeg`, {
        type: "image/jpeg"
      })
      console.log(newFile)
      // Build the form data - You can add other input values to this i.e descriptions, make sure img is appended last
      const formData = new FormData()
      formData.append("imgfile", newFile)
      console.log(formData)

      const response = await axios.post(url, formData, {
        headers,
        onUploadProgress: this.handleUploadProgress
      })

      if (response.status === 200) {
        alert("File uploaded successfully!")
      } else {
        alert("Error uploading file.")
      }
    } catch (error) {
      console.error("Error uploading file:", error)
      alert("Error uploading file.")
    } finally {
      this.setState({ uploading: false })
      this.fetchData()
    }
  }

  handleFileUploadXL = async () => {
    const file = this.state.file
    if (!file) {
      alert("Please select a file.")
      return
    }
    const url = `https://samnodebackend-ba3cryd7aq-df.a.run.app/upload`
    const headers = {
      "Content-Type": "multipart/form-data",
      // "Content-type": "application/json",
      Accept: "image/jpeg, image/png, text/csv, application/vnd.ms-excel"
    }

    try {
      this.setState({ uploading: true, uploadProgress: 0 })
      // let formData = new FormData()
      // formData.append("imgfile", file)
      let postid = this.uuidv4()
      let filez = this.state.file
      console.log(filez)
      // Create new file so we can rename the file
      let blob = filez.slice(
        0,
        filez.size,
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      )
      const newFile = new File([blob], `${postid}_post.xlsx`, {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      })
      console.log(newFile)
      // Build the form data - You can add other input values to this i.e descriptions, make sure img is appended last
      const formData = new FormData()
      formData.append("imgfile", newFile)
      console.log(formData)

      const response = await axios.post(url, formData, {
        headers,
        onUploadProgress: this.handleUploadProgress
      })

      if (response.status === 200) {
        alert("File uploaded successfully!")
      } else {
        alert("Error uploading file.")
      }
    } catch (error) {
      console.error("Error uploading file:", error)
      alert("Error uploading file.")
    } finally {
      this.setState({ uploading: false })
      this.fetchData()
    }
  }

  handleFileUploadcsv = async () => {
    const file = this.state.file
    if (!file) {
      alert("Please select a file.")
      return
    }
    const url = `http://localhost:8080/upload`
    const headers = {
      "Content-Type": "multipart/form-data",
      // "Content-type": "application/json",
      Accept: "image/jpeg, image/png, text/csv, application/vnd.ms-excel"
    }

    try {
      this.setState({ uploading: true, uploadProgress: 0 })
      // let formData = new FormData()
      // formData.append("imgfile", file)
      let postid = this.uuidv4()
      let filez = this.state.file
      console.log(filez)
      // Create new file so we can rename the file
      let blob = filez.slice(0, filez.size, "text/csv")
      const newFile = new File([blob], `${postid}_post.csv`, {
        type: "text/csv"
      })
      console.log(newFile)
      // Build the form data - You can add other input values to this i.e descriptions, make sure img is appended last
      const formData = new FormData()
      formData.append("imgfile", newFile)
      console.log(formData)

      const response = await axios.post(url, formData, {
        headers,
        onUploadProgress: this.handleUploadProgress
      })

      if (response.status === 200) {
        alert("File uploaded successfully!")
      } else {
        alert("Error uploading file.")
      }
    } catch (error) {
      console.error("Error uploading file:", error)
      alert("Error uploading file.")
    } finally {
      this.setState({ uploading: false })
      this.fetchData()
    }
  }

  handleFileChange = event => {
    this.setState({
      file: event.target.files[0],
      uploadedFileUrl: null
    })
  }

  handleUploadProgress = progressEvent => {
    const { loaded, total } = progressEvent
    const uploadProgress = Math.round((loaded / total) * 100)
    this.setState({ uploadProgress })
  }

  render() {
    const { uploading, uploadProgress, uploadedFileUrl, images, csvs } =
      this.state

    // const result = fetch("src/sam.json")
    // console.log(result)

    return (
      <div className="container">
        <div className="mb-3">
          <CInputGroup className="mb-3">
            <CFormInput
              type="file"
              id="inputGroupFile02"
              onChange={this.handleFileChange}
            />
            <CInputGroupText
              component="label"
              htmlFor="inputGroupFile02"
              onClick={this.handleFileUpload}
              // onClick={this.keys}
            >
              PIC Upload
            </CInputGroupText>
            <CInputGroupText
              component="label"
              htmlFor="inputGroupFile02"
              onClick={this.handleFileUploadXL}
              // onClick={this.keys}
            >
              Excel Upload
            </CInputGroupText>
            <CInputGroupText
              component="label"
              htmlFor="inputGroupFile02"
              onClick={this.handleFileUploadcsv}
              // onClick={this.keys}
            >
              CSV Upload
            </CInputGroupText>
          </CInputGroup>
        </div>
        {uploading && (
          <div className="upload-progress">
            Uploading... {uploadProgress}% completed.
          </div>
        )}

        {uploadedFileUrl && (
          <div className="uploaded-file">
            File uploaded successfully! URL: {uploadedFileUrl}
          </div>
        )}
        {/* <div className="image-gallery">
          {images &&
            images.map(image => (
              <img
                key={image.id}
                src={image.url}
                alt={image.id}
                className="gallery-image"
                style={{
                  width: "150px",
                  height: "200px",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px"
                }}
              />
            ))}
          {"     "}
        </div> */}

        <CListGroup>
          {csvs &&
            csvs.map((cv, index) =>
              index === csvs.length - 1 ? (
                <CListGroupItem component="button" key={cv.id} active>
                  <CNavLink href={cv.url}>{cv.id}</CNavLink>
                </CListGroupItem>
              ) : (
                <CListGroupItem component="button" key={cv.id}>
                  <CNavLink href={cv.url}>{cv.id}</CNavLink>
                </CListGroupItem>
              )
            )}
          {"     "}
        </CListGroup>
      </div>
    )
  }
}
