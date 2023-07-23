import React from "react"
import PropTypes from "prop-types"
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader
} from "../components/index"
import { useLocation } from "react-router-dom"
import { useState } from "react"
const DefaultLayout = () => {
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [entitlements, setEntitlements] = useState("")
  const [roles, setRoles] = useState("")
  const [Trainee, setTrainee] = useState("")
  const [check, setCheck] = useState(false)
  const location = useLocation()

  // if (!location.state || !location.state.emailId || !location.state.role) {
  //   return (
  //     <div>
  //       <AppSidebar emailId={email} role={roles} entitlement={entitlements} />{" "}
  //       <div className="wrapper d-flex flex-column min-vh-100 bg-light">
  //         <AppHeader />
  //         <div className="body flex-grow-1 px-3">
  //           <AppContent />
  //         </div>
  //         <AppFooter />
  //       </div>
  //     </div>
  //   )
  // }
  // const { emailId, password, role, entitlement, traineeId } = location.state
  const emailId = localStorage.getItem("emailId")
  const role = localStorage.getItem("role")
  const entitlement = localStorage.getItem("entitlement")
  const traineeId = localStorage.getItem("traineeId")
  if (!check) {
    setCheck(true)
    setEmail(emailId)
    setPwd("")
    setEntitlements(entitlement)
    setRoles(role)
    setTrainee(traineeId)
  }

  return (
    <div>
      <AppSidebar emailId={emailId} role={role} entitlement={entitlement} />{" "}
      {/* Pass emailId and role as props */}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent
            emailId={email}
            role={roles}
            entitlement={entitlements}
            password={pwd}
            traineeId={Trainee}
          />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}
DefaultLayout.propTypes = {
  emailId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  entitlement: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  traineeId: PropTypes.string.isRequired
}
export default DefaultLayout
