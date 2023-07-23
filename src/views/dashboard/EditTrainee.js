import React, { Component } from "react"
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap"
import TraineeDataService from "../../services/trainee.service"
import axios from "axios"
import { CImage } from "@coreui/react"
import GoogleDataService from "../../services/google.service"
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
export default class EditTrainee extends Component {
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
    this.onChangepartnerName = this.onChangepartnerName.bind(this)
    this.onChangecentreAddress = this.onChangecentreAddress.bind(this)
    this.onChangecentreLocation = this.onChangecentreLocation.bind(this)
    this.onChangelastUpdateTimestamp =
      this.onChangelastUpdateTimestamp.bind(this)
    this.onChangecreationTimestamp = this.onChangecreationTimestamp.bind(this)

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
        implementingPartnerDetails: {
          partnerName: "",
          centreAddress: "",
          centreLocation: ""
        },
        nameOfTrainee: "",
        lastUpdateTimestamp: "",
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
  state = {
    file: null,
    uploading: false,
    uploadProgress: 0,
    uploadedFileUrl: null
  }
  componentDidMount() {
    this.fetchData()
    this.updateDateTimeInterval = setInterval(this.updateDateTime, 1000)
    this.updateClientTimeZone()
  }
  updateClientTimeZone = () => {
    const clientTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    this.setState({ clientTimeZone })
  }
  componentWillUnmount() {
    clearInterval(this.updateDateTimeInterval)
  }
  padNumber = (number, length = 2) => {
    return String(number).padStart(length, "0")
  }
  updateDateTime = () => {
    const dateObj = new Date()
    const year = dateObj.getFullYear()
    const month = this.padNumber(dateObj.getMonth() + 1)
    const day = this.padNumber(dateObj.getDate())
    const hours = this.padNumber(dateObj.getHours() + 5)
    const minutes = this.padNumber(dateObj.getMinutes() + 30)
    const seconds = this.padNumber(dateObj.getSeconds())
    const milliseconds = this.padNumber(dateObj.getMilliseconds(), 3)

    const creationTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`

    this.setState({ creationTimestamp })

    const lastUpdateTimestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`

    this.setState({ lastUpdateTimestamp: lastUpdateTimestamp })
  }
  fetchData = async () => {
    try {
      const response = await GoogleDataService.getAll()
      console.log(response.data[0][1].id)
      const images = response.data[0]
        .filter(
          item => item.id === `uploads%2F${this.state.traineeId}_post.jpeg`
        )
        .map(item => ({
          id: item.id,
          url: `https://storage.googleapis.com/storagesam/${item.id}` // Replace with the actual URL format for your images
        }))
      const csvs = response.data[0]
        .filter(item => item.id.includes("csv"))
        .map(item => ({
          id: item.id,
          url: `https://storage.googleapis.com/storagesam/${item.id}` // Replace with the actual URL format for your images
        }))

      this.setState({ images })
      this.setState({ csvs })
    } catch (error) {
      console.error(error)
    }
  }

