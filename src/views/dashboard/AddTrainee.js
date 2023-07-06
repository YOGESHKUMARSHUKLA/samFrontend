import React, { Component } from "react"
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import TraineeDataService from "../../services/trainee.service"
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
export default class AddTrainee extends Component {
  constructor(props) {
    super(props)
    // this.onChangeTitle = this.onChangeTitle.bind(this);
    // this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTrainee = this.saveTrainee.bind(this)
    this.newTrainee = this.newTrainee.bind(this)

    this.onChangeTechnicalEducation = this.onChangeTechnicalEducation.bind(this)
    this.onChangeGender = this.onChangeGender.bind(this)
    this.onChangeGuardianType = this.onChangeGuardianType.bind(this)
    this.onChangeFamilyEconomicStatus =
      this.onChangeFamilyEconomicStatus.bind(this)
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this)
    this.onChangeTraineeId = this.onChangeTraineeId.bind(this)
    this.onChangeNumberOfFamilyMembers =
      this.onChangeNumberOfFamilyMembers.bind(this)
    this.onChangePwdCertificate = this.onChangePwdCertificate.bind(this)
    this.onChangeTypeOfDisability = this.onChangeTypeOfDisability.bind(this)
    this.onChangeNameOfTrainee = this.onChangeNameOfTrainee.bind(this)
    this.onChangePincode = this.onChangePincode.bind(this)
    this.onChangeAadharNumber = this.onChangeAadharNumber.bind(this)
    this.onChangemobileNumber = this.onChangemobileNumber.bind(this)
    this.onChangetraineeAddress = this.onChangetraineeAddress.bind(this)
    this.onChangetypeOfIdentification =
      this.onChangetypeOfIdentification.bind(this)
    this.onChangedistrict = this.onChangedistrict.bind(this)
    this.onChangealternateContactNumber =
      this.onChangealternateContactNumber.bind(this)
    this.onChangeemailId = this.onChangeemailId.bind(this)
    this.onChangepanNumber = this.onChangepanNumber.bind(this)
    this.onChangestate = this.onChangestate.bind(this)
    this.onChangevoterIdNumber = this.onChangevoterIdNumber.bind(this)
    this.onChangeguardianContactNumber =
      this.onChangeguardianContactNumber.bind(this)
    this.onChangesourceOfHouseholdIncome =
      this.onChangesourceOfHouseholdIncome.bind(this)
    this.onChangenameOfGuardian = this.onChangenameOfGuardian.bind(this)
    this.onChangeannualHouseholdIncome =
      this.onChangeannualHouseholdIncome.bind(this)
    this.onChangenameOfEducationalInstitute =
      this.onChangenameOfEducationalInstitute.bind(this)
    this.onChangepreJoiningCounselling =
      this.onChangepreJoiningCounselling.bind(this)
    this.onChangepreTrainingEmploymentStatus =
      this.onChangepreTrainingEmploymentStatus.bind(this)
    this.onChangecurrentEmploymentStatus =
      this.onChangecurrentEmploymentStatus.bind(this)
    this.onChangemobilisationTechnique =
      this.onChangemobilisationTechnique.bind(this)
    this.onChangesalutation = this.onChangesalutation.bind(this)
    this.onChangetraineeAnnualIncome =
      this.onChangetraineeAnnualIncome.bind(this)
    this.onChangehighestEducationLevel =
      this.onChangehighestEducationLevel.bind(this)
    this.onChangemaritalStatus = this.onChangemaritalStatus.bind(this)
    this.onChangecasteCategory = this.onChangecasteCategory.bind(this)
    this.onChangecurrentlyPursuingEducation =
      this.onChangecurrentlyPursuingEducation.bind(this)

