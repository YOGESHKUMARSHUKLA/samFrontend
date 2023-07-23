import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import { useEffect } from "react"
import { useState } from "react"
import { CBadge } from "@coreui/react"

export const AppSidebarNav = ({ items, emailId, role, entitlement }) => {
  const [FilterItems, setFilterItems] = useState("")
  const location = useLocation()
  const navLink = (name, icon, badge) => {
    // if (role === "Admin" && name !== "Add" && name !== "Edit") {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}{" "}
      </>
    )
    // }
  }

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    if (role === "Admin") {
      return (
        <>
          <Component
            {...(rest.to &&
              !rest.items && {
                component: NavLink
              })}
            key={index}
            {...rest}
            emailId={emailId}
            role={role}
            entitlement={entitlement}
          >
            {" "}
            {console.log("Not Groups : ", item.name)}
            {navLink(name, icon, badge)}
          </Component>
        </>
      )
    }
    if (
      role === "Student" &&
      item.name !== "Access Management" &&
      item.name !== "Bulk Upload" &&
      item.name !== "Activity Log" &&
      item.name !== "Add" &&
      // item.name !== "Edit" &&
      item.name !== "Reports"
    ) {
      return (
        <Component
          {...(rest.to &&
            !rest.items && {
              component: NavLink
            })}
          key={index}
          {...rest}
        >
          {console.log("Not Groups: ", item.name)}
          {navLink(name, icon, badge)}
        </Component>
      )
    }

    return null
  }
  const navGroup = (item, index) => {
    const { component, name, icon, to, ...rest } = item
    const Component = component

    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {console.log(" Groups : ", item.name)}
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
      </Component>
    )
  }

  // const applyFilters = itemm => {
  //   const filteredUsers = itemm.filter(item => {
  //     if (role === "Admin") {
  //       item.name.toString().toLowerCase().includes("Dashboard".toLowerCase())
  //     }
  //   })
  //   setFilterItems(filteredUsers)
  // }

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
    </React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  emailId: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  entitlement: PropTypes.string.isRequired
}
