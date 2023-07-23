import React from "react"
import "./dashboard.css"
import jsPDF from "jspdf"
import "jspdf-autotable"
import TraineeDataService from "../../services/trainee.service"
import { Link } from "react-router-dom"
import { CFormInput, CFormLabel } from "@coreui/react"
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
import { CFormCheck } from "@coreui/react"
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
  cilCheck,
  cilXCircle,
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

import { useEffect } from "react"
import { useState } from "react"

const Reports = () => {
  const [trainees, setTrainees] = useState([])
  const [id, setId] = useState([])
  const [tab, setTab] = useState([])
  const [searchNameInput, setNameSearchInput] = useState("")
  const [searchTraineeIdInput, setTraineeIdSearchInput] = useState("")

  const [searchInstitute, setsearchInstitute] = useState("")
  const [searchAnnualIncome, setsearchAnnualIncome] = useState("")
  const [searchAadhar, setsearchAadhar] = useState("")
  const [searchPAN, setsearchPAN] = useState("")
  const [searchMob, setsearchMob] = useState("")
  const [searchEmail, setsearchEmail] = useState("")
  const [editedData, setEditedData] = useState([])
  const [isChecked, setIsChecked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    trainee: {
      //   gender: "",
      //   guardianType: "",
      //   familyEconomicStatus: "",
      //   dateOfBirth: "",
      traineeId: "",
      //   numberOfFamilyMembers: "",
      //   disabilityDetails: {
      //     pwdCertificate: "",
      //     typeOfDisability: ""
      //   },
      nameOfTrainee: "",
      identificationDetails: {
        // pincode: "",
        aadharNumber: "",
        mobileNumber: "",
        // traineeAddress: "",
        // typeOfIdentification: "",
        // district: "",
        // alternateContactNumber: "",
        emailId: "",
        panNumber: ""
        // state: "",
        // voterIdNumber: "",
        // guardianContactNumber: ""
      },
      //   sourceOfHouseholdIncome: "",
      //   nameOfGuardian: "",
      //   annualHouseholdIncome: "",
      nameOfEducationalInstitute: "",
      //   preTrainingDetails: {
      //     preJoiningCounselling: "",
      //     currentEmploymentStatus: ""
      //   },
      traineeAnnualIncome: ""
      //   maritalStatus: "",
      //   casteCategory: ""
    }
  })
  const [filt, setFilt] = useState([])
  //   useEffect(() => {
  //     fetchData()
  //   }, [])

  //   useEffect(() => {
  //     // Initialize editedData state to match the initial data
  //     fetchData()
  //     setEditedData(filteredUsers)
  //   }, [filteredUsers])
  useEffect(() => {
    fetchData()
    let ignore = false

    if (!ignore) applyFilters()
    return () => {
      ignore = true
    }
    // setEditedData(filteredUsers)
    // setFilt(filteredUsers)
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = TraineeDataService.getAll()
      setTrainees((await response).data)
      setLoading(false)
      //   console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  //   Object.values(traineeData)
  const filteredUserss = Object.values(trainees).filter(user => {
    for (const key in filters) {
      if (
        filters.trainee[key] &&
        !user[key]
          .toString()
          .toLowerCase()
          .includes(filters.trainee[key].toLowerCase())
      ) {
        return false
      }
    }

    return true
  })
  const applyFilters = () => {
    const filteredUsers = trainees.filter(
      user =>
        (searchNameInput === "" ||
          user.trainee.nameOfTrainee
            .toString()
            .toLowerCase()
            .includes(searchNameInput.toLowerCase())) &&
        (searchInstitute === "" ||
          user.trainee.nameOfEducationalInstitute === searchInstitute)
    )
    setFilt(filteredUsers)
  }
  //   const filteredUsers = userExample.filter(user =>
  //     user.name.toLowerCase().includes(searchNameInput.toLowerCase())
  //   )
  //   const filteredUsers2 = userExample.filter(user =>
  //     user.registeredUserId.toLowerCase().includes(searchIdInput.toLowerCase())
  //   )
  //   const handleFilterChange = (event, columnName) => {
  //     setFilters({ ...filters, [columnName]: event.target.value })
  //   }

  const handleSearchTraineeIdInput = e => {
    setTraineeIdSearchInput(e.target.value)
  }
  const handleSearchNameInput = e => {
    setNameSearchInput(e.target.value)
  }

  const handlesetsearchInstitute = e => {
    setsearchInstitute(e.target.value)
  }
  const handlesetsearchAnnualIncome = e => {
    setsearchAnnualIncome(e.target.value)
  }

  const handlesetsearchAadhar = e => {
    setsearchAadhar(e.target.value)
  }
  const handlesetsearchPAN = e => {
    setsearchPAN(e.target.value)
  }
  const handlesetsearchMob = e => {
    setsearchMob(e.target.value)
  }
  const handlesetsearchEmail = e => {
    setsearchEmail(e.target.value)
  }
  // const handleCheckboxChange  = e  =>{

  // }
  const filter = () => {
    applyFilters()
    setFilters({
      trainee: {
        // gender: "",
        // guardianType: "",
        // familyEconomicStatus: "",
        // dateOfBirth: "",
        traineeId: searchTraineeIdInput,
        // numberOfFamilyMembers: "",
        // disabilityDetails: {
        //   pwdCertificate: "",
        //   typeOfDisability: ""
        // },
        nameOfTrainee: searchNameInput,
        identificationDetails: {
          //   pincode: "",
          aadharNumber: searchAadhar,
          mobileNumber: searchMob,
          //   traineeAddress: "",
          //   typeOfIdentification: "",
          //   district: "",
          //   alternateContactNumber: "",
          emailId: searchEmail,
          panNumber: searchPAN
          //   state: "",
          //   voterIdNumber: "",
          //   guardianContactNumber: ""
        },
        // sourceOfHouseholdIncome: "",
        // nameOfGuardian: "",
        // annualHouseholdIncome: "",
        nameOfEducationalInstitute: searchInstitute,
        // preTrainingDetails: {
        //   preJoiningCounselling: "",
        //   currentEmploymentStatus: ""
        // },
        traineeAnnualIncome: searchAnnualIncome
        // maritalStatus: "",
        // casteCategory: ""
      }
    })
  }
  const handleCellValueChange = (index, columnName, value) => {
    // Clone the editedData array and update the specific cell value
    // console.log(editedData)
    const updatedData = [...editedData]
    updatedData[index][columnName] = value
    setEditedData(updatedData)
    // filteredUsers[index][columnName] = value
    setFilt(editedData)
  }

  const handleSaveChanges = () => {
    // Handle saving changes to the backend here
    console.log("Updated Data:", filt)
    // handleDownload()
  }

  const handleCheckboxChange = (index, value) => {
    // const updatedItems = [...filt]
    const updatedItems = filt.map(item => {
      if (item.trainee.traineeId === index) {
        return { ...item, check: (value = "true") } // Convert string to boolean
      } else {
        return item
      }
    })
    setFilt(updatedItems)
  }
  const handlePdf = () => {
    // const updatedItems = [...filt]
    const updatedItems = filt.map(item => {
      if (item.check === true) {
        return item // Convert string to boolean
      }
    })
  }
  const handleDownload = () => {
    const doc = new jsPDF()
    const tableData = []

    const dat = filt.filter(user => user.trainee.traineeId !== 0)
    // setFilt(filteredUsers)
    console.log("Filtered Data:", dat)
    dat.forEach((item, index) => {
      const rowData = [
        item.trainee.traineeId,
        item.trainee.nameOfTrainee,
        `Education : ${item.trainee?.technicalEducation ?? ""} Institute : ${
          item.trainee?.nameOfEducationalInstitute ?? ""
        }`,
        `Certificate : ${
          item.trainee.disabilityDetails?.pwdCertificate ?? ""
        } Type : ${item.trainee.disabilityDetails?.typeOfDisability ?? ""}`,
        `Aadhar: ${
          item.trainee.identificationDetails?.aadharNumber ?? ""
        }  PAN: ${item.trainee.identificationDetails?.panNumber ?? ""}VotId:  ${
          item.trainee.identificationDetails?.voterIdNumber ?? ""
        }`,
        `Mob: ${
          item.trainee.identificationDetails?.mobileNumber ?? ""
        } Guardian Contact : ${
          item.trainee.identificationDetails?.guardianContactNumber ?? ""
        } Email : ${item.trainee.identificationDetails?.emailId ?? ""}`,
        item.trainee.dateOfBirth,
        item.trainee.gender,
        item.trainee.traineeAnnualIncome,
        item.trainee.casteCategory
      ]
      tableData.push(rowData)
    })

    doc.autoTable({
      head: [
        [
          "#",
          "Name",
          "Education",
          "Disability Details",
          "Identification Details",
          "Contact Details",
          "Date of Birth",
          "Gender",
          "Income",
          "Caste Category"
        ]
      ],
      body: tableData
    })

    doc.save("Trainees.pdf")
  }

  //   const handleCheckboxChange = (index, value) => {
  //     // Handle saving changes to the backend here
  //     const updatedData = [...filt]
  //     updatedData[index].check = value

  //     setFilt(updatedData)
  //     console.log("Updated Data:", filt)
  //   }

  //   setTab(userExample)
  return (
    <>
      <div className="col-md-8">
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by Name :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by Name"
            value={searchNameInput}
            onChange={handleSearchNameInput}
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by TraineeID :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by TraineeID"
            value={searchTraineeIdInput}
            onChange={handleSearchTraineeIdInput} // Fixed the onChange event here
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by Institute :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by Institute"
            value={searchInstitute}
            onChange={handlesetsearchInstitute} // Fixed the onChange event here
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by Annual Income :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by Annual Income"
            value={searchAnnualIncome}
            onChange={handlesetsearchAnnualIncome} // Fixed the onChange event here
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by AADHAR :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by AADHAR"
            value={searchAadhar}
            onChange={handlesetsearchAadhar} // Fixed the onChange event here
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by PAN :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by PAN"
            value={searchPAN}
            onChange={handlesetsearchPAN} // Fixed the onChange event here
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by Mob :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by PAN"
            value={searchMob}
            onChange={handlesetsearchMob} // Fixed the onChange event here
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by EMAIL :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by EMAIL"
            value={searchEmail}
            onChange={handlesetsearchEmail} // Fixed the onChange event here
          ></CFormInput>
        </div>
      </div>
      {/* {applyFilters()} */}
      <div className="input-group-append">
        <CButton
          className="btn btn-outline-secondary"
          type="button"
          onClick={filter}
        >
          Apply Filter
        </CButton>
      </div>
      {console.log(filt)}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Reports {" & "} Details</CCardHeader>
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
                        {/* <CIcon icon={cilPeople} /> */}
                      </CTableHeaderCell>
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
                      {/* <CTableHeaderCell>View</CTableHeaderCell> */}
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {filt &&
                      filt.map(
                        (item, index) =>
                          item.trainee.traineeId != 0 && (
                            <CTableRow v-for="item in tableItems" key={index}>
                              <CTableDataCell className="text-center">
                                <CFormCheck
                                  id={index}
                                  label=""
                                  type="radio"
                                  value={item.check}
                                  checked={item.check}
                                  onChange={e =>
                                    handleCheckboxChange(
                                      item.trainee.traineeId,
                                      e.target.value
                                    )
                                  }
                                />
                              </CTableDataCell>
                              <CTableDataCell className="text-center">
                                <CAvatar
                                  size="md"
                                  src={`https://storage.googleapis.com/sams-bulk-upload-start/${item.trainee.traineeId}_post.jpeg`}
                                  // src={
                                  //   item.trainee.traineeId % 10 == 1
                                  //     ? avatar1
                                  //     : item.trainee.traineeId % 10 == 2
                                  //     ? avatar2
                                  //     : item.trainee.traineeId % 10 == 3
                                  //     ? avatar3
                                  //     : item.trainee.traineeId % 10 == 4
                                  //     ? avatar4
                                  //     : item.trainee.traineeId % 10 == 5
                                  //     ? avatar5
                                  //     : item.trainee.traineeId % 10 == 6
                                  //     ? avatar6
                                  //     : item.trainee.traineeId % 10 == 7
                                  //     ? avatar7
                                  //     : item.trainee.traineeId % 10 == 8
                                  //     ? avatar8
                                  //     : avatar9
                                  // }
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
                                  {item.trainee.identificationDetails?.state ??
                                    ""}
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
                              {/* <CTableDataCell
                            style={{ width: "10%" }}
                            className="text-center"
                          > */}
                              {/* <Link
                              to="/StudentProfile"
                              state={{ id: item.trainee.traineeId }}
                              className="nav-link"
                            >
                              <CIcon icon={cilNotes} />
                            </Link> */}

                              {/* <StudentProfile employeeId={1}>
                              {" "}
                              <CIcon icon={cilPencil} />
                            </StudentProfile> */}
                              {/* </CTableDataCell> */}

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
      <CButton
        className="btn btn-primary"
        type="button"
        onClick={handleDownload}
      >
        Generate PDF
      </CButton>
    </>
  )
}

export default Reports
