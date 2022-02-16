import React from "react"
import Field from "../forms/field"import { TinyLetter, Email, Submit } from 'react-tinyletter'
import styled from 'styled-components'

const StyledEmail = styled(Email)`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border: 1px solid #ccc;
  font-size: 18px;
  font-weight: 100;
  width: 70%;
`

const StyledSubmit = styled(Submit)`
  background: transparent;
  border-bottom-left-radius: 0;
  border-left: none;
  border-top-left-radius: 0;
  border: 1px solid #ccc;
  width: 30%;
  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
  &:active {
    background-color: deepskyblue;
    color: white;
  }
`



const CheckoutContact = ({ controller }) => {
  return (
    <div className="mt-3 mb-6">
      <Field
        formik={controller}
        name={"email"}
        defaultValue={controller.values.email}
        label={"Email"}
        autocomplete="email"
      />
      <p className="mt-2 text-ui-dark text-xs">Enter your email to subscribe to my newsletter (optional)</p>
      <TinyLetter list="adamebell">
        <StyledEmail/>
        <StyledSubmit/>
      </TinyLetter>
    </div>
  )
}



export default CheckoutContact
