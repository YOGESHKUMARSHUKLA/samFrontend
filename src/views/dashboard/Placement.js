import React from "react"
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import TraineeDataService from "../../services/placement.service"
import { useEffect } from "react"
import { useState } from "react"
import avatar1 from "src/assets/images/avatars/1.jpg"
import CIcon from "@coreui/icons-react"
import { cilLockLocked, cilUser } from "@coreui/icons"
import { Link } from "react-router-dom"
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
const StudentProfile = () => {
  const [trainees, setTrainees] = useState([])

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
    return (
      <>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">
            {"Placement Id : "}

            <CFormInput
              readOnly
              type="email"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={item.placement.placementId}
            />
          </CFormLabel>{" "}
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
            <CButton type="submit" className="mb-3">
              Student
            </CButton>
            {"   "}
            <CButton type="submit" className="mb-3">
              Training
            </CButton>
            {"   "}
            <CButton type="submit" className="mb-3">
              Placement Tracking
            </CButton>
          </div>
          {/* </div> */}
        </div>
      </>
    )
  }
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
              Placement Tracking
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
              Placement Profile
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
                {trainees &&
                  trainees.map((item, index) => (
                    // <Col sm={8} key={index}>
                    //   {item.trainee.traineeId == 1
                    //     ? renderNestedFields(item.trainee)
                    //     : "traineeId does not exist"}
                    // </Col>

                    <CForm key={index}>
                      {item.placement.traineeId == 1 ? renderForm(item) : ""}
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

export default StudentProfile
