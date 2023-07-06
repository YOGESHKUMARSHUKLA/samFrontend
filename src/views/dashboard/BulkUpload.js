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
  render() {
    return (
      <div className="container">
        <div className="mb-3">
          {/* <CFormInput
            type="file"
            id="formFile"
            label="Default file input example"
          /> */}
          <CInputGroup className="mb-3">
            <CFormInput type="file" id="inputGroupFile02" />
            <CInputGroupText component="label" htmlFor="inputGroupFile02">
              Upload
            </CInputGroupText>
          </CInputGroup>
        </div>
      </div>
    )
  }
}
