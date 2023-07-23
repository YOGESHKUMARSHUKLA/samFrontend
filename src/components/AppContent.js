import React, { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { CContainer, CSpinner } from "@coreui/react"

// routes config
import routes from "../routes"
import PropTypes from "prop-types"
import { useState } from "react"
const AppContent = ({ emailId, role, entitlement, password, traineeId }) => {
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [entitlements, setEntitlements] = useState("")
  const [roles, setRoles] = useState("")
  const [Trainee, setTrainee] = useState("")
  const [check, setCheck] = useState(false)
  if (!check) {
    setCheck(true)
    setEmail(emailId)
    setPwd(password)
    setEntitlements(entitlement)
    setRoles(role)
    setTrainee(traineeId)
  }
  return (
    <CContainer>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={
                    <route.element
                      emailId={email}
                      role={roles}
                      entitlement={entitlements}
                      password={pwd}
                      traineeId={Trainee}
                    />
                  }
                />
              )
            )
          })}
          <Route
            path="/"
            element={
              <Navigate
                to="dashboard"
                emailId={emailId}
                role={role}
                entitlement={entitlement}
                password={password}
                replace
              />
            }
          />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

AppContent.propTypes = {
  emailId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  entitlement: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  traineeId: PropTypes.string.isRequired
}

export default React.memo(AppContent)
