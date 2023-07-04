import React from "react"
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import TrainingDataService from "../../services/training.service"
import { useEffect } from "react"
import { useState } from "react"
import avatar1 from "src/assets/images/avatars/1.jpg"
import CIcon from "@coreui/icons-react"
import { cilLockLocked, cilUser } from "@coreui/icons"
import { Link } from "react-router-dom"
import AddTraining from "./AddTraining"
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
import { useLocation } from "react-router-dom"
const TrainingProfile = () => {
  const [trainings, setTrainings] = useState([])
  const location = useLocation()
  // console.log(props, " props")
  // console.log(location, " UseLocation Hook")
  // console.log(location.state.id, " UseLocation Id")
  const employeeId = location && location.state
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = TrainingDataService.getAll()
      setTrainings((await response).data)
    } catch (error) {
      console.error(error)
    }
  }
  console.log(employeeId)
  const renderNestedFields = (data, level = 1) => {
    return Object.entries(data).map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return (
          <div key={key} style={{ marginLeft: `${level * 16}px` }}>
            <strong>{key}:</strong>
            {renderNestedFields(value, level + 1)}
          </div>
        )
      }
      return (
        <div key={key} style={{ marginLeft: `${level * 16}px` }}>
          <strong>{key}:</strong> {value}
        </div>
      )
    })
  }

  const renderForm = item => {
    return (
      <>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">
            {"Training Id : "}

            <CFormInput
              readOnly
              type="email"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={item.training.trainingId}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Course Name : "}

            <CFormInput
              readOnly
              value={item.training.courseDetails.courseName}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Sector : "}

            <CFormInput readOnly value={item.training.courseDetails.sector} />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Batch Start Date : "}

            <CFormInput
              readOnly
              value={item.training.courseDetails.batchStartDate}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Batch End Date : "}

            <CFormInput
              readOnly
              value={item.training.courseDetails.batchEndDate}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Industry Visit Completed : "}

            <CFormInput
              readOnly
              value={item.training.trainingProcess.industryVisitCompleted}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"OJT Completed : "}

            <CFormInput
              readOnly
              value={item.training.trainingProcess.ojtCompleted}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Training Status : "}

            <CFormInput
              readOnly
              value={item.training.trainingOutput.trainingStatus}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Attendance Percentage : "}

            <CFormInput
              readOnly
              value={item.training.trainingOutput.attendencePercentage}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Assessment Conducted : "}

            <CFormInput
              readOnly
              value={item.training.trainingOutput.assessmentConducted}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Certified : "}

            <CFormInput
              readOnly
              value={item.training.trainingOutput.certified}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Date Of Course Passing : "}

            <CFormInput
              readOnly
              value={item.training.trainingOutput.dateOfCoursePassing}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Date Of Issuance Of Certificate : "}

            <CFormInput
              readOnly
              value={item.training.trainingOutput.dateOfIssuanceOfCertificate}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Certificate Name Or Award : "}

            <CFormInput
              readOnly
              value={item.training.trainingOutput.certificateNameOrAward}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Grade : "}

            <CFormInput readOnly value={item.training.trainingOutput.grade} />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Comments : "}

            <CFormInput readOnly value={item.training.comments} />
          </CFormLabel>
          {/* </div> */}
          <div>
            <CButton type="submit" className="mb-3">
              <Link
                to={"/AddTraining"}
                className="nav-link"
                style={{ color: "white" }}
              >
                AddTraining
              </Link>
            </CButton>
          </div>
        </div>
        <Routes>
          <Route path="/AddTraining" element={<AddTraining />} />
        </Routes>
      </>
    )
  }
  ;<Routes>
    <Route
      path="/AddTraining"
      element={<Navigate to="AddTraining" replace />}
    />
  </Routes>
  const renderForm2 = item => {
    return (
      <>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">
            {"Type of Identification : "}

            <CFormInput
              readOnly
              type="email"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={item.trainee.nameOfTrainee}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"DOB : "}

            <CFormInput readOnly value={item.trainee.dateOfBirth} />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Gender : "}

            <CFormInput readOnly value={item.trainee.gender} />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Marital Status : "}

            <CFormInput readOnly value={item.trainee.maritalStatus} />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Caste Category : "}

            <CFormInput readOnly value={item.trainee.casteCategory} />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Guardian Type : "}

            <CFormInput readOnly value={item.trainee.guardianType} />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Name of Guardian/Spouse/Parent : "}

            <CFormInput readOnly value={item.trainee.nameOfGuardian} />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Family Economic Status : "}

            <CFormInput readOnly value={item.trainee.familyEconomicStatus} />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Source of Household Income : "}

            <CFormInput readOnly value={item.trainee.sourceOfHouseholdIncome} />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Trainee Annual Income : "}

            <CFormInput readOnly value={item.trainee.traineeAnnualIncome} />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Annual Household Income : "}

            <CFormInput readOnly value={item.trainee.annualHouseholdIncome} />
          </CFormLabel>
          <div>
            <CButton type="submit" className="mb-3">
              Student
            </CButton>
            {"   "}
            <CButton type="submit" className="mb-3">
              Training
            </CButton>
            {"   "}
            <CButton type="submit" className="mb-3">
              training Tracking
            </CButton>
          </div>
          {/* </div> */}
        </div>
      </>
    )
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <CardHeader className="bg-primary text-white">
              Training Profile
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
                {trainings &&
                  trainings.map((item, index) => (
                    // <Col sm={8} key={index}>
                    //   {item.trainee.traineeId == 1
                    //     ? renderNestedFields(item.trainee)
                    //     : "traineeId does not exist"}
                    // </Col>

                    <CForm key={index}>
                      {item.training.traineeId ==
                      (employeeId ? employeeId.id : 1)
                        ? renderForm(item)
                        : ""}
                      {/* </CForm> */}
                      {/* </Col> */}
                      {/* <Col sm={4}> */}
                      {/* <CForm> */}
                      {/* {item.trainee.traineeId == 1 ? renderForm2(item) : ""} */}
                    </CForm>
                  ))}
              </Row>
              {/* Rest of the profile information */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default TrainingProfile
