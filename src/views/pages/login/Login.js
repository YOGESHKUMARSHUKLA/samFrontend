// import React from "react"
// import { Link } from "react-router-dom"
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow
// } from "@coreui/react"
// import CIcon from "@coreui/icons-react"
// import { cilLockLocked, cilUser } from "@coreui/icons"

// const Login = () => {
//   return (
//     <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={8}>
//             <CCardGroup>
//               <CCard className="p-4">
//                 <CCardBody>
//                   <CForm>
//                     <h1>Login</h1>
//                     <p className="text-medium-emphasis">
//                       Sign In to your account
//                     </p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <CIcon icon={cilUser} />
//                       </CInputGroupText>
//                       <CFormInput
//                         placeholder="Username"
//                         autoComplete="username"
//                       />
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupText>
//                         <CIcon icon={cilLockLocked} />
//                       </CInputGroupText>
//                       <CFormInput
//                         type="password"
//                         placeholder="Password"
//                         autoComplete="current-password"
//                       />
//                     </CInputGroup>
//                     <CRow>
//                       <CCol xs={6}>
//                         <CButton color="primary" className="px-4">
//                           Login
//                         </CButton>
//                       </CCol>
//                       <CCol xs={6} className="text-right">
//                         <CButton color="link" className="px-0">
//                           Forgot password?
//                         </CButton>
//                       </CCol>
//                     </CRow>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//               <CCard
//                 className="text-white bg-primary py-5"
//                 style={{ width: "44%" }}
//               >
//                 <CCardBody className="text-center">
//                   <div>
//                     <h2>Sign up</h2>
//                     <p></p>
//                     <Link to="/register">
//                       <CButton
//                         color="primary"
//                         className="mt-3"
//                         active
//                         tabIndex={-1}
//                       >
//                         Register Now!
//                       </CButton>
//                     </Link>
//                   </div>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   )
// }

// export default Login
// import "bootstrap/dist/css/bootstrap.min.css"
import { CAlert } from "@coreui/react"
import { Link, redirect } from "react-router-dom"
import ReCaptcha from "react-google-recaptcha"
// import Reaptcha from "reaptcha"
// import { ReCaptcha, loadReCaptcha } from "react-recaptcha-google"
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow
} from "@coreui/react"
import CIcon from "@coreui/icons-react"
import { cilLockLocked, cilUser } from "@coreui/icons"
import { initializeApp } from "firebase/app"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth"
import { useNavigate } from "react-router-dom"
import logo from "src/assets/images/logo3.jpg"
import EntitlementService from "src/services/entitlement.service.js"
import captchaImg from "./captcha.jpg"
import React, { useState, useEffect } from "react"
const firebaseConfig = {
  apiKey: "AIzaSyDWSQU1EcMIsu63oI-FdndsePSue7HVCSE",
  authDomain: "hsbc-greensavers-sams-dev.firebaseapp.com"
}
// const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"))
const app = initializeApp(firebaseConfig)

const auth = getAuth(app, {
  /* extra options */
})

