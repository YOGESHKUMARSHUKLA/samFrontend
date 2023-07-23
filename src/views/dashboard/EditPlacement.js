import React, { Component } from "react"
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import TraineeDataService from "../../services/placement.service"
import { useEffect } from "react"
import { useState } from "react"
import avatar1 from "src/assets/images/avatars/1.jpg"
import CIcon from "@coreui/icons-react"
import { cilLockLocked, cilUser } from "@coreui/icons"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
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

export default class EditPlacement extends Component {
  constructor(props) {
    super(props)
    // this.onChangeTitle = this.onChangeTitle.bind(this);
    // this.onChangeDescription = this.onChangeDescription.bind(this);
    this.savePlacement = this.savePlacement.bind(this)
    this.newPlacement = this.newPlacement.bind(this)

    this.onChangePlacementId = this.onChangePlacementId.bind(this)
    this.onChangeTraineeId = this.onChangeTraineeId.bind(this)
    // this.onChangeTraineeIdi = this.onChangeTraineeIdi.bind(this)
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
    this.onChangereasonOfUnemployment =
      this.onChangereasonOfUnemployment.bind(this)
    this.onChangeComments = this.onChangeComments.bind(this)
    this.state = { plac: null }
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
          reasonOfUnemployment: "",
          comments: "",
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

  onChangereasonOfUnemployment(e) {
    this.setState({
      reasonOfUnemployment: e.target.value
    })
  }
  onChangeComments(e) {
    this.setState({
      comments: e.target.value
    })
  }
  async fetchData() {
    // const placM = plac.map
    const tranId = localStorage.getItem("tranId")
    try {
      //   const response = TraineeDataService.getAll()
      //   const filteredData = (await response).data.filter(
      //     item => item.traineeId === tranId && item.placementId === placId
      //   )
      const response = TraineeDataService.getP(tranId)
      this.setState({ plac: (await response).data })
      //   localStorage.setItem("placMen", filteredData)
      //   console.log(filteredData)
      console.log((await response).data)
    } catch (error) {
      console.error(error)
    }
  }
  componentDidMount() {
    this.fetchData()
  }

  filterData() {
    // const placIdm = localStorage.getItem("placMenm")
    const tranId = localStorage.getItem("tranId")
    const placId = localStorage.getItem("placId")
    const placIdm = this.state.plac
    const plac = placIdm || []
    console.log({ plac })
    // const parsedData = placIdm ? JSON.parse(placIdm) : []
    // console.log({ parsedData })
    // const parsedData = JSON.parse(`{ ${placIdm} }`)
    // console.log(parsedData)
    // const filteredData = plac.filter(
    //   item => item.traineeId === tranId && item.placementId === placId
    // )
    const filteredData = plac.filter(item =>
      item.placement.placementId.toString().toLowerCase().includes(placId)
    )
    // this.setState(filteredData)
    const data = filteredData.map(
      item =>
        //   console.log(item.placement.placementId)
        console.log(item.placement.placementDetails)
      //   console.log(item.placement.placementId)
      //   console.log(item.placement.placementId)
    )
    // console.log(data["0"])
    localStorage.setItem("placMen", data)
  }

  savePlacement() {
    const placId = localStorage.getItem("placId")
    const tranId = localStorage.getItem("tranId")
    const emailId = localStorage.getItem("emailId")
    const role = localStorage.getItem("role")
    const entitlement = localStorage.getItem("entitlement")
    const traineeIdy = localStorage.getItem("traineeId")
    var dataa

    const placIdm = this.state.plac
    const plac = placIdm || []
    const filteredData = plac.filter(item =>
      item.placement.placementId.toString().toLowerCase().includes(placId)
    )
    console.log({ filteredData })

    const dats = filteredData.map(item =>
      //item.placement.placementDetails.comments
      {
        dataa = {
          placement: {
            placementId: item.placement.placementId,
            traineeId: item.placement.traineeId,
            placementDetails: {
              placementStatus: item.placement.placementDetails.placementStatus,
              dateOfPlacement: item.placement.placementDetails.dateOfPlacement,
              placementSector: item.placement.placementDetails.placementSector,
              sectorNameIfDifferent:
                item.placement.placementDetails.sectorNameIfDifferent,
              employmentMethod:
                item.placement.placementDetails.employmentMethod,
              jobRole: item.placement.placementDetails.jobRole,
              employerName: item.placement.placementDetails.employerName,
              nameOfPointPersonFromEmployer:
                item.placement.placementDetails.nameOfPointPersonFromEmployer,
              contactNumberOfPointPerson:
                item.placement.placementDetails.contactNumberOfPointPerson,
              employerEmailId: item.placement.placementDetails.employerEmailId,
              locationOfEmployment:
                item.placement.placementDetails.locationOfEmployment,
              annualCtc: item.placement.placementDetails.annualCtc,
              lastUpdateTimestamp:
                item.placement.placementDetails.lastUpdateTimestamp,
              reasonOfUnemployment:
                item.placement.placementDetails.reasonOfUnemployment,
              comments: item.placement.placementDetails.comments,
              creationTimestamp:
                item.placement.placementDetails.creationTimestamp
            }
          }
        }
        // console.log(dataa)
      }
    )
    console.log(dataa.placement)
    if (role === "Admin") {
      var data = {
        placement: {
          placementId: placId,
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
            reasonOfUnemployment: this.state.reasonOfUnemployment,
            comments: this.state.comments,
            creationTimestamp: this.state.creationTimestamp
          }
        }
      }
    }
    if (role === "Student") {
      var data = {
        placement: {
          placementId: placId,
          traineeId: traineeIdy,
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
            reasonOfUnemployment: this.state.reasonOfUnemployment,
            comments: this.state.comments,
            creationTimestamp: this.state.creationTimestamp
          }
        }
      }
    }
    TraineeDataService.update(data)
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
              reasonOfUnemployment: response.data.reasonOfUnemployment,
              comments: response.data.comments,
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
          reasonOfUnemployment: "",
          comments: "",
          creationTimestamp: ""
        }
      },
      submitted: false
    })
  }

  renderForm = item => {
    const emailId = localStorage.getItem("emailId")
    const role = localStorage.getItem("role")
    const entitlement = localStorage.getItem("entitlement")
    const traineeIdy = localStorage.getItem("traineeId")
    const placM = this.state.plac

    const placId = localStorage.getItem("placId")
    const tranId = localStorage.getItem("tranId")
    // localStorage.setItem("placMenm", placM)
    // this.filterData()
    const placd = localStorage.getItem("placMen")
    console.log({ placM })
    // console.log(this.filteredData)
    console.log({ placId })
    console.log({ tranId })
    // console.log(placd[2])

    // console.log({ data })
    // console.log(dataa)
    // console.log(this.state.placement)
    // this.setState(dataa)
    return (
      <>
        {/* {dataa &&
          dataa.map((item, index) => ( */}
        <div className="mb-3">
          {role !== "Student" ? (
            <CFormLabel htmlFor="exampleFormControlInput1">
              {"Trainee Id : "}

              <CFormInput
                type="text"
                // placeholder={item.placement.placementId}
                id="traineeId"
                required
                value={this.state.traineeId}
                onChange={this.onChangeTraineeId}
                name="traineeId"
                // readOnly
                //value={""}
              />
            </CFormLabel>
          ) : (
            <CFormLabel htmlFor="exampleFormControlInput1">
              {"Trainee Id : "}

              <CFormInput
                type="text"
                // placeholder={dataa?.placement?.placementId}
                id="traineeId"
                required
                value={this.state.traineeId}
                onChange={this.onChangeTraineeId}
                name="traineeId"
                readOnly
                //value={""}
              />
            </CFormLabel>
          )}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Employment Method : "}
            <CFormInput
              type="text"
              //   placeholder={this.state.plac[placId].employmentMethod}
              id="employmentMethod"
              required
              //   placeholder={dataa?.placement?.placementDetails?.employmentMethod}
              value={this.state.employmentMethod}
              onChange={this.onChangeEmploymentMethod}
              name="employmentMethod"
            />
            {/* {console.log(dataa?.placement?.placementDetails?.employmentMethod)} */}
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
            {"Point Person From Employer : "}

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
            {"Reason Of Employment : "}

            <CFormInput
              placeholder=""
              id="reasonOfUnemployment"
              required
              value={this.state.reasonOfUnemployment}
              onChange={this.onChangereasonOfUnemployment}
              name="reasonOfUnemployment"
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Comments : "}

            <CFormInput
              placeholder=""
              id="com"
              required
              value={this.state.comments}
              onChange={this.onChangeComments}
              name="com"
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
        </div>
        {/* ))} */}
      </>
    )
  }

  render() {
    const { traineeIdii } = this.props

    // console.log("traiiin", traineeId)
    // this.onChangeTraineeIdi(traineeId)
    // console.log("trayyyyiiin", this.state.traineeIdi)
    // this.setState(traineeId)
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
                        {this.renderForm(traineeIdii)}
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
EditPlacement.propTypes = {
  traineeId: PropTypes.string.isRequired
  // Add other prop types here if needed
}
