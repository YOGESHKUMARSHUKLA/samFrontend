import React, { Component } from "react"
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

export default class AddPlacement extends Component {
  constructor(props) {
    super(props)
    // this.onChangeTitle = this.onChangeTitle.bind(this);
    // this.onChangeDescription = this.onChangeDescription.bind(this);
    this.savePlacement = this.savePlacement.bind(this)
    this.newPlacement = this.newPlacement.bind(this)

    this.onChangePlacementId = this.onChangePlacementId.bind(this)
    this.onChangeTraineeId = this.onChangeTraineeId.bind(this)
    this.onChangePlacementStatus = this.onChangePlacementStatus.bind(this)
    this.onChangeDateOfPlacement = this.onChangeDateOfPlacement.bind(this)

    this.onChangePlacementSector = this.onChangePlacementSector.bind(this)
    this.onChangeSectorNameIfDifferent =
      this.onChangeSectorNameIfDifferent.bind(this)
    this.onChangeJobRole = this.onChangeJobRole.bind(this)

    this.onChangeEmploymentMethod = this.onChangeEmploymentMethod.bind(this)
    this.onChangeEmployerName = this.onChangeEmployerName.bind(this)

    this.onChangeNameOfPointPersonFromEmployer =
      this.onChangeNameOfPointPersonFromEmployer.bind(this)
    this.onChangeContactNumberOfPointPerson =
      this.onChangeContactNumberOfPointPerson.bind(this)
    this.onChangeEmployerEmailId = this.onChangeEmployerEmailId.bind(this)
    this.onChangeLocationOfEmployment =
      this.onChangeLocationOfEmployment.bind(this)
    this.onChangeAnnualCtc = this.onChangeAnnualCtc.bind(this)
    this.onChangeLastUpdateTimestamp =
      this.onChangeLastUpdateTimestamp.bind(this)
    this.onChangeCreationTimestamp = this.onChangeCreationTimestamp.bind(this)

    this.state = {
      placement: {
        traineeId: "",
        placementId: null,
        placementDetails: {
          placementStatus: "",
          dateOfPlacement: "",
          placementSector: "",
          sectorNameIfDifferent: "",
          jobRole: "",
          employmentMethod: "",
          employerName: "",
          nameOfPointPersonFromEmployer: "",
          contactNumberOfPointPerson: "",
          employerEmailId: "",
          locationOfEmployment: "",
          annualCtc: " ",
          lastUpdateTimestamp: "",
          creationTimestamp: ""
        }
      },

      submitted: false
    }
  }

  onChangePlacementId(e) {
    this.setState({
      placementId: e.target.value
    })
  }
  onChangeTraineeId(e) {
    this.setState({
      traineeId: e.target.value
    })
  }

  onChangePlacementStatus(e) {
    this.setState({
      placementStatus: e.target.value
    })
  }
  onChangeDateOfPlacement(e) {
    this.setState({
      dateOfPlacement: e.target.value
    })
  }
  onChangePlacementSector(e) {
    this.setState({
      placementSector: e.target.value
    })
  }
  onChangeSectorNameIfDifferent(e) {
    this.setState({
      sectorNameIfDifferent: e.target.value
    })
  }
  onChangeJobRole(e) {
    this.setState({
      jobRole: e.target.value
    })
  }
  onChangeEmploymentMethod(e) {
    this.setState({
      employmentMethod: e.target.value
    })
  }
  onChangeEmployerName(e) {
    this.setState({
      employerName: e.target.value
    })
  }
  onChangeNameOfPointPersonFromEmployer(e) {
    this.setState({
      nameOfPointPersonFromEmployer: e.target.value
    })
  }
  onChangeContactNumberOfPointPerson(e) {
    this.setState({
      contactNumberOfPointPerson: e.target.value
    })
  }
  onChangeEmployerEmailId(e) {
    this.setState({
      employerEmailId: e.target.value
    })
  }
  onChangeLocationOfEmployment(e) {
    this.setState({
      locationOfEmployment: e.target.value
    })
  }
  onChangeAnnualCtc(e) {
    this.setState({
      annualCtc: e.target.value
    })
  }
  onChangeLastUpdateTimestamp(e) {
    this.setState({
      lastUpdateTimestamp: "2023-06-29T12:28:49.959+00:00"
    })
  }
  onChangeCreationTimestamp(e) {
    this.setState({
      creationTimestamp: "2023-06-29T12:28:49.959+00:00"
    })
  }