    this.state = {
      trainee: {
        technicalEducation: "",
        gender: "",
        guardianType: "",
        familyEconomicStatus: "",
        dateOfBirth: "",
        traineeId: null,
        numberOfFamilyMembers: "",
        disabilityDetails: {
          pwdCertificate: "",
          typeOfDisability: ""
        },
        nameOfTrainee: "",
        identificationDetails: {
          pincode: "",
          aadharNumber: "",
          mobileNumber: "",
          traineeAddress: "",
          typeOfIdentification: "",
          district: "",
          alternateContactNumber: "",
          emailId: "",
          panNumber: "",
          state: "",
          voterIdNumber: "",
          guardianContactNumber: ""
        },
        sourceOfHouseholdIncome: "",
        nameOfGuardian: "",
        annualHouseholdIncome: "",
        nameOfEducationalInstitute: "",
        preTrainingDetails: {
          preJoiningCounselling: "",
          preTrainingEmploymentStatus: "",
          currentEmploymentStatus: "",
          mobilisationTechnique: ""
        },
        salutation: "",
        traineeAnnualIncome: "",
        highestEducationLevel: "",
        maritalStatus: "",
        casteCategory: "",
        currentlyPursuingEducation: ""
      },

      submitted: false
    }
  }
  onChangeTechnicalEducation(e) {
    this.setState({
      technicalEducation: e.target.value
    })
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }
  onChangeGuardianType(e) {
    this.setState({
      guardianType: e.target.value
    })
  }
  onChangeFamilyEconomicStatus(e) {
    this.setState({
      familyEconomicStatus: e.target.value
    })
  }
  onChangeDateOfBirth(e) {
    this.setState({
      dateOfBirth: e.target.value
    })
  }
  onChangeTraineeId(e) {
    this.setState({
      traineeId: e.target.value
    })
  }
  onChangeNumberOfFamilyMembers(e) {
    this.setState({
      numberOfFamilyMembers: e.target.value
    })
  }
  onChangePwdCertificate(e) {
    this.setState({
      pwdCertificate: e.target.value
    })
  }
  onChangeTypeOfDisability(e) {
    this.setState({
      typeOfDisability: e.target.value
    })
  }
  onChangeNameOfTrainee(e) {
    this.setState({
      nameOfTrainee: e.target.value
    })
  }
  onChangePincode(e) {
    this.setState({
      pincode: e.target.value
    })
  }
  onChangeAadharNumber(e) {
    this.setState({
      aadharNumber: e.target.value
    })
  }
  onChangemobileNumber(e) {
    this.setState({
      mobileNumber: e.target.value
    })
  }
  onChangetraineeAddress(e) {
    this.setState({
      traineeAddress: e.target.value
    })
  }
  onChangetypeOfIdentification(e) {
    this.setState({
      typeOfIdentification: e.target.value
    })
  }
  onChangedistrict(e) {
    this.setState({
      district: e.target.value
    })
  }
  onChangealternateContactNumber(e) {
    this.setState({
      alternateContactNumber: e.target.value
    })
  }
  onChangeemailId(e) {
    this.setState({
      emailId: e.target.value
    })
  }
  onChangepanNumber(e) {
    this.setState({
      panNumber: e.target.value
    })
  }
  onChangestate(e) {
    this.setState({
      state: e.target.value
    })
  }
  onChangevoterIdNumber(e) {
    this.setState({
      voterIdNumber: e.target.value
    })
  }
  onChangeguardianContactNumber(e) {
    this.setState({
      guardianContactNumber: e.target.value
    })
  }
  onChangesourceOfHouseholdIncome(e) {
    this.setState({
      sourceOfHouseholdIncome: e.target.value
    })
  }
  onChangenameOfGuardian(e) {
    this.setState({
      nameOfGuardian: e.target.value
    })
  }
  onChangeannualHouseholdIncome(e) {
    this.setState({
      annualHouseholdIncome: e.target.value
    })
  }
  onChangenameOfEducationalInstitute(e) {
    this.setState({
      nameOfEducationalInstitute: e.target.value
    })
  }
  onChangepreJoiningCounselling(e) {
    this.setState({
      preJoiningCounselling: e.target.value
    })
  }
  onChangepreTrainingEmploymentStatus(e) {
    this.setState({
      preTrainingEmploymentStatus: e.target.value
    })
  }
  onChangecurrentEmploymentStatus(e) {
    this.setState({
      currentEmploymentStatus: e.target.value
    })
  }
  onChangemobilisationTechnique(e) {
    this.setState({
      mobilisationTechnique: e.target.value
    })
  }
  onChangesalutation(e) {
    this.setState({
      salutation: e.target.value
    })
  }
  onChangetraineeAnnualIncome(e) {
    this.setState({
      traineeAnnualIncome: e.target.value
    })
  }
  onChangehighestEducationLevel(e) {
    this.setState({
      highestEducationLevel: e.target.value
    })
  }
  onChangemaritalStatus(e) {
    this.setState({
      maritalStatus: e.target.value
    })
  }
  onChangecasteCategory(e) {
    this.setState({
      casteCategory: e.target.value
    })
  }
  onChangecurrentlyPursuingEducation(e) {
    this.setState({
      currentlyPursuingEducation: e.target.value
    })
  }

  saveTrainee() {
    var data = {
      trainee: {
        technicalEducation: this.state.technicalEducation,
        gender: this.state.gender,
        guardianType: this.state.guardianType,
        familyEconomicStatus: this.state.familyEconomicStatus,
        dateOfBirth: this.state.dateOfBirth,
        traineeId: this.state.traineeId,
        numberOfFamilyMembers: this.state.nameOfEducationalInstitute,
        disabilityDetails: {
          pwdCertificate: this.state.pwdCertificate,
          typeOfDisability: this.state.typeOfDisability
        },
        nameOfTrainee: this.state.nameOfTrainee,
        identificationDetails: {
          pincode: this.state.pincode,
          aadharNumber: this.state.aadharNumber,
          mobileNumber: this.state.mobileNumber,
          traineeAddress: this.state.traineeAddress,
          typeOfIdentification: this.state.typeOfIdentification,
          district: this.state.district,
          alternateContactNumber: this.state.alternateContactNumber,
          emailId: this.state.emailId,
          panNumber: this.state.panNumber,
          state: this.state.state,
          voterIdNumber: this.state.voterIdNumber,
          guardianContactNumber: this.state.guardianContactNumber
        },
        sourceOfHouseholdIncome: this.state.sourceOfHouseholdIncome,
        nameOfGuardian: this.state.nameOfGuardian,
        annualHouseholdIncome: this.state.annualHouseholdIncome,
        nameOfEducationalInstitute: this.state.nameOfEducationalInstitute,
        preTrainingDetails: {
          preJoiningCounselling: this.state.preJoiningCounselling,
          preTrainingEmploymentStatus: this.state.preTrainingDetails,
          currentEmploymentStatus: this.state.currentEmploymentStatus,
          mobilisationTechnique: this.state.mobilisationTechnique
        },
        salutation: this.state.salutation,
        traineeAnnualIncome: this.state.traineeAnnualIncome,
        highestEducationLevel: this.state.highestEducationLevel,
        maritalStatus: this.state.maritalStatus,
        casteCategory: this.state.casteCategory,
        currentlyPursuingEducation: this.state.currentlyPursuingEducation
      }
    }
    TraineeDataService.create(data)
      .then(response => {
        this.setState({
          trainee: {
            technicalEducation: response.data.trainee.technicalEducation,
            gender: response.data.trainee.gender,
            guardianType: response.data.trainee.guardianType,
            familyEconomicStatus: response.data.trainee.familyEconomicStatus,
            dateOfBirth: response.data.trainee.dateOfBirth,
            traineeId: response.data.trainee.traineeId,
            numberOfFamilyMembers:
              response.data.trainee.nameOfEducationalInstitute,
            disabilityDetails: {
              pwdCertificate: response.data.trainee.pwdCertificate,
              typeOfDisability: response.data.trainee.typeOfDisability
            },
            nameOfTrainee: response.data.trainee.nameOfTrainee,
            identificationDetails: {
              pincode: response.data.trainee.pincode,
              aadharNumber: response.data.trainee.aadharNumber,
              mobileNumber: response.data.trainee.mobileNumber,
              traineeAddress: response.data.trainee.traineeAddress,
              typeOfIdentification: response.data.trainee.typeOfIdentification,
              district: response.data.trainee.district,
              alternateContactNumber:
                response.data.trainee.alternateContactNumber,
              emailId: response.data.trainee.emailId,
              panNumber: response.data.trainee.panNumber,
              state: response.data.trainee.state,
              voterIdNumber: response.data.trainee.voterIdNumber,
              guardianContactNumber: response.data.trainee.guardianContactNumber
            },
            sourceOfHouseholdIncome:
              response.data.trainee.sourceOfHouseholdIncome,
            nameOfGuardian: response.data.trainee.nameOfGuardian,
            annualHouseholdIncome: response.data.trainee.annualHouseholdIncome,
            nameOfEducationalInstitute:
              response.data.trainee.nameOfEducationalInstitute,
            preTrainingDetails: {
              preJoiningCounselling:
                response.data.trainee.preJoiningCounselling,
              preTrainingEmploymentStatus:
                response.data.trainee.preTrainingDetails,
              currentEmploymentStatus:
                response.data.trainee.currentEmploymentStatus,
              mobilisationTechnique: response.data.trainee.mobilisationTechnique
            },
            salutation: response.data.trainee.salutation,
            traineeAnnualIncome: response.data.trainee.traineeAnnualIncome,
            highestEducationLevel: response.data.trainee.highestEducationLevel,
            maritalStatus: response.data.trainee.maritalStatus,
            casteCategory: response.data.trainee.casteCategory,
            currentlyPursuingEducation:
              response.data.trainee.currentlyPursuingEducation
          },
          submitted: true
        })
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  newTrainee() {
    this.setState({
      trainee: {
        technicalEducation: "",
        gender: "",
        guardianType: "",
        familyEconomicStatus: "",
        dateOfBirth: "",
        traineeId: null,
        numberOfFamilyMembers: "",
        disabilityDetails: {
          pwdCertificate: "",
          typeOfDisability: ""
        },
        nameOfTrainee: "",
        identificationDetails: {
          pincode: "",
          aadharNumber: "",
          mobileNumber: "",
          traineeAddress: "",
          typeOfIdentification: "",
          district: "",
          alternateContactNumber: "",
          emailId: "",
          panNumber: "",
          state: "",
          voterIdNumber: "",
          guardianContactNumber: ""
        },
        sourceOfHouseholdIncome: "",
        nameOfGuardian: "",
        annualHouseholdIncome: "",
        nameOfEducationalInstitute: "",
        preTrainingDetails: {
          preJoiningCounselling: "",
          preTrainingEmploymentStatus: "",
          currentEmploymentStatus: "",
          mobilisationTechnique: ""
        },
        salutation: "",
        traineeAnnualIncome: "",
        highestEducationLevel: "",
        maritalStatus: "",
        casteCategory: "",
        currentlyPursuingEducation: ""
      },
      submitted: false
    })
  }
  //   const [trainees, setTrainees] = useState([])

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
          <CFormLabel htmlFor="exampleFormControlTextarea2">
            {"Name Of Trainee : "}

            <CFormInput
              value={this.state.nameOfTrainee}
              onChange={this.onChangeNameOfTrainee}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlInput1">
            {"Type of Identification : "}

            <CFormInput
              //   type="email"
              id="exampleFormControlInput1"
              //   placeholder="name@example.com"
              value={this.state.typeOfIdentification}
              onChange={this.onChangetypeOfIdentification}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"DOB : "}

            <CFormInput
              value={this.state.dateOfBirth}
              onChange={this.onChangeDateOfBirth}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Gender : "}

            <CFormInput
              value={this.state.gender}
              onChange={this.onChangeGender}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Marital Status : "}

            <CFormInput
              value={this.state.maritalStatus}
              onChange={this.onChangemaritalStatus}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Caste Category : "}

            <CFormInput
              value={this.state.casteCategory}
              onChange={this.onChangecasteCategory}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Guardian Type : "}

            <CFormInput
              value={this.state.guardianType}
              onChange={this.onChangeGuardianType}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Name of Guardian/Spouse/Parent : "}

            <CFormInput
              value={this.state.nameOfGuardian}
              onChange={this.onChangenameOfGuardian}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Family Economic Status : "}

            <CFormInput
              value={this.state.familyEconomicStatus}
              onChange={this.onChangeFamilyEconomicStatus}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Source of Household Income : "}

            <CFormInput
              value={this.state.sourceOfHouseholdIncome}
              onChange={this.onChangesourceOfHouseholdIncome}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Trainee Annual Income : "}

            <CFormInput
              value={this.state.traineeAnnualIncome}
              onChange={this.onChangetraineeAnnualIncome}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Annual Household Income : "}

            <CFormInput
              value={this.state.annualHouseholdIncome}
              onChange={this.onChangeannualHouseholdIncome}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Number Of Fammily Members : "}

            <CFormInput
              value={this.state.numberOfFamilyMembers}
              onChange={this.onChangeNumberOfFamilyMembers}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"PWD Cert : "}

            <CFormInput
              value={this.state.pwdCertificate}
              onChange={this.onChangePwdCertificate}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Type Of Disability : "}

            <CFormInput
              value={this.state.typeOfDisability}
              onChange={this.onChangeTypeOfDisability}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Pincode : "}

            <CFormInput
              value={this.state.pincode}
              onChange={this.onChangePincode}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"aadharNumber : "}

            <CFormInput
              value={this.state.aadharNumber}
              onChange={this.onChangeAadharNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"mobileNumber : "}

            <CFormInput
              value={this.state.mobileNumber}
              onChange={this.onChangemobileNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"traineeAddress : "}

            <CFormInput
              value={this.state.traineeAddress}
              onChange={this.onChangetraineeAddress}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"alternateContactNumber : "}

            <CFormInput
              value={this.state.alternateContactNumber}
              onChange={this.onChangealternateContactNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"district : "}

            <CFormInput
              value={this.state.district}
              onChange={this.onChangedistrict}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"emailId : "}

            <CFormInput
              value={this.state.emailId}
              onChange={this.onChangeemailId}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"panNumber : "}

            <CFormInput
              value={this.state.panNumber}
              onChange={this.onChangepanNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"state : "}

            <CFormInput
              value={this.state.state}
              onChange={this.onChangestate}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"voterIdNumber : "}

            <CFormInput
              value={this.state.voterIdNumber}
              onChange={this.onChangevoterIdNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"guardianContactNumber : "}

            <CFormInput
              value={this.state.guardianContactNumber}
              onChange={this.onChangeguardianContactNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"nameOfEducationalInstitute : "}

            <CFormInput
              value={this.state.nameOfEducationalInstitute}
              onChange={this.onChangenameOfEducationalInstitute}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"preJoiningCounselling : "}

            <CFormInput
              value={this.state.preJoiningCounselling}
              onChange={this.onChangepreJoiningCounselling}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"preTrainingEmploymentStatus : "}

            <CFormInput
              value={this.state.preTrainingEmploymentStatus}
              onChange={this.onChangepreTrainingEmploymentStatus}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"currentEmploymentStatus : "}

            <CFormInput
              value={this.state.currentEmploymentStatus}
              onChange={this.onChangecurrentEmploymentStatus}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"mobilisationTechnique : "}

            <CFormInput
              value={this.state.mobilisationTechnique}
              onChange={this.onChangemobilisationTechnique}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"salutation : "}

            <CFormInput
              value={this.state.salutation}
              onChange={this.onChangesalutation}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"highestEducationLevel : "}

            <CFormInput
              value={this.state.highestEducationLevel}
              onChange={this.onChangehighestEducationLevel}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"currentlyPursuingEducation : "}

            <CFormInput
              value={this.state.currentlyPursuingEducation}
              onChange={this.onChangecurrentlyPursuingEducation}
            />
          </CFormLabel>
          <div>
            <CButton type="submit" onClick={this.saveTrainee} className="mb-3">
              Submit
            </CButton>
            {"    "}
            <CButton type="submit" onClick={this.newTrainee} className="mb-3">
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
              <h4 style={{ color: "black" }}>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newTrainee}>
                Add
              </button>
            </div>
          ) : (
            <Container>
              <Row className="justify-content-center">
                <Col md={8}>
                  <Card>
                    <CardHeader className="bg-primary text-white">
                      ADD Student Profile
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
                            Pic
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
