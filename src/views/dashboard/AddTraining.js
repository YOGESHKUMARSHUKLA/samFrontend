import React, { Component } from "react"
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import TrainingDataService from "../../services/training.service"
import { useEffect } from "react"
import { useState } from "react"
import avatar1 from "src/assets/images/avatars/1.jpg"
import CIcon from "@coreui/icons-react"
import { cilLockLocked, cilUser } from "@coreui/icons"
import { Link } from "react-router-dom"
import Placement from "./Placement"
import { Navigate, Route, Routes } from "react-router-dom"
import {
  CFormLabel,
  CFormTextarea,
  CCardGroup,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText
} from "@coreui/react"
import "./dashboard.css"
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from "@coreui/react"
export default class AddTraining extends Component {
  constructor(props) {
    super(props)
    // this.onChangeTitle = this.onChangeTitle.bind(this);
    // this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTraining = this.saveTraining.bind(this)
    this.newTraining = this.newTraining.bind(this)

    this.onChangeTraineeId = this.onChangeTraineeId.bind(this)
    this.onChangeTrainingId = this.onChangeTrainingId.bind(this)
    this.onChangeCourseName = this.onChangeCourseName.bind(this)
    this.onChangeSector = this.onChangeSector.bind(this)
    this.onChangeBatchStartDate = this.onChangeBatchStartDate.bind(this)
    this.onChangeBatchEndDate = this.onChangeBatchEndDate.bind(this)
    this.onChangeIndustryVisitCompleted =
      this.onChangeIndustryVisitCompleted.bind(this)
    this.onChangeOjtCompleted = this.onChangeOjtCompleted.bind(this)

    this.onChangeTrainingStatus = this.onChangeTrainingStatus.bind(this)
    this.onChangeAttendencePercentage =
      this.onChangeAttendencePercentage.bind(this)

    this.onChangeAssessmentConducted =
      this.onChangeAssessmentConducted.bind(this)
    this.onChangeCertified = this.onChangeCertified.bind(this)
    this.onChangeDateOfCoursePassing =
      this.onChangeDateOfCoursePassing.bind(this)
    this.onChangeDateOfIssuanceOfCertificate =
      this.onChangeDateOfIssuanceOfCertificate.bind(this)

    this.onChangeCertificateNameOrAward =
      this.onChangeCertificateNameOrAward.bind(this)
    this.onChangeGrade = this.onChangeGrade.bind(this)
    this.onChangeComments = this.onChangeComments.bind(this)
    this.onChangeLastUpdateTimestamp =
      this.onChangeLastUpdateTimestamp.bind(this)
    this.onChangeCreationTimestamp = this.onChangeCreationTimestamp.bind(this)

    this.state = {
      training: {
        traineeId: "",
        trainingId: null,
        courseDetails: {
          courseName: "",
          sector: "",
          batchStartDate: "",
          batchEndDate: ""
        },
        trainingProcess: {
          industryVisitCompleted: "",
          ojtCompleted: ""
        },
        trainingOutput: {
          trainingStatus: "",
          attendencePercentage: "",
          assessmentConducted: "",
          certified: "",
          dateOfCoursePassing: "",
          dateOfIssuanceOfCertificate: "",
          certificateNameOrAward: "",
          grade: ""
        },
        comments: "",
        lastUpdateTimestamp: "",
        creationTimestamp: ""
      },

      submitted: false
    }
  }

  onChangeTraineeId(e) {
    this.setState({
      traineeId: e.target.value
    })
  }

  onChangeTrainingId(e) {
    this.setState({
      trainingId: e.target.value
    })
  }
  onChangeCourseName(e) {
    this.setState({
      courseName: e.target.value
    })
  }

  onChangeSector(e) {
    this.setState({
      sector: e.target.value
    })
  }
  onChangeBatchStartDate(e) {
    this.setState({
      batchStartDate: e.target.value
    })
  }
  onChangeBatchEndDate(e) {
    this.setState({
      batchEndDate: e.target.value
    })
  }
  onChangeIndustryVisitCompleted(e) {
    this.setState({
      industryVisitCompleted: e.target.value
    })
  }
  onChangeOjtCompleted(e) {
    this.setState({
      ojtCompleted: e.target.value
    })
  }
  onChangeTrainingStatus(e) {
    this.setState({
      trainingStatus: e.target.value
    })
  }
  onChangeAttendencePercentage(e) {
    this.setState({
      attendencePercentage: e.target.value
    })
  }