  fetchTrainee = async () => {
    const role = localStorage.getItem("role")
    const entitlement = localStorage.getItem("entitlement")
    const traineeIdy = localStorage.getItem("traineeId")
    try {
      if (role === "Admin") {
        var res = await TraineeDataService.get(this.state.traineeId)
      }
      if (role === "Student") {
        var res = await TraineeDataService.get(traineeIdy)
      }
      // .then(
      //   response => {
      this.setState({
        trainee: {
          technicalEducation: res.data.trainee.technicalEducation,
          gender: res.data.trainee.gender,
          guardianType: res.data.trainee.guardianType,
          familyEconomicStatus: res.data.trainee.familyEconomicStatus,
          dateOfBirth: res.data.trainee.dateOfBirth,
          traineeId: res.data.trainee.traineeId,
          numberOfFamilyMembers: res.data.trainee.nameOfEducationalInstitute,
          disabilityDetails: {
            pwdCertificate: res.data.trainee.pwdCertificate,
            typeOfDisability: res.data.trainee.typeOfDisability
          },
          implementingPartnerDetails: {
            partnerName: res.data.trainee.partnerName,
            centreAddress: res.data.trainee.centreAddress,
            centreLocation: res.data.trainee.centreLocation
          },
          nameOfTrainee: res.data.trainee.nameOfTrainee,
          lastUpdateTimestamp: res.data.trainee.lastUpdateTimestamp,
          nameOfTrainee: res.data.trainee.nameOfTrainee,
          identificationDetails: {
            pincode: res.data.trainee.pincode,
            aadharNumber: res.data.trainee.aadharNumber,
            mobileNumber: res.data.trainee.mobileNumber,
            traineeAddress: res.data.trainee.traineeAddress,
            typeOfIdentification: res.data.trainee.typeOfIdentification,
            district: res.data.trainee.district,
            alternateContactNumber: res.data.trainee.alternateContactNumber,
            emailId: res.data.trainee.emailId,
            panNumber: res.data.trainee.panNumber,
            state: res.data.trainee.state,
            voterIdNumber: res.data.trainee.voterIdNumber,
            guardianContactNumber: res.data.trainee.guardianContactNumber
          },
          sourceOfHouseholdIncome: res.data.trainee.sourceOfHouseholdIncome,
          nameOfGuardian: res.data.trainee.nameOfGuardian,
          annualHouseholdIncome: res.data.trainee.annualHouseholdIncome,
          creationTimestamp: res.data.trainee.creationTimestamp,
          nameOfEducationalInstitute:
            res.data.trainee.nameOfEducationalInstitute,
          preTrainingDetails: {
            preJoiningCounselling: res.data.trainee.preJoiningCounselling,
            preTrainingEmploymentStatus: res.data.trainee.preTrainingDetails,
            currentEmploymentStatus: res.data.trainee.currentEmploymentStatus,
            mobilisationTechnique: res.data.trainee.mobilisationTechnique
          },
          salutation: res.data.trainee.salutation,
          traineeAnnualIncome: res.data.trainee.traineeAnnualIncome,
          highestEducationLevel: res.data.trainee.highestEducationLevel,
          maritalStatus: res.data.trainee.maritalStatus,
          casteCategory: res.data.trainee.casteCategory,
          currentlyPursuingEducation:
            res.data.trainee.currentlyPursuingEducation
        }
      })
      //   }
      // )
      console.log("Ressspons : ", res)
      console.log(this.state.trainee)
      const response = await GoogleDataService.getAll()
      console.log(response.data[0][1].id)
      const images = response.data[0]
        .filter(
          item => item.id === `uploads%2F${this.state.traineeId}_post.jpeg`
        )
        .map(item => ({
          id: item.id,
          url: `https://storage.googleapis.com/storagesam/${item.id}` // Replace with the actual URL format for your images
        }))
      const csvs = response.data[0]
        .filter(item => item.id.includes("csv"))
        .map(item => ({
          id: item.id,
          url: `https://storage.googleapis.com/storagesam/${item.id}` // Replace with the actual URL format for your images
        }))

      this.setState({ images })
      this.setState({ csvs })
    } catch (error) {
      console.error(error)
    }
  }
  uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    )
  }
  handleFileUpload = async () => {
    const file = this.state.file
    if (!file) {
      alert("Please select a file.")
      return
    }
    const url = `https://samnodebackend-ba3cryd7aq-df.a.run.app/upload`
    const headers = {
      "Content-Type": "multipart/form-data",
      // "Content-type": "application/json",
      Accept: "image/jpeg, image/png, text/csv, application/vnd.ms-excel"
    }

    try {
      this.setState({ uploading: true, uploadProgress: 0 })

      let postid = this.state.traineeId
      let filez = this.state.file
      console.log(filez)
      // Create new file so we can rename the file
      let blob = filez.slice(0, filez.size, "image/jpeg")
      const newFile = new File([blob], `${postid}_post.jpeg`, {
        type: "image/jpeg"
      })
      console.log(newFile)
      // Build the form data - You can add other input values to this i.e descriptions, make sure img is appended last
      const formData = new FormData()
      formData.append("imgfile", newFile)
      console.log(formData)

      const response = await axios.post(url, formData, {
        headers,
        onUploadProgress: this.handleUploadProgress
      })

      if (response.status === 200) {
        alert("File uploaded successfully!")
      } else {
        alert("Error uploading file.")
      }
    } catch (error) {
      console.error("Error uploading file:", error)
      alert("Error uploading file.")
    } finally {
      this.setState({ uploading: false })
      this.fetchData()
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

  onChangecreationTimestamp(e) {
    this.setState({
      creationTimestamp: e.target.value
    })
  }
  onChangelastUpdateTimestamp(e) {
    this.setState({
      lastUpdateTimestamp: e.target.value
    })
  }
  onChangepartnerName(e) {
    this.setState({
      partnerName: e.target.value
    })
  }
  onChangecurrentlyPursuingEducation(e) {
    this.setState({
      currentlyPursuingEducation: e.target.value
    })
  }
  onChangecentreAddress(e) {
    this.setState({
      centreAddress: e.target.value
    })
  }
  onChangecentreLocation(e) {
    this.setState({
      centreLocation: e.target.value
    })
  }

  handleFileChange = event => {
    this.setState({
      file: event.target.files[0],
      uploadedFileUrl: null
    })
  }

  saveTrainee() {
    // var data = {
    //   trainee: {
    //     technicalEducation: this.state.technicalEducation,
    //     gender: this.state.gender,
    //     guardianType: this.state.guardianType,
    //     familyEconomicStatus: this.state.familyEconomicStatus,
    //     dateOfBirth: this.state.dateOfBirth,
    //     traineeId: this.state.traineeId,
    //     numberOfFamilyMembers: this.state.nameOfEducationalInstitute,
    //     disabilityDetails: {
    //       pwdCertificate: this.state.pwdCertificate,
    //       typeOfDisability: this.state.typeOfDisability
    //     },
    //     implementingPartnerDetails: {
    //       partnerName: this.state.partnerName,
    //       centreAddress: this.state.centreAddress,
    //       centreLocation: this.state.centreLocation
    //     },
    //     nameOfTrainee: this.state.nameOfTrainee,
    //     lastUpdateTimestamp: this.state.lastUpdateTimestamp,

    //     identificationDetails: {
    //       pincode: this.state.pincode,
    //       aadharNumber: this.state.aadharNumber,
    //       mobileNumber: this.state.mobileNumber,
    //       traineeAddress: this.state.traineeAddress,
    //       typeOfIdentification: this.state.typeOfIdentification,
    //       district: this.state.district,
    //       alternateContactNumber: this.state.alternateContactNumber,
    //       emailId: this.state.emailId,
    //       panNumber: this.state.panNumber,
    //       state: this.state.state,
    //       voterIdNumber: this.state.voterIdNumber,
    //       guardianContactNumber: this.state.guardianContactNumber
    //     },
    //     sourceOfHouseholdIncome: this.state.sourceOfHouseholdIncome,
    //     nameOfGuardian: this.state.nameOfGuardian,
    //     annualHouseholdIncome: this.state.annualHouseholdIncome,
    //     creationTimestamp: this.state.creationTimestamp,
    //     nameOfEducationalInstitute: this.state.nameOfEducationalInstitute,
    //     preTrainingDetails: {
    //       preJoiningCounselling: this.state.preJoiningCounselling,
    //       preTrainingEmploymentStatus: this.state.preTrainingDetails,
    //       currentEmploymentStatus: this.state.currentEmploymentStatus,
    //       mobilisationTechnique: this.state.mobilisationTechnique
    //     },
    //     salutation: this.state.salutation,
    //     traineeAnnualIncome: this.state.traineeAnnualIncome,
    //     highestEducationLevel: this.state.highestEducationLevel,
    //     maritalStatus: this.state.maritalStatus,
    //     casteCategory: this.state.casteCategory,
    //     currentlyPursuingEducation: this.state.currentlyPursuingEducation
    //   }
    // }
    const role = localStorage.getItem("role")
    const entitlement = localStorage.getItem("entitlement")
    const traineeIdy = localStorage.getItem("traineeId")
    var data = { trainee: this.state.trainee }

    if (this.state.salutation !== "" && this.state.salutation !== undefined) {
      data.trainee.salutation = this.state.salutation
    }
    if (
      this.state.nameOfTrainee !== "" &&
      this.state.nameOfTrainee !== undefined
    ) {
      data.trainee.nameOfTrainee = this.state.nameOfTrainee
    }
    if (
      this.state.technicalEducation !== "" &&
      this.state.technicalEducation !== undefined
    ) {
      data.trainee.technicalEducation = this.state.technicalEducation
    }
    if (
      this.state.familyEconomicStatus !== "" &&
      this.state.familyEconomicStatus !== undefined
    ) {
      data.trainee.familyEconomicStatus = this.state.familyEconomicStatus
    }
    if (
      this.state.guardianType !== "" &&
      this.state.guardianType !== undefined
    ) {
      data.trainee.guardianType = this.state.guardianType
    }
    if (this.state.dateOfBirth !== "" && this.state.dateOfBirth !== undefined) {
      data.trainee.dateOfBirth = this.state.dateOfBirth
    }
    if (
      this.state.numberOfFamilyMembers !== "" &&
      this.state.numberOfFamilyMembers !== undefined
    ) {
      data.trainee.numberOfFamilyMembers = this.state.numberOfFamilyMembers
    }
    if (this.state.pincode !== "" && this.state.pincode !== undefined) {
      data.trainee.identificationDetails.pincode = this.state.pincode
    }
    if (
      this.state.aadharNumber !== "" &&
      this.state.aadharNumber !== undefined
    ) {
      data.trainee.identificationDetails.aadharNumber = this.state.aadharNumber
    }
    if (
      this.state.mobileNumber !== "" &&
      this.state.mobileNumber !== undefined
    ) {
      data.trainee.identificationDetails.mobileNumber = this.state.mobileNumber
    }
    if (
      this.state.traineeAddress !== "" &&
      this.state.traineeAddress !== undefined
    ) {
      data.trainee.identificationDetails.traineeAddress =
        this.state.traineeAddress
    }
    if (this.state.district !== "" && this.state.district !== undefined) {
      data.trainee.identificationDetails.district = this.state.district
    }
    if (
      this.state.typeOfIdentification !== "" &&
      this.state.typeOfIdentification !== undefined
    ) {
      data.trainee.identificationDetails.typeOfIdentification =
        this.state.typeOfIdentification
    }
    if (
      this.state.alternateContactNumber !== "" &&
      this.state.alternateContactNumber !== undefined
    ) {
      data.trainee.identificationDetails.alternateContactNumber =
        this.state.alternateContactNumber
    }

    if (this.state.emailId !== "" && this.state.emailId !== undefined) {
      data.trainee.identificationDetails.emailId = this.state.emailId
    }
    if (this.state.panNumber !== "" && this.state.panNumber !== undefined) {
      data.trainee.identificationDetails.panNumber = this.state.panNumber
    }
    if (this.state.state !== "" && this.state.state !== undefined) {
      data.trainee.identificationDetails.state = this.state.state
    }
    if (
      this.state.voterIdNumber !== "" &&
      this.state.voterIdNumber !== undefined
    ) {
      data.trainee.identificationDetails.voterIdNumber =
        this.state.voterIdNumber
    }
    if (
      this.state.guardianContactNumber !== "" &&
      this.state.guardianContactNumber !== undefined
    ) {
      data.trainee.identificationDetails.guardianContactNumber =
        this.state.guardianContactNumber
    }
    if (
      this.state.pwdCertificate !== "" &&
      this.state.pwdCertificate !== undefined
    ) {
      data.trainee.disabilityDetails.pwdCertificate = this.state.pwdCertificate
    }
    if (
      this.state.typeOfDisability !== "" &&
      this.state.typeOfDisability !== undefined
    ) {
      data.trainee.disabilityDetails.typeOfDisability =
        this.state.typeOfDisability
    }
    if (this.state.partnerName !== "" && this.state.partnerName !== undefined) {
      data.trainee.implementingPartnerDetails.partnerName =
        this.state.partnerName
    }
    if (
      this.state.centreAddress !== "" &&
      this.state.centreAddress !== undefined
    ) {
      data.trainee.implementingPartnerDetails.centreAddress =
        this.state.centreAddress
    }
    if (
      this.state.centreLocation !== "" &&
      this.state.centreLocation !== undefined
    ) {
      data.trainee.implementingPartnerDetails.centreLocation =
        this.state.centreLocation
    }
    if (
      this.state.sourceOfHouseholdIncome !== "" &&
      this.state.sourceOfHouseholdIncome !== undefined
    ) {
      data.trainee.sourceOfHouseholdIncome = this.state.sourceOfHouseholdIncome
    }
    if (
      this.state.nameOfGuardian !== "" &&
      this.state.nameOfGuardian !== undefined
    ) {
      data.trainee.nameOfGuardian = this.state.nameOfGuardian
    }
    if (
      this.state.annualHouseholdIncome !== "" &&
      this.state.annualHouseholdIncome !== undefined
    ) {
      data.trainee.annualHouseholdIncome = this.state.annualHouseholdIncome
    }
    if (
      this.state.nameOfEducationalInstitute !== "" &&
      this.state.nameOfEducationalInstitute !== undefined
    ) {
      data.trainee.nameOfEducationalInstitute =
        this.state.nameOfEducationalInstitute
    }
    if (
      this.state.traineeAnnualIncome !== "" &&
      this.state.traineeAnnualIncome !== undefined
    ) {
      data.trainee.traineeAnnualIncome = this.state.traineeAnnualIncome
    }
    if (
      this.state.highestEducationLevel !== "" &&
      this.state.highestEducationLevel !== undefined
    ) {
      data.trainee.highestEducationLevel = this.state.highestEducationLevel
    }
    if (
      this.state.maritalStatus !== "" &&
      this.state.maritalStatus !== undefined
    ) {
      data.trainee.maritalStatus = this.state.maritalStatus
    }
    if (
      this.state.casteCategory !== "" &&
      this.state.casteCategory !== undefined
    ) {
      data.trainee.casteCategory = this.state.casteCategory
    }

    if (
      this.state.currentlyPursuingEducation !== "" &&
      this.state.currentlyPursuingEducation !== undefined
    ) {
      data.trainee.currentlyPursuingEducation =
        this.state.currentlyPursuingEducation
    }
    if (
      this.state.preJoiningCounselling !== "" &&
      this.state.preJoiningCounselling !== undefined
    ) {
      data.trainee.preTrainingDetails.preJoiningCounselling =
        this.state.preJoiningCounselling
    }
    if (
      this.state.preTrainingEmploymentStatus !== "" &&
      this.state.preTrainingEmploymentStatus !== undefined
    ) {
      data.trainee.preTrainingDetails.preTrainingEmploymentStatus =
        this.state.preTrainingEmploymentStatus
    }
    if (
      this.state.currentEmploymentStatus !== "" &&
      this.state.currentEmploymentStatus !== undefined
    ) {
      data.trainee.preTrainingDetails.currentEmploymentStatus =
        this.state.currentEmploymentStatus
    }
    if (
      this.state.mobilisationTechnique !== "" &&
      this.state.mobilisationTechnique !== undefined
    ) {
      data.trainee.preTrainingDetails.mobilisationTechnique =
        this.state.mobilisationTechnique
    }
    if (
      this.state.lastUpdateTimestamp !== "" &&
      this.state.lastUpdateTimestamp !== undefined
    ) {
      data.trainee.lastUpdateTimestamp = this.state.lastUpdateTimestamp
    }

    console.log(data)
    TraineeDataService.update(this.state.traineeId, data)
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
            implementingPartnerDetails: {
              partnerName: response.data.trainee.partnerName,
              centreAddress: response.data.trainee.centreAddress,
              centreLocation: response.data.trainee.centreLocation
            },
            nameOfTrainee: response.data.trainee.nameOfTrainee,
            lastUpdateTimestamp: response.data.trainee.lastUpdateTimestamp,

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
            creationTimestamp: response.data.trainee.creationTimestamp,
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
        implementingPartnerDetails: {
          partnerName: "",
          centreAddress: "",
          centreLocation: ""
        },
        nameOfTrainee: "",
        lastUpdateTimestamp: "",
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
        creationTimestamp: "",
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
          {/* <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Trainee Id : "}

            <CFormInput
              value={this.state.trainee.traineeId}
              onChange={this.onChangeTraineeId}
            />
          </CFormLabel>{" "} */}
          <CFormLabel htmlFor="exampleFormControlTextarea2">
            {"Name Of Trainee : "}

            <CFormInput
              value={this.state.nameOfTrainee}
              placeholder={this.state.trainee.nameOfTrainee}
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
              placeholder={this.state.trainee.typeOfIdentification}
              onChange={this.onChangetypeOfIdentification}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"DOB : "}

            <CFormInput
              value={this.state.dateOfBirth}
              placeholder={this.state.trainee.dateOfBirth}
              onChange={this.onChangeDateOfBirth}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Gender : "}

            <CFormInput
              value={this.state.gender}
              placeholder={this.state.trainee.gender}
              onChange={this.onChangeGender}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Marital Status : "}

            <CFormInput
              value={this.state.maritalStatus}
              placeholder={this.state.trainee.maritalStatus}
              onChange={this.onChangemaritalStatus}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Caste Category : "}

            <CFormInput
              value={this.state.casteCategory}
              placeholder={this.state.trainee.casteCategory}
              onChange={this.onChangecasteCategory}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Guardian Type : "}

            <CFormInput
              value={this.state.guardianType}
              placeholder={this.state.trainee.guardianType}
              onChange={this.onChangeGuardianType}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Name of Guardian/Spouse/Parent : "}

            <CFormInput
              value={this.state.nameOfGuardian}
              placeholder={this.state.trainee.nameOfGuardian}
              onChange={this.onChangenameOfGuardian}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Family Economic Status : "}

            <CFormInput
              value={this.state.familyEconomicStatus}
              placeholder={this.state.trainee.familyEconomicStatus}
              onChange={this.onChangeFamilyEconomicStatus}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Source of Household Income : "}

            <CFormInput
              value={this.state.sourceOfHouseholdIncome}
              placeholder={this.state.trainee.sourceOfHouseholdIncome}
              onChange={this.onChangesourceOfHouseholdIncome}
            />
          </CFormLabel>{" "}
          {/* <div className="mb-3 sm col-xs-offset-2"> */}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Trainee Annual Income : "}

            <CFormInput
              value={this.state.traineeAnnualIncome}
              placeholder={this.state.trainee.traineeAnnualIncome}
              onChange={this.onChangetraineeAnnualIncome}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Annual Household Income : "}

            <CFormInput
              value={this.state.annualHouseholdIncome}
              placeholder={this.state.trainee.annualHouseholdIncome}
              onChange={this.onChangeannualHouseholdIncome}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Number Of Fammily Members : "}

            <CFormInput
              value={this.state.numberOfFamilyMembers}
              placeholder={this.state.trainee.numberOfFamilyMembers}
              onChange={this.onChangeNumberOfFamilyMembers}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"PWD Cert : "}

            <CFormInput
              value={this.state.pwdCertificate}
              placeholder={this.state.trainee.pwdCertificate}
              onChange={this.onChangePwdCertificate}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Type Of Disability : "}

            <CFormInput
              value={this.state.typeOfDisability}
              placeholder={this.state.trainee.typeOfDisability}
              onChange={this.onChangeTypeOfDisability}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"Pincode : "}

            <CFormInput
              value={this.state.pincode}
              placeholder={this.state.trainee.pincode}
              onChange={this.onChangePincode}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"aadharNumber : "}

            <CFormInput
              value={this.state.aadharNumber}
              placeholder={this.state.trainee.aadharNumber}
              onChange={this.onChangeAadharNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"mobileNumber : "}

            <CFormInput
              value={this.state.mobileNumber}
              placeholder={this.state.trainee.mobileNumber}
              onChange={this.onChangemobileNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"traineeAddress : "}

            <CFormInput
              value={this.state.traineeAddress}
              placeholder={this.state.trainee.traineeAddress}
              onChange={this.onChangetraineeAddress}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"alternateContactNumber : "}

            <CFormInput
              value={this.state.alternateContactNumber}
              placeholder={this.state.trainee.alternateContactNumber}
              onChange={this.onChangealternateContactNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"district : "}

            <CFormInput
              value={this.state.district}
              placeholder={this.state.trainee.district}
              onChange={this.onChangedistrict}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"emailId : "}

            <CFormInput
              value={this.state.emailId}
              placeholder={this.state.trainee.emailId}
              onChange={this.onChangeemailId}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"panNumber : "}

            <CFormInput
              value={this.state.panNumber}
              placeholder={this.state.trainee.panNumber}
              onChange={this.onChangepanNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"state : "}

            <CFormInput
              value={this.state.state}
              placeholder={this.state.trainee.state}
              onChange={this.onChangestate}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"voterIdNumber : "}

            <CFormInput
              value={this.state.voterIdNumber}
              placeholder={this.state.trainee.voterIdNumber}
              onChange={this.onChangevoterIdNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"guardianContactNumber : "}

            <CFormInput
              value={this.state.guardianContactNumber}
              placeholder={this.state.trainee.guardianContactNumber}
              onChange={this.onChangeguardianContactNumber}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"nameOfEducationalInstitute : "}

            <CFormInput
              value={this.state.nameOfEducationalInstitute}
              placeholder={this.state.trainee.nameOfEducationalInstitute}
              onChange={this.onChangenameOfEducationalInstitute}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"preJoiningCounselling : "}

            <CFormInput
              value={this.state.preJoiningCounselling}
              placeholder={this.state.trainee.preJoiningCounselling}
              onChange={this.onChangepreJoiningCounselling}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"preTrainingEmploymentStatus : "}

            <CFormInput
              value={this.state.preTrainingEmploymentStatus}
              placeholder={this.state.trainee.preTrainingEmploymentStatus}
              onChange={this.onChangepreTrainingEmploymentStatus}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"currentEmploymentStatus : "}

            <CFormInput
              value={this.state.currentEmploymentStatus}
              placeholder={this.state.trainee.currentEmploymentStatus}
              onChange={this.onChangecurrentEmploymentStatus}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"mobilisationTechnique : "}

            <CFormInput
              value={this.state.mobilisationTechnique}
              placeholder={this.state.trainee.mobilisationTechnique}
              onChange={this.onChangemobilisationTechnique}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"salutation : "}

            <CFormInput
              value={this.state.salutation}
              placeholder={this.state.trainee.salutation}
              onChange={this.onChangesalutation}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"highestEducationLevel : "}

            <CFormInput
              value={this.state.highestEducationLevel}
              placeholder={this.state.trainee.highestEducationLevel}
              onChange={this.onChangehighestEducationLevel}
            />
          </CFormLabel>{" "}
          <CFormLabel htmlFor="exampleFormControlTextarea1">
            {"currentlyPursuingEducation : "}

            <CFormInput
              value={this.state.currentlyPursuingEducation}
              placeholder={this.state.trainee.currentlyPursuingEducation}
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
  handleFileChange = event => {
    this.setState({
      file: event.target.files[0],
      uploadedFileUrl: null
    })
  }

  handleUploadProgress = progressEvent => {
    const { loaded, total } = progressEvent
    const uploadProgress = Math.round((loaded / total) * 100)
    this.setState({ uploadProgress })
  }

  render() {
    const role = localStorage.getItem("role")
    const entitlement = localStorage.getItem("entitlement")
    const traineeIdy = localStorage.getItem("traineeId")
    const { uploading, uploadProgress, uploadedFileUrl, images, csvs } =
      this.state
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
                      Edit Student Profile
                    </CardHeader>
                    <CardBody>
                      <Row className="mb-4">
                        <Col sm={4}>
                          {role !== "Student" ? (
                            <CFormLabel htmlFor="exampleFormControlTextarea1">
                              {"Trainee Id : "}

                              <CFormInput
                                value={this.state.traineeId}
                                onChange={this.onChangeTraineeId}
                              />
                              {"    "}
                              <CButton
                                type="submit"
                                onClick={this.fetchTrainee}
                                className="mb-3"
                              >
                                Fetch Details
                              </CButton>
                            </CFormLabel>
                          ) : (
                            <CButton
                              type="submit"
                              onClick={this.fetchTrainee}
                              className="mb-3"
                            >
                              Fetch Details
                            </CButton>
                          )}

                          <div className="image-gallery">
                            {images &&
                              images.map(image => (
                                <CImage
                                  //     width={200}
                                  // height={200}
                                  align="center"
                                  rounded
                                  key={image.id}
                                  src={image.url}
                                  alt={image.id}
                                  className="gallery-image"
                                  style={{
                                    width: "200px",
                                    height: "200px",
                                    border: "1px solid #ccc",
                                    padding: "10px",
                                    borderRadius: "5px"
                                  }}
                                />
                              ))}
                            {"     "}
                          </div>
                          {/* <CImage
                            width={200}
                            height={200}
                            align="center"
                            rounded
                            src=""
                          ></CImage> */}
                          <CInputGroup className="mb-3">
                            <CFormInput
                              type="file"
                              id="inputGroupFile02"
                              size="sm"
                              onChange={this.handleFileChange}
                            />
                            <CInputGroupText
                              component="label"
                              htmlFor="inputGroupFile02"
                              onClick={this.handleFileUpload}
                            >
                              Upload
                            </CInputGroupText>
                          </CInputGroup>
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
