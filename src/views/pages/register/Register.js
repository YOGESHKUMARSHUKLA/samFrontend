import React, { useEffect, useState } from "react"
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CFormCheck,
  CAlert,
  CFormSelect,
  CRow
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { cilLockLocked } from "@coreui/icons"
import { initializeApp } from "firebase/app"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import TraineeDataService from "src/services/trainee.service.js"
import EntitlementService from "src/services/entitlement.service.js"
import { useNavigate } from "react-router-dom"
const firebaseConfig = {
  apiKey: "AIzaSyDWSQU1EcMIsu63oI-FdndsePSue7HVCSE",
  authDomain: "hsbc-greensavers-sams-dev.firebaseapp.com"
}
// const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"))
const app = initializeApp(firebaseConfig)

const auth = getAuth(app, {
  /* extra options */
})

const Register = () => {
  const navigate = useNavigate()
  const [emailId, setEmailId] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmpassword] = useState("")
  const [identifier, setIdentifier] = useState("")
  const [identifyingNumber, setIdentifyingNumber] = useState("")
  const [userExisting, setuserExisting] = useState("")
  const [registrationError, setRegistrationError] = useState(false)
  const [trainees, setTrainees] = useState({})
  const renderRegistrationError = () => {
    if (registrationError) {
      return (
        <CAlert color="danger">
          Incorrect emailId or Password. Please try again.
        </CAlert>
      )
    }
    return null
  }

  const saveEntitlement = async () => {
    console.log("entitlement call")
    console.log(trainees)
    var traineeID = 0
    var status = "S"
    var userExists = "N"
    if ((userExisting === "Existing") & (trainees.responseCode === "200")) {
      console.log("inside")
      traineeID = trainees.trainee.traineeId
    }
    if (userExisting) {
      userExists = "Y"
      if (traineeID === 0) {
        status = "E"
      }
    }
    var data = {
      entitlement: {
        userId: emailId,
        traineeId: traineeID,
        linkParameter: identifier,
        linkValue: identifyingNumber,
        status: status,
        existingUserInd: userExists
      }
    }
    console.log(data)
    const response = await EntitlementService.create(data)
      .then(response => {
        console.log(response.data)
        navigate("/Page404")
      })
      .catch(e => {
        console.log(e)
      })
  }
  useEffect(() => {
    console.log("use effect trainee update")
    console.log(trainees)
    if (emailId !== "") {
      saveEntitlement()
    }
  }, [trainees])
  const getTrainee = async () => {
    console.log("get trainee for existing and entitlement call")
    const response = await TraineeDataService.getSingleTrainee(
      identifier,
      identifyingNumber
    )
      .then(response => {
        console.log(response)
        console.log(response.data)
        const trainee = response.data
        //console.log(trainee)
        setTrainees(trainee)
        console.log("trainees")
        console.log(trainees)
      })
      .catch(error => {
        console.log("Error creating new user:", error)
        setRegistrationError(true)
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("success")
    console.log(emailId)
    console.log(password)
    console.log(confirmpassword)
    console.log(userExisting)
    console.log(identifier)
    console.log(identifyingNumber)
    if (password !== confirmpassword) {
      console.log("Password mismatch")
      setRegistrationError(true)
    } else {
      console.log("same passwords")
      setRegistrationError(false)

      createUserWithEmailAndPassword(auth, emailId, password)
        .then(userRecord => {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully created new user:", userRecord.user.uid)
          if (userExisting === "Existing") {
            try {
              getTrainee()
            } catch (error) {
              console.error(error)
            }
          } else {
            saveEntitlement()
          }
        })
        .catch(error => {
          console.log("Error creating new user:", error)
          setRegistrationError(true)
        })
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      value={emailId}
                      onChange={e => setEmailId(e.target.value)}
                      placeholder="Email"
                      autoComplete="email"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      value={confirmpassword}
                      onChange={e => setConfirmpassword(e.target.value)}
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-5">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormSelect
                      value={identifier}
                      onChange={e => setIdentifier(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option>Identifier</option>
                      <option value="aadharNumber">Aadhaar Card Number</option>
                      <option value="panNumber">PAN Card Number</option>
                      <option value="voterIdNumber">Voter Id Number</option>
                      <option value="mobileNumber">Mobile Number</option>
                    </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      value={identifyingNumber}
                      onChange={e => setIdentifyingNumber(e.target.value)}
                      placeholder="Enter Identifying Number"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormCheck
                      value="Existing"
                      onChange={e => setuserExisting(e.target.value)}
                      inline
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineCheckbox1"
                      label="Existing"
                    />
                    <CFormCheck
                      value="New"
                      onChange={e => setuserExisting(e.target.value)}
                      inline
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineCheckbox2"
                      label="New"
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type="submit" color="success">
                      Create Account
                    </CButton>
                  </div>
                </CForm>
                {renderRegistrationError()}
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
