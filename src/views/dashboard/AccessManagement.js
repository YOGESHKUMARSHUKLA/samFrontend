import React from "react"
import "./dashboard.css"
import EntitlementDataService from "../../services/entitlement.service"
import { Link } from "react-router-dom"
import { CFormInput, CFormLabel, CFormSelect } from "@coreui/react"
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem
} from "@coreui/react"
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
import { getStyle, hexToRgba } from "@coreui/utils"
import { CAlert } from "@coreui/react"
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

const Access = () => {
  const [trainees, setTrainees] = useState([])
  const [id, setId] = useState([])
  const [tab, setTab] = useState([])
  const [searchNameInput, setNameSearchInput] = useState("")
  const [searchTraineeIdInput, setTraineeIdSearchInput] = useState("")

  const [searchaccess, setaccess] = useState("")
  const [searchregisteredUserId, setregisteredUserId] = useState("")
  const [searchlinkParameter, setSearchlinkParameter] = useState("")
  const [searchlinkValue, setsearchlinkValue] = useState("")
  const [searchstatus, setSearchstatus] = useState("")
  const [searchexistingUser, setsearchexistingUser] = useState("")
  const [searchentitlement, setsearchentitlement] = useState("")
  const [editedData, setEditedData] = useState([])
  const [success, setSuccess] = useState(false)
  const [traineeId, settraineeId] = useState([])
  const [userId, setuserId] = useState([])
  const [userRole, setuserRole] = useState([])
  const [entitlement, setentitlement] = useState([])
  const [linkParameter, setlinkParameter] = useState([])
  const [linkValue, setlinkValue] = useState([])
  const [status, setstatus] = useState([])

  const [filters, setFilters] = useState({
    traineeId: "",
    userId: "",
    linkParameter: "",
    linkValue: "",
    status: "",
    existingUserInd: "",
    userRole: "",
    entitlement: ""
  })
  const [filt, setFilt] = useState([])
  //   useEffect(() => {
  //     fetchData()
  //   }, [])

  const userExample = [
    {
      name: "Yogesh Shukla",
      traineeId: 1,
      registeredUserId: "yogeshshukla2009@gmail.com",
      linkParameter: "mobile",
      linkValue: "8534060083",
      status: true,
      existingUser: true,
      access: "Admin"
    },
    {
      name: "Sunny Shukla",
      traineeId: 2,
      registeredUserId: "yogeshshukla2009@gmail.com",
      linkParameter: "mobile",
      linkValue: "8534060083",
      status: true,
      existingUser: true,
      access: "Student"
    },
    {
      name: "Harshit Bohra",
      traineeId: 3,
      registeredUserId: "yogeshshukla2009@gmail.com",
      linkParameter: "mobile",
      linkValue: "8534060083",
      status: false,
      existingUser: true,
      access: "Trainer"
    },
    {
      name: "Harsh Mahawal",
      traineeId: 4,
      registeredUserId: "yogeshshukla200@gmail.com",
      linkParameter: "Aadhar Card",
      linkValue: "7655 5248 6332",
      status: false,
      existingUser: false,
      access: "Admin"
    }
  ]
  var filteredUsers = trainees.filter(user => {
    for (const key in filters) {
      if (
        filters[key] &&
        !user.entitlement[key]
          .toString()
          .toLowerCase()
          .includes(filters[key].toLowerCase())
      ) {
        return false
      }
    }
    return true
  })

  //   useEffect(() => {
  //     // Initialize editedData state to match the initial data
  //     fetchData()
  //     setEditedData(filteredUsers)
  //   }, [filteredUsers])
  useEffect(() => {
    fetchData()
    setFilt(filteredUsers)
  }, [])

  const fetchData = async () => {
    try {
      setEditedData(filteredUsers)
      const response = EntitlementDataService.getAll()
      setTrainees((await response).data)
    } catch (error) {
      console.error(error)
    }
  }

  //   const filteredUsers = userExample.filter(user =>
  //     user.name.toLowerCase().includes(searchNameInput.toLowerCase())
  //   )
  //   const filteredUsers2 = userExample.filter(user =>
  //     user.registeredUserId.toLowerCase().includes(searchIdInput.toLowerCase())
  //   )
  const handleFilterChange = (event, columnName) => {
    setFilters({ ...filters, [columnName]: event.target.value })
  }

  const handleSearchTraineeIdInput = e => {
    setTraineeIdSearchInput(e.target.value)
  }
  const handleSearchNameInput = e => {
    setNameSearchInput(e.target.value)
  }

  const handleSearchregisteredUserId = e => {
    setregisteredUserId(e.target.value)
  }
  const handleSearchlinkParameter = e => {
    setSearchlinkParameter(e.target.value)
  }

  const handleSearchaccess = e => {
    setaccess(e.target.value)
  }
  const handleSearchlinkValue = e => {
    setsearchlinkValue(e.target.value)
  }
  const handleSearchstatus = e => {
    setSearchstatus(e.target.value)
  }
  const handleSearchexistingUser = e => {
    setsearchexistingUser(e.target.value)
  }
  const handleSearchentitlement = e => {
    setsearchentitlement(e.target.value)
  }
  const filter = () => {
    setFilters({
      traineeId: searchTraineeIdInput,
      userId: searchregisteredUserId,
      linkParameter: searchlinkParameter,
      linkValue: searchlinkValue,
      status: searchstatus,
      existingUserInd: searchexistingUser,
      userRole: searchaccess,
      entitlement: searchentitlement
    })
    // console.log(filteredUsers)
  }
  const renderSuccess = () => {
    if (success) {
      return <CAlert color="success">Changes Saved Successfully.</CAlert>
    }
    return null
  }
  const saveTrainee = () => {
    var data = [...editedData]

    EntitlementDataService.update(data).then(response => {
      setSuccess(true)
    })
    // this.setState({
    //   trainee: {
    //     technicalEducation: response.data.trainee.technicalEducation,
    //     gender: response.data.trainee.gender,
    //     guardianType: response.data.trainee.guardianType,
    //     familyEconomicStatus: response.data.trainee.familyEconomicStatus,
    //     dateOfBirth: response.data.trainee.dateOfBirth,
    //     traineeId: response.data.trainee.traineeId,
    //     numberOfFamilyMembers:
    //       response.data.trainee.nameOfEducationalInstitute,
    //     disabilityDetails: {
    //       pwdCertificate: response.data.trainee.pwdCertificate,
    //       typeOfDisability: response.data.trainee.typeOfDisability
    //     },
    //     nameOfTrainee: response.data.trainee.nameOfTrainee,
    //     identificationDetails: {
    //       pincode: response.data.trainee.pincode,
    //       aadharNumber: response.data.trainee.aadharNumber,
    //       mobileNumber: response.data.trainee.mobileNumber,
    //       traineeAddress: response.data.trainee.traineeAddress,
    //       typeOfIdentification: response.data.trainee.typeOfIdentification,
    //       district: response.data.trainee.district,
    //       alternateContactNumber:
    //         response.data.trainee.alternateContactNumber,
    //       emailId: response.data.trainee.emailId,
    //       panNumber: response.data.trainee.panNumber,
    //       state: response.data.trainee.state,
    //       voterIdNumber: response.data.trainee.voterIdNumber,
    //       guardianContactNumber: response.data.trainee.guardianContactNumber
    //     },
    //     sourceOfHouseholdIncome:
    //       response.data.trainee.sourceOfHouseholdIncome,
    //     nameOfGuardian: response.data.trainee.nameOfGuardian,
    //     annualHouseholdIncome: response.data.trainee.annualHouseholdIncome,
    //     nameOfEducationalInstitute:
    //       response.data.trainee.nameOfEducationalInstitute,
    //     preTrainingDetails: {
    //       preJoiningCounselling:
    //         response.data.trainee.preJoiningCounselling,
    //       preTrainingEmploymentStatus:
    //         response.data.trainee.preTrainingDetails,
    //       currentEmploymentStatus:
    //         response.data.trainee.currentEmploymentStatus,
    //       mobilisationTechnique: response.data.trainee.mobilisationTechnique
    //     },
    //     salutation: response.data.trainee.salutation,
    //     traineeAnnualIncome: response.data.trainee.traineeAnnualIncome,
    //     highestEducationLevel: response.data.trainee.highestEducationLevel,
    //     maritalStatus: response.data.trainee.maritalStatus,
    //     casteCategory: response.data.trainee.casteCategory,
    //     currentlyPursuingEducation:
    //       response.data.trainee.currentlyPursuingEducation
    //   },
    //   submitted: true
    // })
    //     console.log(response.data)
    //   })
    //   .catch(e => {
    //     console.log(e)
    //   })
  }
  const handleCellValueChange = (index, col2, columnName, value) => {
    // Clone the editedData array and update the specific cell value
    // console.log(editedData)
    const updatedData = [...editedData]
    // for (var i = 0; i < updatedData.length; i++) {
    //     if (updatedData[i].Id === id) {
    //         updatedData[i].col2.columnName = value;
    //       return;
    //     }
    //   }

    if (columnName === "traineeId") {
      filteredUsers[index].entitlement.traineeId = value
    }
    if (columnName === "userId") {
      filteredUsers[index].entitlement.userId = value
    }
    if (columnName === "userRole") {
      filteredUsers[index].entitlement.userRole = value
    }
    if (columnName === "entitlement") {
      filteredUsers[index].entitlement.entitlement = value
    }
    if (columnName === "linkParameter") {
      filteredUsers[index].entitlement.linkParameter = value
    }
    if (columnName === "linkValue") {
      filteredUsers[index].entitlement.linkValue = value
    }
    if (columnName === "status") {
      filteredUsers[index].entitlement.status = value
    }
    if (columnName === "existingUserInd") {
      filteredUsers[index].entitlement.existingUserInd = value
    }
    setEditedData(filteredUsers)
    // console.log("Updated Data2:", filteredUsers)

    // filteredUsers[index][columnName] = value
    // setFilt(updatedData)
    // filteredUsers.splice(0, filteredUsers.length, ...updatedData)
  }

  const handleSaveChanges = () => {
    // Handle saving changes to the backend here
    // console.log("Updated Data:", editedData)

    saveTrainee()
  }

  const trueIcon = () => {
    return <CIcon icon={cilCheck} />
  }
  const falseIcon = () => {
    return <CIcon icon={cilXCircle} />
  }
  //   setTab(userExample)
  return (
    <>
      <div className="col-md-8">
        {/* <div className="input-group mb-3">
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
        </div> */}
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
            Filter by Registered User Id :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by UserId"
            value={searchregisteredUserId}
            onChange={handleSearchregisteredUserId} // Fixed the onChange event here
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by Link Parameter :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by Link Parameter"
            value={searchlinkParameter}
            onChange={handleSearchlinkParameter} // Fixed the onChange event here
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by Link Value :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by Link Value"
            value={searchlinkValue}
            onChange={handleSearchlinkValue} // Fixed the onChange event here
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by Status :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by Status"
            value={searchstatus}
            onChange={handleSearchstatus} // Fixed the onChange event here
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by Existing User :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by Existing User"
            value={searchexistingUser}
            onChange={handleSearchexistingUser} // Fixed the onChange event here
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by Access :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by Access"
            value={searchaccess}
            onChange={handleSearchaccess} // Fixed the onChange event here
          ></CFormInput>
        </div>
        <div className="input-group mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Filter by Entitlement :
          </CFormLabel>
          <CFormInput
            type="text"
            className="form-control"
            placeholder="Filter by Access"
            value={searchentitlement}
            onChange={handleSearchentitlement} // Fixed the onChange event here
          ></CFormInput>
        </div>
      </div>
      <div className="input-group-append">
        <CButton
          className="btn btn-outline-secondary"
          type="button"
          onClick={filter}
        >
          Apply Filter
        </CButton>
      </div>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Reports </CCardHeader>
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
                      {/* <CTableHeaderCell>UserId</CTableHeaderCell> */}
                      <CTableHeaderCell className="text-center">
                        Trainee ID
                      </CTableHeaderCell>
                      <CTableHeaderCell className="text-center">
                        Registered USER ID
                      </CTableHeaderCell>
                      <CTableHeaderCell>Link Parameter</CTableHeaderCell>
                      <CTableHeaderCell>Link Value</CTableHeaderCell>
                      <CTableHeaderCell>Status</CTableHeaderCell>
                      <CTableHeaderCell>Existing User</CTableHeaderCell>
                      <CTableHeaderCell>Access</CTableHeaderCell>
                      <CTableHeaderCell>Entitlement</CTableHeaderCell>
                      {/* <CTableHeaderCell>Admin</CTableHeaderCell> */}
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {filteredUsers &&
                      filteredUsers.map((item, index) => (
                        <CTableRow v-for="item in tableItems" key={index}>
                          <CTableDataCell className="text-center">
                            <CFormCheck id={index} label="" />
                          </CTableDataCell>
                          {/* <CTableDataCell>
                            <CFormInput
                              //   type="text"
                              value={item.entitlement.name}
                              onChange={e =>
                                handleCellValueChange(
                                  index,
                                  "name",
                                  e.target.value
                                )
                              }
                            />
                          </CTableDataCell> */}
                          <CTableDataCell
                            style={{ width: "15%" }}
                            className="text-center"
                          >
                            <CFormInput
                              type="text"
                              value={item.entitlement.traineeId}
                              onChange={e =>
                                handleCellValueChange(
                                  index,
                                  "entitlement",
                                  "traineeId",
                                  e.target.value
                                )
                              }
                            />
                          </CTableDataCell>
                          <CTableDataCell
                            style={{ width: "15%" }}
                            className="text-center"
                          >
                            <CFormInput
                              className="small text-nowrap text-medium-emphasis"
                              type="text"
                              value={item.entitlement.userId}
                              onChange={e =>
                                handleCellValueChange(
                                  index,
                                  "entitlement",
                                  "userId",
                                  e.target.value
                                )
                              }
                            />

                            {/* <div className="small text-nowrap text-medium-emphasis">
                              {item.registeredUserId}
                            </div> */}
                          </CTableDataCell>
                          <CTableDataCell style={{ width: "10%" }}>
                            {/* <div className="text-nowrap">
                              {item.entitlement.linkParameter}
                            </div> */}
                            <CFormInput
                              className="small text-nowrap text-medium-emphasis"
                              type="text"
                              value={item.entitlement.linkParameter}
                              onChange={e =>
                                handleCellValueChange(
                                  index,
                                  "entitlement",
                                  "linkParameter",
                                  e.target.value
                                )
                              }
                            />
                          </CTableDataCell>
                          <CTableDataCell
                            style={{ width: "10%" }}
                            className="text-center"
                          >
                            {/* <div className="small text-nowrap text-medium-emphasis">
                              {item.entitlement.linkValue}
                            </div> */}
                            <CFormInput
                              className="small text-nowrap text-medium-emphasis"
                              type="text"
                              value={item.entitlement.linkValue}
                              onChange={e =>
                                handleCellValueChange(
                                  index,
                                  "entitlement",
                                  "linkValue",
                                  e.target.value
                                )
                              }
                            />
                          </CTableDataCell>
                          <CTableDataCell className="text-center">
                            {/* <div className="small text-nowrap text-medium-emphasis">
                              {item.entitlement.status === "S"
                                ? trueIcon()
                                : falseIcon()}
                            </div> */}
                            <CFormSelect
                              value={item.entitlement.status}
                              onChange={e =>
                                handleCellValueChange(
                                  index,
                                  "entitlement",
                                  "status",
                                  e.target.value
                                )
                              }
                            >
                              <option value="S">Saved</option>
                              <option value="E">Error</option>
                              {/* <option value="Trainer">Trainer</option> */}
                            </CFormSelect>
                          </CTableDataCell>
                          <CTableDataCell>
                            {/* <div className="small text-nowrap text-medium-emphasis">
                              {item.entitlement.existingUserInd ? (
                                <CIcon icon={cilCheck} title="Download file" />
                              ) : (
                                <CIcon
                                  icon={cilXCircle}
                                  title="Download file"
                                />
                              )}
                            </div> */}
                            {/* <CDropdown
                              value={item.entitlement.existingUserInd}
                              onChange={e =>
                                handleCellValueChange(
                                  index,
                                  "entitlement",
                                  "existingUserInd",
                                  e.target.value
                                )
                              }
                            >
                              <CDropdownToggle
                                color="primary"
                                value={item.entitlement.existingUserInd}
                                onChange={e =>
                                  handleCellValueChange(
                                    index,
                                    "entitlement",
                                    "existingUserInd",
                                    e.target.value
                                  )
                                }
                              >
                                {item.entitlement.existingUserInd.toString() ===
                                "Y"
                                  ? trueIcon()
                                  : falseIcon()}
                              </CDropdownToggle>
                              <CDropdownMenu>
                                <CDropdownItem value="Y">
                                  {trueIcon()}
                                </CDropdownItem>
                                <CDropdownItem value="N">
                                  {falseIcon()}
                                </CDropdownItem>
                              </CDropdownMenu>
                            </CDropdown> */}

                            <CFormSelect
                              value={item.entitlement.existingUserInd}
                              onChange={e =>
                                handleCellValueChange(
                                  index,
                                  "entitlement",
                                  "existingUserInd",
                                  e.target.value
                                )
                              }
                            >
                              <option value=""></option>
                              <option value="Y">Y</option>
                              <option value="N">N</option>

                              {/* <option value="Trainer">Trainer</option> */}
                            </CFormSelect>
                          </CTableDataCell>

                          <CTableDataCell>
                            <CFormSelect
                              value={item.entitlement.userRole}
                              onChange={e =>
                                handleCellValueChange(
                                  index,
                                  "entitlement",
                                  "userRole",
                                  e.target.value
                                )
                              }
                            >
                              <option value=""></option>
                              <option value="Admin">Admin</option>
                              <option value="Student">Student</option>
                              <option value="Trainer">Trainer</option>
                            </CFormSelect>
                          </CTableDataCell>
                          <CTableDataCell>
                            {/* <CFormInput
                              type="text"
                              value={item.entitlement.entitlement}
                              onChange={e =>
                                handleCellValueChange(
                                  index,
                                  "entitlement",
                                  "entitlement",
                                  e.target.value
                                )
                              }
                            /> */}
                            <CFormSelect
                              value={item.entitlement.entitlement}
                              onChange={e =>
                                handleCellValueChange(
                                  index,
                                  "entitlement",
                                  "entitlement",
                                  e.target.value
                                )
                              }
                            >
                              {" "}
                              <option value=""></option>
                              <option value="ADMIN_READ_WRITE">
                                Admin Full
                              </option>
                              <option value="STUDENT_READ_WRITE">
                                Student Full
                              </option>
                              <option value="STUDENT_READ">
                                Student Read Only
                              </option>
                              <option value="TRAINER_READ_WRITE">
                                Trainer Full
                              </option>
                              <option value="TRAINER_READ">
                                Trainer Read Only
                              </option>
                            </CFormSelect>
                          </CTableDataCell>
                        </CTableRow>
                      ))}
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
        onClick={handleSaveChanges}
      >
        Save Changes
      </CButton>
      {renderSuccess()}
    </>
  )
}

export default Access
