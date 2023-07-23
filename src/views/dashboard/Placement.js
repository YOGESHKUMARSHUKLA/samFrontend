import React from "react"
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import TraineeDataService from "../../services/placement.service"
import { useEffect } from "react"
import { useState } from "react"
import { CImage } from "@coreui/react"
import CIcon from "@coreui/icons-react"
import AddPlacement from "./AddPlacement"
import EditPlacement from "./EditPlacement"
import { cilLockLocked, cilUser } from "@coreui/icons"
import { Link } from "react-router-dom"
import { Navigate, Route, Routes } from "react-router-dom"
import avatar1 from "src/assets/images/avatars/1.jpg"
import avatar2 from "src/assets/images/avatars/2.jpg"
import avatar3 from "src/assets/images/avatars/3.jpg"
import avatar4 from "src/assets/images/avatars/4.jpg"
import avatar5 from "src/assets/images/avatars/5.jpg"
import avatar6 from "src/assets/images/avatars/6.jpg"
import avatar7 from "src/assets/images/avatars/7.jpg"
import avatar8 from "src/assets/images/avatars/8.jpg"
import avatar9 from "src/assets/images/avatars/9.jpg"
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
const StudentProfile = () => {
  const [trainees, setTrainees] = useState([])
  // const [addFlag, setAddFlag] = useState(true)
  const location = useLocation()
  // console.log(props, " props")
  // console.log(location, " UseLocation Hook")
  // console.log(location.state.id, " UseLocation Id")
  const employeeId = location && location.state
  useEffect(() => {
    fetchData()
  }, [])
  console.log(employeeId)
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
  const EditPlac = item => {
    // if (addFlag === false) {
    localStorage.setItem("placId", item.placement.placementId)
    return (
      <div>
        <CButton type="submit" className="mb-3">
          <Link
            to={"/EditPlacement"}
            className="nav-link"
            style={{ color: "white" }}
            state={{ id: item.placement.placementId }}
          >
            {`Placement Number : ${item.placement.placementId}`}
          </Link>
        </CButton>
        <Routes>
          <Route path="/EditPlacement" element={<EditPlacement />} />
        </Routes>
      </div>
    )
    // }
  }

  const renderForm = item => {
    // setAddFlag(true)
    return (
      <>
        <div className="mb-3">
          {EditPlac(item)}
          {/* <CButton type="submit" className="mb-3">
            <Link
              to={"/EditPlacement"}
              className="nav-link"
              style={{ color: "white" }}
              state={{ id: item.placement.placementId }}
            >
              {`Placement Number : ${item.placement.placementId}`}
            </Link>
          </CButton>
          <Routes>
            <Route path="/EditPlacement" element={<EditPlacement />} />
          </Routes>{" "} */}
          {/* <CButton className="mb-3">
            {`Placement Number : ${item.placement.placementId}`}
          </CButton>{" "} */}
          {/* <CFormLabel htmlFor="exampleFormControlInput1">
            {"Placement Id : "}

            <CFormInput
              readOnly
              type="email"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={item.placement.placementId}
            />
          </CFormLabel>{" "} */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"EmploymentMethod : "}

            <CFormInput
              readOnly
              value={item.placement.placementDetails.employmentMethod}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"EmployerName : "}

            <CFormInput
              readOnly
              value={item.placement.placementDetails.employerName}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"NameOfPointPersonFromEmployer : "}

            <CFormInput
              readOnly
              value={
                item.placement.placementDetails.nameOfPointPersonFromEmployer
              }
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"PlacementSector : "}

            <CFormInput
              readOnly
              value={item.placement.placementDetails.placementSector}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"ContactNumberOfPointPerson : "}

            <CFormInput
              readOnly
              value={item.placement.placementDetails.contactNumberOfPointPerson}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Placement Status : "}

            <CFormInput
              readOnly
              value={item.placement.placementDetails.placementStatus}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"JobRole : "}

            <CFormInput
              readOnly
              value={item.placement.placementDetails.jobRole}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Employer EmailId : "}

            <CFormInput
              readOnly
              value={item.placement.placementDetails.employerEmailId}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Location Of Employment : "}

            <CFormInput
              readOnly
              value={item.placement.placementDetails.locationOfEmployment}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Annual CTC : "}

            <CFormInput
              readOnly
              value={item.placement.placementDetails.annualCtc}
            />
          </CFormLabel>
          <div>
            {/* <CButton type="submit" className="mb-3">
              Student
            </CButton>
            {"   "}
            <CButton type="submit" className="mb-3">
              Training
            </CButton>
            {"   "}
            <CButton type="submit" className="mb-3">
              Placement Tracking
            </CButton>{" "} */}
            {"   "}
            {/* <CButton type="submit" className="mb-3">
              <Link
                to={"/AddPlacement"}
                className="nav-link"
                style={{ color: "white" }}
              >
                Add Placement
              </Link>
            </CButton> */}
          </div>
          {/* </div> */}
        </div>
        <Routes>
          <Route path="/AddPlacement" element={<AddPlacement />} />
        </Routes>
      </>
    )
  }
  const AddPlac = () => {
    // if (addFlag === false) {
    return (
      <div>
        <CButton type="submit" className="mb-3">
          <Link
            to={"/AddPlacement"}
            className="nav-link"
            style={{ color: "white" }}
            state={{ id: employeeId.id }}
          >
            Add Placement
          </Link>
        </CButton>

        <Routes>
          <Route path="/AddPlacement" element={<AddPlacement />} />
        </Routes>
      </div>
    )
    // }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <CardHeader className="bg-primary text-white">
              Placement Profile
            </CardHeader>
            <CardBody>
              <Row className="mb-4">
                <Col sm={4}>
                  <div className="clearfix">
                    <CImage
                      align="center"
                      rounded
                      src={`https://storage.googleapis.com/sams-bulk-upload-start/${employeeId.id}_post.jpeg`}
                      // src={
                      //   (employeeId != null ? employeeId.id : 1) % 10 == 1
                      //     ? avatar1
                      //     : (employeeId != null ? employeeId.id : 1) % 10 == 2
                      //     ? avatar2
                      //     : (employeeId != null ? employeeId.id : 1) % 10 == 3
                      //     ? avatar3
                      //     : (employeeId != null ? employeeId.id : 1) % 10 == 4
                      //     ? avatar4
                      //     : (employeeId != null ? employeeId.id : 1) % 10 == 5
                      //     ? avatar5
                      //     : (employeeId != null ? employeeId.id : 1) % 10 == 6
                      //     ? avatar6
                      //     : (employeeId != null ? employeeId.id : 1) % 10 == 7
                      //     ? avatar7
                      //     : (employeeId != null ? employeeId.id : 1) % 10 == 8
                      //     ? avatar8
                      //     : avatar9
                      // }
                      width={200}
                      height={200}
                    />
                  </div>
                </Col>

                {trainees &&
                  trainees.map((item, index) => (
                    <CForm key={index}>
                      {item.placement.traineeId ===
                      (employeeId ? employeeId.id : 1)
                        ? renderForm(item)
                        : ""}
                      {/* : AddPlac()} */}
                    </CForm>
                  ))}
              </Row>
              {AddPlac()}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default StudentProfile
