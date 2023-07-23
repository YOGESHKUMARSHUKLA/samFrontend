import React from "react"
import "./dashboard.css"
import TraineeDataService from "../../services/trainee.service"

import { Link } from "react-router-dom"
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
import { Navigate, Route, Routes, useRouteMatch } from "react-router-dom"
import { cilPencil } from "@coreui/icons"
import { CChartLine } from "@coreui/react-chartjs"
import { getStyle, hexToRgba } from "@coreui/utils"
import CIcon from "@coreui/icons-react"
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilNotes,
  cilPeople,
  cilUser,
  cilUserFemale
} from "@coreui/icons"

import avatar1 from "src/assets/images/avatars/1.jpg"
import avatar2 from "src/assets/images/avatars/2.jpg"
import avatar3 from "src/assets/images/avatars/3.jpg"
import avatar4 from "src/assets/images/avatars/4.jpg"
import avatar5 from "src/assets/images/avatars/5.jpg"
import avatar6 from "src/assets/images/avatars/6.jpg"
import avatar7 from "src/assets/images/avatars/7.jpg"
import avatar8 from "src/assets/images/avatars/8.jpg"
import avatar9 from "src/assets/images/avatars/9.jpg"
import PropTypes from "prop-types"
import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
const Trainee = ({ emailId, role, entitlement, password, traineeId }) => {
  const [trainees, setTrainees] = useState([])
  const [id, setId] = useState([])
  // const location = useLocation()
  // const emailId = location.state?.emailId
  // const role = location.state?.role
  // const entitlement = location.state?.entitlement
  // const password = location.state?.password;
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
  // const sortM = itm => {
  //   console.log(itm)
  //   const data = JSON.parse(itm)
  //   const sortedData = data.sort(
  //     (a, b) => a.trainee.traineeId - b.trainee.traineeId
  //   )

  //   console.log(sortedData)
  //   return sortedData
  // }

  const filteredUsers = trainees.filter(user =>
    user.trainee.traineeId
      .toString()
      .toLowerCase()
      .includes(localStorage.getItem("traineeId"))
  )

  if (role === "Student") {
    return (
      <>
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value=""
              onChange="{this.onChangeSearchTitle}"
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                //   onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <CRow>
          <CCol xs>
            <CCard className="mb-4">
              <CCardHeader>Student {" & "} Details</CCardHeader>
              <CCardBody>
                <br />

                <div className="tableContainer">
                  <CTable
                    responsive="xxl"
                    striped
                    align="middle"
                    className="mb-0 border"
                    hover
                  >
                    <CTableHead color="light">
                      <CTableRow>
                        <CTableHeaderCell className="text-center">
                          <CIcon icon={cilPeople} />
                        </CTableHeaderCell>
                        <CTableHeaderCell>TraineeId</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">
                          Personal Details
                        </CTableHeaderCell>
                        <CTableHeaderCell>Technical Details</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">
                          Economical Details
                        </CTableHeaderCell>
                        <CTableHeaderCell>
                          Identification Details
                        </CTableHeaderCell>
                        <CTableHeaderCell>Contact Address</CTableHeaderCell>
                        <CTableHeaderCell>Contact Details</CTableHeaderCell>
                        <CTableHeaderCell>View</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {console.log(filteredUsers)}
                      {filteredUsers &&
                        filteredUsers.map(
                          (item, index) =>
                            item.trainee.traineeId !== 0 && (
                              <CTableRow v-for="item in tableItems" key={index}>
                                {localStorage.setItem(
                                  "tranId",
                                  item.trainee.traineeId
                                )}
                                <CTableDataCell className="text-center">
                                  <CAvatar
                                    size="md"
                                    src={
                                      item.trainee.traineeId % 10 == 1
                                        ? avatar1
                                        : item.trainee.traineeId % 10 == 2
                                        ? avatar2
                                        : item.trainee.traineeId % 10 == 3
                                        ? avatar3
                                        : item.trainee.traineeId % 10 == 4
                                        ? avatar4
                                        : item.trainee.traineeId % 10 == 5
                                        ? avatar5
                                        : item.trainee.traineeId % 10 == 6
                                        ? avatar6
                                        : item.trainee.traineeId % 10 == 7
                                        ? avatar7
                                        : item.trainee.traineeId % 10 == 8
                                        ? avatar8
                                        : avatar9
                                    }
                                    // src={`src/assets/images/avatars/${item.trainee.traineeId}.jpg`}
                                    status="success"
                                  />
                                </CTableDataCell>
                                <CTableDataCell>
                                  <strong>{item.trainee.traineeId}</strong>
                                </CTableDataCell>
                                <CTableDataCell style={{ width: "15%" }}>
                                  <strong>
                                    {" "}
                                    {item.trainee.salutation}{" "}
                                    {item.trainee.nameOfTrainee}
                                  </strong>
                                  <div className="small text-medium-emphasis text-nowrap">
                                    <div className="small text-medium-emphasis text-nowrap">
                                      <div>
                                        {"DOB: "}
                                        {item.trainee.dateOfBirth}
                                      </div>
                                    </div>
                                    <div className="text-nowrap">
                                      {item.trainee.gender}
                                      {" - "} {item.trainee.guardianType}
                                      {item.trainee.nameOfGuardian}
                                    </div>
                                    <div className="text-nowrap">
                                      {item.trainee.maritalStatus}
                                      {" - "} {item.trainee.casteCategory}
                                    </div>
                                    <div>
                                      {" Persuing Education : "}{" "}
                                      {item.trainee.currentlyPursuingEducation}
                                    </div>
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell
                                  style={{ width: "15%" }}
                                  className="text-center"
                                >
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {"Technical Education : "}

                                    {item.trainee.technicalEducation}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" Highest Education : "}
                                    {item.trainee.highestEducationLevel}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" Institute : "}
                                    {item.trainee.nameOfEducationalInstitute}
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell style={{ width: "10%" }}>
                                  <div className="text-nowrap">
                                    {" Economic Status : "}
                                    {item.trainee.familyEconomicStatus}
                                  </div>
                                  <div className="text-nowrap small text-medium-emphasis">
                                    {" Annual Income : "}
                                    {item.trainee.traineeAnnualIncome}
                                  </div>
                                  <div className="text-nowrap small text-medium-emphasis">
                                    {"  HouseHold Income : "}
                                    {item.trainee.annualHouseholdIncome}
                                  </div>
                                  <div className="small text-medium-emphasis">
                                    {" Source Of  Income : "}
                                    {item.trainee.sourceOfHouseholdIncome}
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell
                                  style={{ width: "10%" }}
                                  className="text-center"
                                >
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" ID TYPE : "}

                                    {item.trainee.identificationDetails
                                      ?.typeOfIdentification ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" AADHAR : "}
                                    {item.trainee.identificationDetails
                                      ?.aadharNumber ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" PAN : "}
                                    {item.trainee.identificationDetails
                                      ?.panNumber ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" Voter ID : "}
                                    {item.trainee.identificationDetails
                                      ?.voterIdNumber ?? ""}
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" Address : "}
                                    {item.trainee.identificationDetails
                                      ?.traineeAddress ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {item.trainee.identificationDetails
                                      ?.district ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {item.trainee.identificationDetails
                                      ?.state ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {item.trainee.identificationDetails
                                      ?.pincode ?? ""}
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell
                                  style={{ width: "10%" }}
                                  className="text-center"
                                >
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" MOB : "}
                                    {item.trainee.identificationDetails
                                      ?.mobileNumber ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" ALT MOB : "}
                                    {item.trainee.identificationDetails
                                      ?.alternateContactNumber ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" EMAIL : "}
                                    {item.trainee.identificationDetails
                                      ?.emailId ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" GUARDIAN MOB : "}
                                    {item.trainee.identificationDetails
                                      ?.guardianContactNumber ?? ""}
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell
                                  style={{ width: "10%" }}
                                  className="text-center"
                                >
                                  <Link
                                    to="/StudentProfile"
                                    state={{ id: item.trainee.traineeId }}
                                    className="nav-link"
                                  >
                                    <CIcon icon={cilNotes} />
                                  </Link>

                                  {/* <StudentProfile employeeId={1}>
                              {" "}
                              <CIcon icon={cilPencil} />
                            </StudentProfile> */}
                                </CTableDataCell>

                                <CTableDataCell></CTableDataCell>
                              </CTableRow>
                            )
                        )}
                    </CTableBody>
                  </CTable>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }

  if (role === "Admin") {
    return (
      <>
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value=""
              onChange="{this.onChangeSearchTitle}"
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                //   onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <CRow>
          <CCol xs>
            <CCard className="mb-4">
              <CCardHeader>Student {" & "} Details</CCardHeader>
              <CCardBody>
                <br />

                <div className="tableContainer">
                  <CTable
                    responsive="xxl"
                    striped
                    align="middle"
                    className="mb-0 border"
                    hover
                  >
                    <CTableHead color="light">
                      <CTableRow>
                        <CTableHeaderCell className="text-center">
                          <CIcon icon={cilPeople} />
                        </CTableHeaderCell>
                        <CTableHeaderCell>TraineeId</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">
                          Personal Details
                        </CTableHeaderCell>
                        <CTableHeaderCell>Technical Details</CTableHeaderCell>
                        <CTableHeaderCell className="text-center">
                          Economical Details
                        </CTableHeaderCell>
                        <CTableHeaderCell>
                          Identification Details
                        </CTableHeaderCell>
                        <CTableHeaderCell>Contact Address</CTableHeaderCell>
                        <CTableHeaderCell>Contact Details</CTableHeaderCell>
                        <CTableHeaderCell>View</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {console.log(trainees)}
                      {trainees &&
                        trainees.map(
                          (item, index) =>
                            item.trainee.traineeId !== 0 && (
                              <CTableRow v-for="item in tableItems" key={index}>
                                <CTableDataCell className="text-center">
                                  <CAvatar
                                    size="md"
                                    src={
                                      item.trainee.traineeId % 10 == 1
                                        ? avatar1
                                        : item.trainee.traineeId % 10 == 2
                                        ? avatar2
                                        : item.trainee.traineeId % 10 == 3
                                        ? avatar3
                                        : item.trainee.traineeId % 10 == 4
                                        ? avatar4
                                        : item.trainee.traineeId % 10 == 5
                                        ? avatar5
                                        : item.trainee.traineeId % 10 == 6
                                        ? avatar6
                                        : item.trainee.traineeId % 10 == 7
                                        ? avatar7
                                        : item.trainee.traineeId % 10 == 8
                                        ? avatar8
                                        : avatar9
                                    }
                                    // src={`src/assets/images/avatars/${item.trainee.traineeId}.jpg`}
                                    status="success"
                                  />
                                </CTableDataCell>
                                <CTableDataCell>
                                  <strong>{item.trainee.traineeId}</strong>
                                </CTableDataCell>
                                <CTableDataCell style={{ width: "15%" }}>
                                  <strong>
                                    {" "}
                                    {item.trainee.salutation}{" "}
                                    {item.trainee.nameOfTrainee}
                                  </strong>
                                  <div className="small text-medium-emphasis text-nowrap">
                                    <div className="small text-medium-emphasis text-nowrap">
                                      <div>
                                        {"DOB: "}
                                        {item.trainee.dateOfBirth}
                                      </div>
                                    </div>
                                    <div className="text-nowrap">
                                      {item.trainee.gender}
                                      {" - "} {item.trainee.guardianType}
                                      {item.trainee.nameOfGuardian}
                                    </div>
                                    <div className="text-nowrap">
                                      {item.trainee.maritalStatus}
                                      {" - "} {item.trainee.casteCategory}
                                    </div>
                                    <div>
                                      {" Persuing Education : "}{" "}
                                      {item.trainee.currentlyPursuingEducation}
                                    </div>
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell
                                  style={{ width: "15%" }}
                                  className="text-center"
                                >
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {"Technical Education : "}

                                    {item.trainee.technicalEducation}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" Highest Education : "}
                                    {item.trainee.highestEducationLevel}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" Institute : "}
                                    {item.trainee.nameOfEducationalInstitute}
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell style={{ width: "10%" }}>
                                  <div className="text-nowrap">
                                    {" Economic Status : "}
                                    {item.trainee.familyEconomicStatus}
                                  </div>
                                  <div className="text-nowrap small text-medium-emphasis">
                                    {" Annual Income : "}
                                    {item.trainee.traineeAnnualIncome}
                                  </div>
                                  <div className="text-nowrap small text-medium-emphasis">
                                    {"  HouseHold Income : "}
                                    {item.trainee.annualHouseholdIncome}
                                  </div>
                                  <div className="small text-medium-emphasis">
                                    {" Source Of  Income : "}
                                    {item.trainee.sourceOfHouseholdIncome}
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell
                                  style={{ width: "10%" }}
                                  className="text-center"
                                >
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" ID TYPE : "}

                                    {item.trainee.identificationDetails
                                      ?.typeOfIdentification ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" AADHAR : "}
                                    {item.trainee.identificationDetails
                                      ?.aadharNumber ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" PAN : "}
                                    {item.trainee.identificationDetails
                                      ?.panNumber ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" Voter ID : "}
                                    {item.trainee.identificationDetails
                                      ?.voterIdNumber ?? ""}
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" Address : "}
                                    {item.trainee.identificationDetails
                                      ?.traineeAddress ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {item.trainee.identificationDetails
                                      ?.district ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {item.trainee.identificationDetails
                                      ?.state ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {item.trainee.identificationDetails
                                      ?.pincode ?? ""}
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell
                                  style={{ width: "10%" }}
                                  className="text-center"
                                >
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" MOB : "}
                                    {item.trainee.identificationDetails
                                      ?.mobileNumber ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" ALT MOB : "}
                                    {item.trainee.identificationDetails
                                      ?.alternateContactNumber ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" EMAIL : "}
                                    {item.trainee.identificationDetails
                                      ?.emailId ?? ""}
                                  </div>
                                  <div className="small text-nowrap text-medium-emphasis">
                                    {" GUARDIAN MOB : "}
                                    {item.trainee.identificationDetails
                                      ?.guardianContactNumber ?? ""}
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell
                                  style={{ width: "10%" }}
                                  className="text-center"
                                >
                                  <Link
                                    to="/StudentProfile"
                                    state={{ id: item.trainee.traineeId }}
                                    className="nav-link"
                                  >
                                    <CIcon icon={cilNotes} />
                                  </Link>

                                  {/* <StudentProfile employeeId={1}>
                              {" "}
                              <CIcon icon={cilPencil} />
                            </StudentProfile> */}
                                </CTableDataCell>

                                <CTableDataCell></CTableDataCell>
                              </CTableRow>
                            )
                        )}
                    </CTableBody>
                  </CTable>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
}
Trainee.propTypes = {
  emailId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  entitlement: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  traineeId: PropTypes.string.isRequired
}
export default Trainee