  savePlacement() {
    var data = {
      placement: {
        placementId: this.state.placementId,
        traineeId: this.state.traineeId,
        placementDetails: {
          placementStatus: this.state.placementStatus,
          dateOfPlacement: this.state.dateOfPlacement,
          placementSector: this.state.placementSector,
          sectorNameIfDifferent: this.state.sectorNameIfDifferent,
          employmentMethod: this.state.employmentMethod,
          jobRole: this.state.jobRole,
          employerName: this.state.employerName,
          nameOfPointPersonFromEmployer:
            this.state.nameOfPointPersonFromEmployer,
          contactNumberOfPointPerson: this.state.contactNumberOfPointPerson,
          employerEmailId: this.state.employerEmailId,
          locationOfEmployment: this.state.locationOfEmployment,
          annualCtc: this.state.annualCtc,
          lastUpdateTimestamp: this.state.lastUpdateTimestamp,
          creationTimestamp: this.state.creationTimestamp
        }
      }
    }

    TraineeDataService.create(data)
      .then(response => {
        this.setState({
          placement: {
            placementId: response.data.placementId,
            traineeId: response.data.traineeId,
            placementDetails: {
              placementStatus: response.data.placementStatus,
              dateOfPlacement: response.data.dateOfPlacement,
              placementSector: response.data.placementSector,
              sectorNameIfDifferent: response.data.sectorNameIfDifferent,
              employmentMethod: response.data.employmentMethod,
              jobRole: response.data.jobRole,
              employerName: response.data.employerName,
              nameOfPointPersonFromEmployer:
                response.data.nameOfPointPersonFromEmployer,
              contactNumberOfPointPerson:
                response.data.contactNumberOfPointPerson,
              employerEmailId: response.data.employerEmailId,
              locationOfEmployment: response.data.locationOfEmployment,
              annualCtc: response.data.annualCtc,
              lastUpdateTimestamp: response.data.lastUpdateTimestamp,
              creationTimestamp: response.data.creationTimestamp
            }
          },
          submitted: true
        })
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  newPlacement() {
    this.setState({
      placement: {
        placementId: null,
        traineeId: "",
        placementDetails: {
          placementStatus: "",
          dateOfPlacement: "",
          placementSector: "",
          sectorNameIfDifferent: "",
          jobRole: "",
          employmentMethod: "",
          employerName: "",
          nameOfPointPersonFromEmployer: "",
          contactNumberOfPointPerson: "",
          employerEmailId: "",
          locationOfEmployment: "",
          annualCtc: "",
          lastUpdateTimestamp: "",
          creationTimestamp: ""
        }
      },
      submitted: false
    })
  }

  renderForm = item => {
    return (
      <>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlInput1">
            {"Trainee Id : "}

            <CFormInput
              type="text"
              placeholder=""
              id="traineeId"
              required
              value={this.state.traineeId}
              onChange={this.onChangeTraineeId}
              name="traineeId"
              //value={""}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Employment Method : "}

            <CFormInput
              type="text"
              placeholder=""
              id="employmentMethod"
              required
              value={this.state.employmentMethod}
              onChange={this.onChangeEmploymentMethod}
              name="employmentMethod"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Employer Name : "}
            <CFormInput
              placeholder=""
              id="employerName"
              required
              value={this.state.employerName}
              onChange={this.onChangeEmployerName}
              name="employerName"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Name Of Point Person From Employer : "}

            <CFormInput
              placeholder=""
              id="nameOfPointPersonFromEmployer"
              required
              value={this.state.nameOfPointPersonFromEmployer}
              onChange={this.onChangeNameOfPointPersonFromEmployer}
              name="nameOfPointPersonFromEmployer"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Date of placement : "}

            <CFormInput
              placeholder=""
              id="dateOfPlacement"
              required
              value={this.state.dateOfPlacement}
              onChange={this.onChangeDateOfPlacement}
              name="dateOfPlacement"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Placement Sector : "}

            <CFormInput
              placeholder=""
              id="placementSector"
              required
              value={this.state.placementSector}
              onChange={this.onChangePlacementSector}
              name="placementSector"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Sector Name If Different : "}

            <CFormInput
              placeholder=""
              id="sectorNameIfDifferent"
              required
              value={this.state.sectorNameIfDifferent}
              onChange={this.onChangeSectorNameIfDifferent}
              name="sectorNameIfDifferent"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Contact Number Of Point Person : "}

            <CFormInput
              placeholder=""
              id="contactNumberOfPointPerson"
              required
              value={this.state.contactNumberOfPointPerson}
              onChange={this.onChangeContactNumberOfPointPerson}
              name="contactNumberOfPointPerson"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Placement Status : "}

            <CFormInput
              placeholder=""
              id="placementStatus"
              required
              value={this.state.placementStatus}
              onChange={this.onChangePlacementStatus}
              name="placementStatus"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Job Role : "}

            <CFormInput
              placeholder=""
              id="jobRole"
              required
              value={this.state.jobRole}
              onChange={this.onChangeJobRole}
              name="jobRole"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Employer EmailId : "}

            <CFormInput
              placeholder=""
              id="employerEmailId"
              required
              value={this.state.employerEmailId}
              onChange={this.onChangeEmployerEmailId}
              name="employerEmailId"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Location Of Employment : "}

            <CFormInput
              placeholder=""
              id="locationOfEmployment"
              required
              value={this.state.locationOfEmployment}
              onChange={this.onChangeLocationOfEmployment}
              name="locationOfEmployment"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Annual CTC : "}

            <CFormInput
              placeholder=""
              id="annualCtc"
              required
              value={this.state.annualCtc}
              onChange={this.onChangeAnnualCtc}
              name="annualCtc"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Last Update Timestamp: "}

            <CFormInput
              placeholder=""
              id="lastUpdateTimestamp"
              required
              value={"2023-06-29T12:28:49.959+00:00"}
              onChange={this.onChangeLastUpdateTimestamp}
              name="lastUpdateTimestamp"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Creation Timestamp : "}

            <CFormInput
              placeholder=""
              id="creationTimestamp"
              required
              value={"2023-06-29T12:28:49.959+00:00"}
              onChange={this.onChangeCreationTimestamp}
              name="creationTimestamp"
            />
          </CFormLabel>
          <div>
            <CButton
              type="submit"
              onClick={this.savePlacement}
              className="mb-3"
            >
              Submit
            </CButton>
            {"    "}
            <CButton type="submit" onClick={this.newPlacement} className="mb-3">
              Back
            </CButton>
          </div>
          {/* </div> */}
        </div>
      </>
    )
  }
  render() {
    return (
      <div className="container">
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4 style={{ color: "black" }}>
                Placement submitted successfully!
              </h4>
              <button className="btn btn-success" onClick={this.newPlacement}>
                Add
              </button>
            </div>
          ) : (
            <Container>
              <Row className="justify-content-center">
                <Col md={8}>
                  <Card>
                    <CardHeader className="bg-primary text-white">
                      Add Placement
                    </CardHeader>
                    <CardBody>
                      <Row className="mb-4">
                        <Col sm={4}>
                          <CAvatar
                            sx={{ height: "170px", width: "170px" }}
                            color="primary"
                            textColor="white"
                            size="xl"
                          >
                            PIC
                          </CAvatar>
                        </Col>
                        {this.renderForm()}
                      </Row>
                      {/* Rest of the profile information */}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          )}
        </div>
      </div>
    )
  }
}