const Login = () => {
  const [user, setUser] = useState({
    username: ""
  })
  const navigate = useNavigate()
  const [emailId, setEmailId] = useState("")
  const [password, setPassword] = useState("")
  const [recaptchaToken, setRecaptchaToken] = useState("")
  const [loginError, setLoginError] = useState(false)
  const [entitlements, setEntitlements] = useState({})

  const renderLoginError = () => {
    if (loginError) {
      return (
        <CAlert color="danger">Wrong credentials. Please try again.</CAlert>
      )
    }
    return null
  }

  useEffect(() => {
    console.log("use effect entitlement update")
    console.log(entitlements)
    if (Object.keys(entitlements).length != 0) {
      if (
        (entitlements.entitlement.status === "S") &
        (entitlements.entitlement.userRole != null)
      ) {
        const role = entitlements.entitlement.userRole
        const traineeId = entitlements.entitlement.traineeId
        const entitlement = entitlements.entitlement.entitlement
        localStorage.setItem("emailId", emailId)
        localStorage.setItem("role", role)
        localStorage.setItem("entitlement", entitlement)
        localStorage.setItem("traineeId", traineeId)
        navigate("/dashboard", {
          state: { emailId, password, role, entitlement, traineeId }
        })
      } else {
        navigate("/Page404")
      }
    } else if ((Object.keys(entitlements).length === 0) & (emailId === null)) {
      navigate("/Page404")
    }
  }, [entitlements])

  const navigateToPages = async () => {
    const response = await EntitlementService.get(emailId)
      .then(response => {
        console.log(response.data)
        setEntitlements(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const handleRecaptchaVerify = token => {
    setRecaptchaToken(token)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log("success")
    signInWithEmailAndPassword(auth, emailId, password)
      .then(function (firebaseUser) {
        console.log("got success login")
        // navigate("/dashboard")
        navigateToPages()
      })
      .catch(error => {
        console.log(error)

        setLoginError(true)
      })
  }
  const logged = () => {
    console.log("success")
    signInWithEmailAndPassword(auth, emailId, password)
      .then(function (firebaseUser) {
        console.log("got success login")
        // navigate("/dashboard")
        navigateToPages()
      })
      .catch(error => {
        console.log(error)

        setLoginError(true)
      })
  }

  const characters = "abc123"
  function generateString(length) {
    let result = ""
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }
  const captcha = generateString(6) // Function called here and save in captcha variable
  let handleChange = e => {
    let name = e.target.name
    let value = e.target.value
    user[name] = value
    setUser(user)
  }
  const onSubmit = e => {
    var element = document.getElementById("succesBTN")
    var inputData = document.getElementById("inputType")
    element.style.cursor = "wait"
    element.innerHTML = "Checking..."
    inputData.disabled = true
    element.disabled = true
    var myFunctions = function () {
      if (captcha == user.username) {
        element.style.backgroundColor = "green"
        element.innerHTML = "Captcha Verified"
        element.disabled = true
        element.style.cursor = "not-allowed"
        inputData.style.display = "none"
        setRecaptchaToken(true)
        logged()
      } else {
        element.style.backgroundColor = "red"
        element.style.cursor = "not-allowed"
        element.innerHTML = "Not Matched"
        element.disabled = true
        //  element.disabled = true;
        var myFunction = function () {
          element.style.backgroundColor = "#007bff"
          element.style.cursor = "pointer"
          element.innerHTML = "Verify Captcha"
          element.disabled = false
          inputData.disabled = false
          inputData.value = "sssss"
        }
        setTimeout(myFunction, 5000)
      }
    }
    setTimeout(myFunctions, 5000)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <div>
                    <img src={logo} alt="logo" />
                    <p>Student Assessment Management System</p>
                  </div>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        value={emailId}
                        onChange={e => setEmailId(e.target.value)}
                        type="email"
                        placeholder="EmailID"
                        autoComplete="EmailID"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <div className="row mt-4">
                        <div className="col-md-8">
                          <h4
                            id="captcha"
                            style={{
                              marginTop: "26px",
                              marginLeft: "25px",
                              position: "absolute"
                            }}
                          >
                            {captcha}
                          </h4>
                          <div className="form-group row">
                            <img
                              src={captchaImg}
                              className="mt-3 mb-3"
                              height="50"
                            />
                          </div>
                        </div>
                      </div>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="inputType"
                        // className="form-control"
                        placeholder="Enter Captcha"
                        name="username"
                        onChange={handleChange}
                        autoComplete="off"
                        // style={{ width: "100%" }}
                      />{" "}
                    </CInputGroup>
                    {/* <CInputGroup className="mb-4">
                      <CButton
                        type="button"
                        id="succesBTN"
                        onClick={onSubmit}
                        className="btn btn-primary ml-1"
                      >
                        Verify Captcha
                      </CButton>
                    </CInputGroup> */}
                    {/* <CInputGroup className="mb-4">
                      <ReCaptcha
                        sitekey="6LeWBSonAAAAAMSLofScDZ9zKlplXEmrSnXuLoNK"
                        render="explicit"
                        // onloadCallback={handleRecaptchaLoaded}
                        verifyCallback={handleRecaptchaVerify}
                      />
                    </CInputGroup> */}
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          id="succesBTN"
                          type="button"
                          color="primary"
                          className="px-4"
                          onClick={onSubmit}
                          // disabled={!recaptchaToken}
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                  {renderLoginError()}
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <div>
                      <img src={logo} alt="logo" />
                    </div>
                    <p>Student Assessment Management System</p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