  onChangeAssessmentConducted(e) {
    this.setState({
      assessmentConducted: e.target.value
    })
  }

  onChangeCertified(e) {
    this.setState({
      certified: e.target.value
    })
  }

  onChangeDateOfCoursePassing(e) {
    this.setState({
      dateOfCoursePassing: e.target.value
    })
  }

  onChangeDateOfIssuanceOfCertificate(e) {
    this.setState({
      dateOfIssuanceOfCertificate: e.target.value
    })
  }

  onChangeCertificateNameOrAward(e) {
    this.setState({
      certificateNameOrAward: e.target.value
    })
  }

  onChangeGrade(e) {
    this.setState({
      grade: e.target.value
    })
  }

  onChangeComments(e) {
    this.setState({
      comments: e.target.value
    })
  }

  onChangeLastUpdateTimestamp(e) {
    this.setState({
      lastUpdateTimestamp: e.target.value
    })
  }

  onChangeCreationTimestamp(e) {
    this.setState({
      creationTimestamp: e.target.value
    })
  }

  saveTraining() {
    var data = {
      training: {
        traineeId: this.state.traineeId,
        trainingId: this.state.trainingId,
        comments: this.state.comments,
        lastUpdateTimestamp: this.state.lastUpdateTimestamp,
        creationTimestamp: this.state.creationTimestamp,
        courseDetails: {
          courseName: this.state.courseName,
          sector: this.state.sector,
          batchStartDate: this.state.batchStartDate,
          batchEndDate: this.state.batchEndDate
        },
        trainingProcess: {
          industryVisitCompleted: this.state.industryVisitCompleted,
          ojtCompleted: this.state.ojtCompleted
        },
        trainingOutput: {
          trainingStatus: this.state.trainingStatus,
          attendencePercentage: this.state.attendencePercentage,
          assessmentConducted: this.state.assessmentConducted,
          certified: this.state.certified,
          dateOfCoursePassing: this.state.dateOfCoursePassing,
          dateOfIssuanceOfCertificate: this.state.dateOfIssuanceOfCertificate,
          certificateNameOrAward: this.state.certificateNameOrAward,
          grade: this.state.grade
        }
      }
    }

    TrainingDataService.create(data)
      .then(response => {
        this.setState({
          training: {
            traineeId: response.data.traineeId,
            trainingId: response.data.trainingId,
            courseDetails: {
              courseName: response.data.courseName,
              sector: response.data.sector,
              batchStartDate: response.data.batchStartDate,
              batchEndDate: response.data.batchEndDate
            },
            trainingProcess: {
              industryVisitCompleted: response.data.industryVisitCompleted,
              ojtCompleted: response.data.ojtCompleted
            },
            trainingOutput: {
              trainingStatus: response.data.trainingStatus,
              attendencePercentage: response.data.attendencePercentage,
              assessmentConducted: response.data.assessmentConducted,
              certified: response.data.certified,
              dateOfCoursePassing: response.data.dateOfCoursePassing,
              dateOfIssuanceOfCertificate:
                response.data.dateOfIssuanceOfCertificate,
              certificateNameOrAward: response.data.certificateNameOrAward,
              grade: response.data.grade
            },
            comments: response.data.comments,
            lastUpdateTimestamp: response.data.lastUpdateTimestamp,
            creationTimestamp: response.data.creationTimestamp
          },

          submitted: true
        })
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  newTraining() {
    this.setState({
      training: {
        traineeId: null,
        trainingId: null,
        courseDetails: {
          courseName: "",
          sector: "",
          batchStartDate: "",
          batchEndDate: ""
        },
        trainingProcess: {
          industryVisitCompleted: "",
          ojtCompleted: ""
        },
        trainingOutput: {
          trainingStatus: "",
          attendencePercentage: "",
          assessmentConducted: "",
          certified: "",
          dateOfCoursePassing: "",
          dateOfIssuanceOfCertificate: "",
          certificateNameOrAward: "",
          grade: ""
        },
        comments: "",
        lastUpdateTimestamp: "",
        creationTimestamp: ""
      },
      submitted: false
    })
  }

  renderForm = () => {
    return (
      <>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Trainee Id : "}

            <CFormInput
              value={this.state.traineeId}
              onChange={this.onChangeTraineeId}
            />
          </CFormLabel>{" "}
          {/* <CFormLabel htmlFor="exampleFormControlTextarea2">
            {"Training Id : "}

            <CFormInput
              value={this.state.trainingId}
              onChange={this.onChangeTrainingId}
            />
          </CFormLabel>{" "} */}
          <CFormLabel htmlFor="exampleFormControlInput1">
            {"Course Name : "}

            <CFormInput
              //   type="email"
              id="exampleFormControlInput1"
              //   placeholder="name@example.com"
              value={this.state.courseName}
              onChange={this.onChangeCourseName}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Sector : "}

            <CFormInput
              value={this.state.sector}
              onChange={this.onChangeSector}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Batch Start Date : "}

            <CFormInput
              value={this.state.batchStartDate}
              onChange={this.onChangeBatchStartDate}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Batch End Date : "}

            <CFormInput
              value={this.state.batchEndDate}
              onChange={this.onChangeBatchEndDate}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Industry Visit Completed : "}

            <CFormInput
              value={this.state.industryVisitCompleted}
              onChange={this.onChangeIndustryVisitCompleted}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"OJT Completed : "}

            <CFormInput
              value={this.state.ojtCompleted}
              onChange={this.onChangeOjtCompleted}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Training Status : "}

            <CFormInput
              value={this.state.trainingStatus}
              onChange={this.onChangeTrainingStatus}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Attendance Percentage : "}

            <CFormInput
              value={this.state.attendencePercentage}
              onChange={this.onChangeAttendencePercentage}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Assessment Conducted : "}

            <CFormInput
              value={this.state.assessmentConducted}
              onChange={this.onChangeAssessmentConducted}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Certified : "}

            <CFormInput
              value={this.state.certified}
              onChange={this.onChangeCertified}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Date Of Course Passing : "}

            <CFormInput
              value={this.state.dateOfCoursePassing}
              onChange={this.onChangeDateOfCoursePassing}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Date Of Issuance Of Certificate : "}

            <CFormInput
              value={this.state.dateOfIssuanceOfCertificate}
              onChange={this.onChangeDateOfIssuanceOfCertificate}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Certificate Name Or Award : "}

            <CFormInput
              value={this.state.certificateNameOrAward}
              onChange={this.onChangeCertificateNameOrAward}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Grade : "}

            <CFormInput
              value={this.state.grade}
              onChange={this.onChangeGrade}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Comments : "}

            <CFormInput
              value={this.state.comments}
              onChange={this.onChangeComments}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Last Update Timestamp : "}

            <CFormInput
              //value={this.state.lastUpdateTimestamp}
              value="2023-06-29T14:06:07.008+00:00"
              //onChange={this.onChangeLastUpdateTimestamp}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Creation Timestamp : "}

            <CFormInput
              //value={this.state.creationTimestamp}
              value="2023-06-29T14:06:07.008+00:00"
              onChange={this.onChangeCreationTimestamp}
            />
          </CFormLabel>{" "}
          <div>
            <CButton type="submit" onClick={this.saveTraining} className="mb-3">
              Add
            </CButton>
            {"    "}
            <CButton type="submit" onClick={this.newTraining} className="mb-3">
              New
            </CButton>
          </div>
          {/* </div> */}
        </div>
      </>
    )
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <CardHeader className="bg-primary text-white">
                ADD Training Profile
              </CardHeader>
              <CardBody>
                <Row className="mb-4">
                  <Col sm={4}>
                    <CAvatar
                      sx={{ height: "170px", width: "170px" }}
                      src={avatar1}
                      size="xl"
                    />
                  </Col>
                  {this.renderForm()}
                </Row>
                {/* Rest of the profile information */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
