import React from "react"
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import TraineeDataService from "../../services/trainee.service"
import { useEffect } from "react"
import { useState } from "react"
import avatar1 from "src/assets/images/avatars/1.jpg"
import avatar2 from "src/assets/images/avatars/2.jpg"
import avatar3 from "src/assets/images/avatars/3.jpg"
import avatar4 from "src/assets/images/avatars/4.jpg"
import avatar5 from "src/assets/images/avatars/5.jpg"
import avatar6 from "src/assets/images/avatars/6.jpg"
import avatar7 from "src/assets/images/avatars/7.jpg"
import avatar8 from "src/assets/images/avatars/8.jpg"
import avatar9 from "src/assets/images/avatars/9.jpg"
import CIcon from "@coreui/icons-react"
import { cilLockLocked, cilUser } from "@coreui/icons"
import { Link } from "react-router-dom"
import Placement from "./Placement"
import Training from "./Training"
import { Navigate, Route, Routes, useRouteMatch } from "react-router-dom"
import { CImage } from "@coreui/react"
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
import { useParams } from "react-router-dom"
const StudentProfile = props => {
  // const match = useRouteMatch("/StudentProfile/:employeeId")
  // const employeeId = match && match.params
  // const { state } = useLocation()
  // const { id } = this.state.id
  // const { employeeId } = useParams()
  // const { state } = useLocation()
  // const employeeId = state && state.employeeId

  // const params = new URLSearchParams(window.location.search)
  // console.log(params.has("id") ? params.get("id") : "")
  const location = useLocation()
  // console.log(props, " props")
  // console.log(location, " UseLocation Hook")
  // console.log(location.state.id, " UseLocation Id")
  const employeeId = location && location.state
  // const [employeeId, setEmployeeId] = useState([location && location.state])

  const [trainees, setTrainees] = useState([])

  const searchTitle = () => {
    this.setEmployeeId({
      employeeId: null,
      currentIndex: -1
    })
  }

  console.log(employeeId)
  // console.log(params.get("id"))
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = TraineeDataService.getAll()
      setTrainees((await response).data)
    } catch (error) {
      console.error(error)
    }
  }

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
    // localStorage.setItem("tranId", employeeId.id)

    return (
      <>
        <div className="mb-3">
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Guardian Type : "}

            <CFormInput readOnly value={item.trainee.guardianType} />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Name of Guardian : "}

            <CFormInput readOnly value={item.trainee.nameOfGuardian} />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Family Economic Status : "}

            <CFormInput readOnly value={item.trainee.familyEconomicStatus} />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Source of Household Income: "}

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
              <Link
                to={"/Placement"}
                className="nav-link"
                style={{ color: "white" }}
                state={{ id: employeeId.id }}
              >
                Placement
              </Link>
            </CButton>
            {"   "}
            <CButton type="submit" className="mb-3">
              <Link
                to={"/Training"}
                className="nav-link"
                style={{ color: "white" }}
                state={{ id: employeeId.id }}
              >
                Training
              </Link>
            </CButton>
          </div>
          {/* </div> */}
        </div>
        <Routes>
          <Route path="/Placement" element={<Placement />} />
          <Route path="/Training" element={<Training />} />
        </Routes>
      </>
    )
  }
  const renderForm2 = item => {
    return (
      <>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">
            {"Name : "}

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
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Highest Education Level : "}

            <CFormInput readOnly value={item.trainee.highestEducationLevel} />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Currently Pursuing Education : "}

            <CFormInput
              readOnly
              value={item.trainee.currentlyPursuingEducation}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Name Of Educational Institute : "}

            <CFormInput
              readOnly
              value={item.trainee.nameOfEducationalInstitute}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Technical Education  : "}

            <CFormInput readOnly value={item.trainee.technicalEducation} />
          </CFormLabel>{" "}
          {/* <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Highest Education Level : "}

            <CFormInput readOnly value={item.trainee.highestEducationLevel} />
          </CFormLabel>{" "} */}
          {/* </div> */}
        </div>
      </>
    )
  }

  const renderForm3 = item => {
    return (
      <>
        <div className="mb-3">
          <CRow className="mb-3">
            <CFormLabel htmlFor="exampleFormControlInput1">
              {"Identification Type : "}
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput
                readOnly
                type="email"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={item.trainee.identificationDetails.typeOfIdentification}
              />
            </CCol>
          </CRow>{" "}
          <CRow className="mb-3">
            {/* <div className="mb-3 sm col-xs-offset-2"> */}
            <CFormLabel htmlFor="exampleFormControlTextarea1">
              {"Aadhar No : "}
            </CFormLabel>
            <CCol sm={10}>
              <CFormInput
                readOnly
                value={item.trainee.identificationDetails.aadharNumber}
              />
            </CCol>
          </CRow>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"PAN : "}

            <CFormInput
              readOnly
              value={item.trainee.identificationDetails.panNumber}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Voter Id : "}

            <CFormInput
              readOnly
              value={item.trainee.identificationDetails.voterIdNumber}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Trainee Mob : "}

            <CFormInput
              readOnly
              value={item.trainee.identificationDetails.mobileNumber}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Trainee Alt Mob : "}

            <CFormInput
              readOnly
              value={item.trainee.identificationDetails.alternateContactNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Guardian Contact : "}

            <CFormInput
              readOnly
              value={item.trainee.identificationDetails.guardianContactNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Trainee Email : "}

            <CFormInput
              readOnly
              value={item.trainee.identificationDetails.emailId}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"District -- State -- PIN : "}

            <CFormInput
              readOnly
              value={`${item.trainee.identificationDetails.district} -- ${item.trainee.identificationDetails.state} -- ${item.trainee.identificationDetails.pincode}`}
            />
          </CFormLabel>{" "}
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
              Student Profile
            </CardHeader>
            {/* <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title"
                value={searchTitle}
                onChange={this.onChangeSearchTitle()}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.searchTitle()}
                >
                  Search
                </button>
              </div>
            </div> */}
            <CardBody>
              <Row className="mb-4">
                <Col sm={4}>
                  {/* <CAvatar
                    sx={{ height: "200px", width: "200px" }}
                    src={avatar1}
                    size="xl"
                  /> */}
                  <div className="clearfix">
                    <CImage
                      align="center"
                      rounded
                      src={
                        (employeeId != null ? employeeId.id : 1) % 10 == 1
                          ? avatar1
                          : (employeeId != null ? employeeId.id : 1) % 10 == 2
                          ? avatar2
                          : (employeeId != null ? employeeId.id : 1) % 10 == 3
                          ? avatar3
                          : (employeeId != null ? employeeId.id : 1) % 10 == 4
                          ? avatar4
                          : (employeeId != null ? employeeId.id : 1) % 10 == 5
                          ? avatar5
                          : (employeeId != null ? employeeId.id : 1) % 10 == 6
                          ? avatar6
                          : (employeeId != null ? employeeId.id : 1) % 10 == 7
                          ? avatar7
                          : (employeeId != null ? employeeId.id : 1) % 10 == 8
                          ? avatar8
                          : avatar9
                      }
                      width={200}
                      height={200}
                    />
                  </div>

                  {trainees &&
                    trainees.map((item, index) => (
                      // <Col sm={8} key={index}>
                      //   {item.trainee.traineeId == 1
                      //     ? renderNestedFields(item.trainee)
                      //     : "traineeId does not exist"}
                      // </Col>

                      <CForm key={index}>
                        {item.trainee.traineeId ==
                        (employeeId != null ? employeeId.id : 1)
                          ? renderForm(item)
                          : ""}
                        {/* </CForm> */}
                        {/* </Col> */}
                        {/* <Col sm={4}> */}
                        {/* <CForm> */}
                        {/* {item.trainee.traineeId == 1 ? renderForm2(item) : ""} */}
                      </CForm>
                    ))}
                </Col>
                <Col sm={4}>
                  {trainees &&
                    trainees.map((item, index) => (
                      <CForm key={index}>
                        {item.trainee.traineeId ==
                        (employeeId != null ? employeeId.id : 1)
                          ? renderForm2(item)
                          : ""}
                      </CForm>
                    ))}
                </Col>
                <Col sm={4}>
                  {trainees &&
                    trainees.map((item, index) => (
                      <CForm key={index}>
                        {item.trainee.traineeId ==
                        (employeeId != null ? employeeId.id : 1)
                          ? renderForm3(item)
                          : ""}
                      </CForm>
                    ))}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default StudentProfile
