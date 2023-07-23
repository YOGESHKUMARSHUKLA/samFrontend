import React from "react"
import "./dashboard.css"
import TraineeDataService from "../../services/trainee.service"
import StudentProfile from "./Profile"
import AddTrainee from "./Training"
// import AddTrainee from "./AddTraining"
import { Link } from "react-router-dom"
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
import { Navigate, Route, Routes, useRouteMatch } from "react-router-dom"
import { cilPencil } from "@coreui/icons"
import { CChartLine } from "@coreui/react-chartjs"
import { getStyle, hexToRgba } from "@coreui/utils"
import CIcon from "@coreui/icons-react"
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilNotes,
  cilPeople,
  cilUser,
  cilUserFemale
} from "@coreui/icons"

import avatar1 from "src/assets/images/avatars/1.jpg"
import avatar2 from "src/assets/images/avatars/2.jpg"
import avatar3 from "src/assets/images/avatars/3.jpg"
import avatar4 from "src/assets/images/avatars/4.jpg"
import avatar5 from "src/assets/images/avatars/5.jpg"
import avatar6 from "src/assets/images/avatars/6.jpg"
import avatar7 from "src/assets/images/avatars/7.jpg"
import avatar8 from "src/assets/images/avatars/8.jpg"
import avatar9 from "src/assets/images/avatars/9.jpg"

import WidgetsBrand from "../widgets/WidgetsBrand"
import WidgetsDropdown from "../widgets/WidgetsDropdown"
import { useEffect } from "react"
import { useState } from "react"
import video from "src/assets/videos/sam.mp4"
import PropTypes from "prop-types"
const Dashboard = ({ emailId, role, entitlement, password, traineeId }) => {
  const [trainees, setTrainees] = useState([])
  const [id, setId] = useState([])

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

  return (
    <>
      <WidgetsDropdown />
      <video src={video} width="1440" height="500" controls></video>
    </>
  )
}
Dashboard.propTypes = {
  emailId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  entitlement: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  traineeId: PropTypes.string.isRequired
}
export default React.memo(Dashboard)
