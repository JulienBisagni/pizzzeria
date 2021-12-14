import React from "react"
import {
  MdInfo,
  MdInsertInvitation,
  MdLocalShipping,
  MdSupervisorAccount,
  MdDashboard,
  MdPayment,
  MdDateRange,
  MdAirportShuttle,
  MdPages,
  MdFlight,
  MdArrowBack,
  MdArrowForward,
  MdSearch,
  MdSend,
  MdCheckCircle,
  MdClose,
} from "react-icons/md"
import { IoPizzaOutline } from "react-icons/io5"

export default function Cart({ icon, iconPosition = "right" }) {
  switch (icon) {
    case "info":
      return <MdInfo className={`icon --${(iconPosition = "right")}`} />
    case "insert_invitation":
      return (
        <MdInsertInvitation className={`icon --${(iconPosition = "right")}`} />
      )
    case "local_shipping":
      return (
        <MdLocalShipping className={`icon --${(iconPosition = "right")}`} />
      )
    case "supervisor_account":
      return (
        <MdSupervisorAccount className={`icon --${(iconPosition = "right")}`} />
      )
    case "dashboard":
      return <MdDashboard className={`icon --${(iconPosition = "right")}`} />
    case "payment":
      return <MdPayment className={`icon --${(iconPosition = "right")}`} />
    case "data_range":
      return <MdDateRange className={`icon --${(iconPosition = "right")}`} />
    case "airport_shutle":
      return (
        <MdAirportShuttle className={`icon --${(iconPosition = "right")}`} />
      )
    case "pages":
      return <MdPages className={`icon --${(iconPosition = "right")}`} />
    case "flight":
      return <MdFlight className={`icon --${(iconPosition = "right")}`} />
    case "arrow_back":
      return <MdArrowBack className={`icon --${(iconPosition = "right")}`} />
    case "arrow_forward":
      return <MdArrowForward className={`icon --${(iconPosition = "right")}`} />
    case "search":
      return <MdSearch className={`icon --${(iconPosition = "right")}`} />
    case "send":
      return <MdSend className={`icon --${(iconPosition = "right")}`} />
    case "send_circle":
      return <MdCheckCircle className={`icon --${(iconPosition = "right")}`} />
    case "pizza_outline":
      return <IoPizzaOutline className={`icon --${(iconPosition = "right")}`} />
    case "close":
      return <MdClose className={`icon --${(iconPosition = "right")}`} />
    default:
      return <MdInfo className={`icon --${(iconPosition = "right")}`} />
  }
}
